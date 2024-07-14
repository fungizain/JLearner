import { useState, useEffect, type ReactElement } from 'react';
import Card from '../components/Card';
import tango from '../assets/tango';

interface TangoItem {
  kanji: string;
  yomikata: string;
}

export interface HomeProps {}

export default function Home(props: HomeProps): ReactElement {
  const [displayTango, setDisplayTango] = useState<TangoItem | null>(null);

  const initializeDisplayTango = () => {
    const randomIndex = Math.floor(Math.random() * tango[0].length);
    setDisplayTango(tango[0][randomIndex]);
  };

  const handleNextClick = () => {
    initializeDisplayTango();
  };

  useEffect(() => {
    initializeDisplayTango();
  }, []);

  return (
    <div className='home'>
      <div className='header'>Home</div>
      <div className='body'>
        {displayTango && (
          <Card front={displayTango.kanji} back={displayTango.yomikata} />
        )}
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
