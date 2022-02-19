import { useState } from 'react';
import { Card, VideoPlayer } from './components';
import * as styles from './styles';

function App() {
  const [open, setOpen] = useState(false);

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleBackClick = () => {
    setOpen(false);
  };

  return (
    <div css={styles.container(open)}>
      {open ? (
        <VideoPlayer onBackClick={handleBackClick} />
      ) : (
        <Card onClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
