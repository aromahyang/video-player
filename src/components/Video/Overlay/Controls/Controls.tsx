import { useEffect, useRef, useState } from 'react';
import { toggleFullScreen, getPercentage } from './utils';
import ICONS from '../../../../icons';
import * as styles from './styles';

interface Props {
  video: any;
  videoContainer: any;
  current: number;
  duration: null | number;
  playing: boolean;
  setCurrent: (v: number) => void;
  setPlaying: (v: boolean) => void;
  setOverlayVisible: (v: boolean) => void;
}

function Controls({
  video,
  videoContainer,
  current,
  duration,
  playing,
  setCurrent,
  setPlaying,
  setOverlayVisible,
}: Props) {
  const barRef = useRef<HTMLDivElement>(null);
  const timer: { current: NodeJS.Timeout | null } = useRef(null);
  const [isFullScreen, _setFullScreen] = useState(false);
  const isFullScreenRef = useRef(isFullScreen);

  const handleFullScreen = () => {
    isFullScreenRef.current = !isFullScreenRef.current;
    _setFullScreen(isFullScreenRef.current);
  };

  const init = () => {
    document.addEventListener('fullscreenchange', handleFullScreen);
    return () => window.removeEventListener('fullscreenchange', handleFullScreen);
  };

  useEffect(init, []);

  const getThumbPosition = () => {
    const max = duration !== null ? duration : 100;
    const width = barRef.current?.clientWidth ?? 100;
    return (width * current) / max;
  };

  const getCurrentTime = (event: any) => {
    const max = duration !== null ? duration : 100;
    const width = barRef.current?.clientWidth ?? 100;
    let value = ((event.pageX - 48) * max) / width;
    if (value < 0) {
      value = 0;
    }
    if (duration !== null && value >= duration) {
      value = duration;
    }
    return value;
  };

  const setCurrentTime = (value: number) => {
    setCurrent(value);
    video.currentTime = value;
    setPlaying(value < Math.floor(video.duration));
  };

  const removeOverlay = () => {
    setOverlayVisible(false);
  };

  const handleMouseEnter = () => {
    setOverlayVisible(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(removeOverlay, 3000);
  };

  const handleMouseMove = (event: any) => {
    const value = getCurrentTime(event);
    setCurrentTime(value);
  };

  const handleMouseDown = () => {
    setPlaying(false);
  };

  const handleMouseUp = (event: any) => {
    const value = getCurrentTime(event);
    setCurrentTime(value);
  };

  const handlePlayButtonClick = () => {
    if (!video) {
      return;
    }

    setPlaying(!playing);
  };

  const handleBackwardButtonClick = () => {
    if (!video) {
      return;
    }

    video.currentTime -= 10;
  };

  const handleForwardButtonClick = () => {
    if (!video) {
      return;
    }

    video.currentTime += 10;
  };

  const handleScreenButtonClick = () => {
    if (!videoContainer) {
      return;
    }
    toggleFullScreen(videoContainer);
    // setFullScreen(!!document.fullscreenElement);
  };

  return (
    <div
      css={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div css={styles.controls}>
        <div
          css={styles.range(
            getThumbPosition(),
            getPercentage(
              current,
              duration !== null ? Math.floor(duration) : 100
            )
          )}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="timeline" ref={barRef} />
          <div className="progress" />
          <div
            className="timeline-thumb"
            draggable
            onDrag={handleMouseMove}
            onDragEnd={handleMouseUp}
          />
        </div>
        <div css={styles.controlPanel}>
          <div css={styles.leftControls}>
            <button className="play-button" onClick={handlePlayButtonClick}>
              <img
                src={playing ? ICONS['pause'] : ICONS['play']}
                alt={playing ? 'pause' : 'play'}
              />
            </button>
            <button className="screen-button">
              <img
                src={ICONS['backward_10']}
                alt="backward 10 seconds"
                onClick={handleBackwardButtonClick}
              />
            </button>
            <button className="screen-button">
              <img
                src={ICONS['forward_10']}
                alt="forward 10 seconds"
                onClick={handleForwardButtonClick}
              />
            </button>
          </div>
          <div>
            <button className="screen-button" onClick={handleScreenButtonClick}>
              <img
                src={isFullScreen ? ICONS['screen_small'] : ICONS['screen_full']}
                alt={isFullScreen ? 'screen_small' : 'screen_full'}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Controls;
