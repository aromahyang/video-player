import { useState } from 'react';
import Controls from './Controls';
import { formatTime } from './utils';
import * as styles from './styles';
import ICONS from '~/icons';

interface Props {
  duration: null | number;
  current: number;
  title: string;
  plyaing: boolean;
  onBackButtonClick: () => void;
  onPlayClick: () => void;
  onBackwardClick: () => void;
  onForwardClick: () => void;
  onFullScreenClick: () => void;
  onTimelineDrag: (value: number) => void;
  onTimelineDragEnd: (value: number) => void;
  onMouseDown: () => void;
  onPipButtonClick: () => void;
}

function Overlay({
  current,
  duration,
  title,
  plyaing,
  onBackButtonClick,
  onPlayClick,
  onBackwardClick,
  onForwardClick,
  onFullScreenClick,
  onTimelineDrag,
  onTimelineDragEnd,
  onMouseDown,
  onPipButtonClick,
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
      <button onClick={onBackButtonClick}>
        <img src={ICONS['back_button']} alt="뒤로가기" />
      </button>
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
          onDrag={onTimelineDrag}
          onDragEnd={onTimelineDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={onMouseDown}
          onPipButtonClick={onPipButtonClick}
        />
      </div>
    </div>
  );
}

export default Overlay;
