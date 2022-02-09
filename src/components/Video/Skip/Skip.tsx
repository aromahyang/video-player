import { useEffect, useState } from 'react';
import * as styles from './styles';

interface Props {
  video: any;
  opening: number[];
  ending: number[];
  current: number;
  setCurrent: (v: number) => void;
}

function Skip({ video, opening, ending, current, setCurrent }: Props) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!opening.length || !ending.length) {
      return;
    }

    if (
      current <= opening[1] ||
      (current >= ending[0] && current <= ending[1])
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [current, opening, ending]);

  const handleClick = () => {
    if (!video) {
      return;
    }

    let target = 0;
    if (current <= opening[1]) {
      target = opening[1] + 1;
    } else if (current >= ending[0]) {
      target = ending[1] + 1;
    }
    setCurrent(target);
    video.currentTime = target;
  };

  return isVisible && opening.length && ending.length ? (
    <div css={styles.container}>
      <button onClick={handleClick}>
        {current < opening[1] ? '오프닝' : '엔딩'} 스킵
      </button>
    </div>
  ) : null;
}

export default Skip;
