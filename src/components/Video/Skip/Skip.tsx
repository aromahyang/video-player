import { useEffect, useState } from 'react';
import * as styles from './styles';

interface Props {
  opening: number[];
  ending: number[];
  current: number;
  onClick: () => void;
}

function Skip({ opening, ending, current, onClick }: Props) {
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

  return isVisible && opening.length && ending.length ? (
    <div css={styles.container}>
      <button onClick={onClick}>
        {current < opening[1] ? '오프닝' : '엔딩'} 스킵
      </button>
    </div>
  ) : null;
}

export default Skip;
