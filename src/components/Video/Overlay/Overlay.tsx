import { useState } from 'react';
import Controls from './Controls';
import { formatTime } from './utils';
import * as styles from './styles';

interface Props {
  video: any;
  videoContainer: any;
  duration: null | number;
  current: number;
  title: string;
  plyaing: boolean;
  setCurrent: (v: number) => void;
  setPlaying: (v: boolean) => void;
}

function Overlay({
  video,
  videoContainer,
  current,
  duration,
  title,
  plyaing,
  setCurrent,
  setPlaying,
}: Props) {
  const [isVisible, setVisible] = useState(true);

  return (
    <div css={styles.container(isVisible)}>
      <div>
        <div css={styles.information}>
          <h1>{title}</h1>
          <p>
            {video ? formatTime(current).join(':') : '0:00'} /{' '}
            {duration !== null ? formatTime(duration).join(':') : '0:00'}
          </p>
        </div>
        <Controls
          video={video}
          videoContainer={videoContainer}
          current={current}
          duration={duration}
          playing={plyaing}
          setCurrent={setCurrent}
          setPlaying={setPlaying}
          setOverlayVisible={setVisible}
        />
      </div>
    </div>
  );
}

export default Overlay;
