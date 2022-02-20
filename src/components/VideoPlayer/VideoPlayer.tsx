import { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';
import Skip from './Skip';
import { getVideoInfo, VideoInfo } from './utils/api';
import { toggleFullScreen } from './utils/fullscreen';
import * as styles from './styles';

interface Props {
  onBackButtonClick: () => void;
}

function VideoPlayer({ onBackButtonClick }: Props) {
  const [videoInfo, setVideoInfo] = useState<VideoInfo>({
    url: '',
    title: '',
    opening: null,
    ending: null,
  });
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState<null | number>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const init = () => {
    (async () => {
      const response = await getVideoInfo();
      setVideoInfo(response);
    })();
  };

  useEffect(init, []);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (playing) {
      videoRef.current.play();
    } else {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [playing]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrent(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };

  /** ==== Overlay ==== */

  const handleBackButtonClick = () => {
    setPlaying(false);
    onBackButtonClick();
  };

  const handlePipButtonClick = () => {
    if (
      document.pictureInPictureEnabled &&
      videoRef.current &&
      !videoRef.current.disablePictureInPicture
    ) {
      // pip
      try {
        if (document.pictureInPictureElement) {
          document.exitPictureInPicture();
        }
        videoRef.current.requestPictureInPicture();
      } catch (err) {
        console.error(err);
      }
    }
    setPlaying(false);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      setPlaying(!playing);
    }
  };

  const handleBackwardClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const handleForwardClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleFullScreenClick = () => {
    if (videoContainerRef.current) {
      toggleFullScreen(videoContainerRef.current);
    }
  };

  const handleTimelineDrag = (value: number) => {
    if (videoRef.current) {
      setCurrent(value);
      videoRef.current.currentTime = value;
    }
  };

  const handleTimelineDragEnd = (value: number) => {
    if (videoRef.current) {
      setCurrent(value);
      videoRef.current.currentTime = value;
      setPlaying(value < Math.floor(videoRef.current.duration));
    }
  };

  const handleMouseDownInControl = () => {
    setPlaying(false);
  };

  /** ==== Skip ==== */

  const handleSkipClick = () => {
    if (videoRef.current) {
      let target = 0;
      if (videoInfo.opening && current <= videoInfo.opening[1]) {
        target = videoInfo.opening[1] + 1;
      } else if (videoInfo.ending && current >= videoInfo.ending[0]) {
        target = videoInfo.ending[1] + 1;
      }
      setCurrent(target);
      videoRef.current.currentTime = target;
      if (!playing) {
        setPlaying(true);
      }
    }
  };

  return (
    <div ref={videoContainerRef} css={styles.container}>
      <video
        ref={videoRef}
        css={styles.video}
        src={videoInfo.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleVideoEnded}
      />
      <Overlay
        current={current}
        duration={duration}
        title={videoInfo.title ?? ''}
        plyaing={playing}
        onBackButtonClick={handleBackButtonClick}
        onPlayClick={handlePlayClick}
        onBackwardClick={handleBackwardClick}
        onForwardClick={handleForwardClick}
        onFullScreenClick={handleFullScreenClick}
        onTimelineDrag={handleTimelineDrag}
        onTimelineDragEnd={handleTimelineDragEnd}
        onMouseDown={handleMouseDownInControl}
        onPipButtonClick={handlePipButtonClick}
      />
      <Skip
        opening={videoInfo.opening ?? []}
        ending={videoInfo.ending ?? []}
        current={current}
        onClick={handleSkipClick}
      />
    </div>
  );
}

export default VideoPlayer;
