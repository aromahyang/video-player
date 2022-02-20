import { useState } from 'react';
import { Card, VideoPlayer } from './components';
import * as styles from './styles';

function App() {
  const [open, setOpen] = useState(false);

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleBackButtonClick = () => {
    setOpen(false);
  };

  return (
    <div css={styles.container(open)}>
      {open ? (
        <VideoPlayer onBackButtonClick={handleBackButtonClick} />
      ) : (
        <Card onClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
