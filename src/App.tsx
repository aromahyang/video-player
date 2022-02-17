import { useState } from 'react';
import { Card, VideoPlayer } from './components';
import * as styles from './styles';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div css={styles.container}>
      {open ? <Card /> : <VideoPlayer />}
    </div>
  );
}

export default App;
