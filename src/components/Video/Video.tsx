import { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';
import Skip from './Skip';
import { getVideoInfo } from '../../utils/api';
import * as styles from './styles';

function Video() {
  const [videoInfo, setVideoInfo] = useState<{ [x: string]: any }>({});
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
        video={videoRef.current}
        videoContainer={videoContainerRef.current}
        current={current}
        duration={duration}
        title={videoInfo.title ?? ''}
        plyaing={playing}
        setPlaying={setPlaying}
        setCurrent={setCurrent}
      />
      <Skip
        video={videoRef.current}
        opening={videoInfo.opening ?? []}
        ending={videoInfo.ending ?? []}
        current={current}
        setCurrent={setCurrent}
      />
    </div>
  );
}

export default Video;
