import { useEffect, useState } from 'react';
import * as styles from './styles';
import { getData, DataType } from './api';

interface Props {
  onClick: () => void;
}

function Card({ onClick }: Props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataType>({
    description: '',
    subtitle: '',
    title: '',
    thumb: '',
  });

  const init = () => {
    (async () => {
      const res = await getData();
      setLoading(false);
      setData(res);
    })();
  };

  useEffect(init, []);

  return loading ? (
    <div>spinner</div>
  ) : (
    <div css={styles.container} onClick={onClick}>
      <img src={data.thumb} alt="Poster" />
      <section>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </section>
    </div>
  );
}

export default Card;
