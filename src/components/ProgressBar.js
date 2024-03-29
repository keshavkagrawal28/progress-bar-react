import { useEffect, useState } from 'react';
import { MAX, MIN } from '../utils/constants';

const ProgressBar = ({ value = MIN, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, 0)));
    if (percent >= 100) {
      onComplete();
    }
  }, [value]);

  return (
    <div className='progress'>
      <span
        style={{ color: percent > (MAX + MIN) / 2 - 1 ? 'white' : 'black' }}
      >
        {percent.toFixed()}%
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: 'left',
        }}
        role='progressbar'
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent.toFixed()}
      ></div>
    </div>
  );
};
export default ProgressBar;
