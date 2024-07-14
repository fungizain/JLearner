import { useState, type ReactElement } from 'react';

export interface CardProps {
  front: string;
  back: string;
}

export default function Card({ front, back }: CardProps): ReactElement {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className='card' onClick={handleCardClick}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className='card-front'>
          <p>{front}</p>
        </div>
        <div className='card-back'>
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}
