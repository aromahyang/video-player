import { useState } from 'react';
import Controls from './Controls';
import { formatTime } from './utils';
import * as styles from './styles';

interface Props {
  duration: null | number;
  current: number;
  title: string;
  plyaing: boolean;
  onPlayClick: () => void;
  onBackwardClick: () => void;
  onForwardClick: () => void;
  onFullScreenClick: () => void;
  moveCurrentTime: (value: number) => void;
  onMouseDown: () => void;
}

function Overlay({
  current,
  duration,
  title,
  plyaing,
  onPlayClick,
  onBackwardClick,
  onForwardClick,
  onFullScreenClick,
  moveCurrentTime,
  onMouseDown,
}: Props) {
  const [isVisible, setVisible] = useState(true);

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleMouseEnter = () => {
    setVisible(true);
  };

  return (
    <div css={styles.container(isVisible)}>
      <div>
        <div css={styles.information}>
          <h1>{title}</h1>
          <p>
            {formatTime(current).join(':')} /{' '}
            {duration !== null ? formatTime(duration).join(':') : '0:00'}
          </p>
        </div>
        <Controls
          current={current}
          duration={duration}
          playing={plyaing}
          onPlayClick={onPlayClick}
          onBackwardClick={onBackwardClick}
          onForwardClick={onForwardClick}
          onFullScreenClick={onFullScreenClick}
          moveCurrentTime={moveCurrentTime}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={onMouseDown}
        />
      </div>
    </div>
  );
}

export default Overlay;
