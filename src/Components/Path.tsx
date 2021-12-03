import { Product } from '../graph';
import shortid from 'shortid';

import './path.css';
import { useState } from 'react';

interface Props {
  path: Product[];
}

export const Path: React.FC<Props> = ({ path }) => {
  const summary = path.map((product) => product.type).join(' → ');

  const [instructions, setInstructions] = useState(false);

  let containerClassName = 'path-container';
  if (instructions) containerClassName += ' instruction-path-container';

  return (
    <div className={containerClassName}>
      <div className='path-header'>
        <div className='summary'>{summary}</div>
        <button className='icon' onClick={() => setInstructions(!instructions)}>
          <svg style={{ width: '24px', height: '24px' }} viewBox='0 0 24 24'>
            {!instructions ? (
              <path
                fill='currentColor'
                d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'
              />
            ) : (
              <path
                fill='currentColor'
                d='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'
              />
            )}
          </svg>
        </button>
      </div>

      {instructions && (
        <div className='instructions-container'>
          {path.slice(1, path.length).map((product, index) => (
            <div key={shortid()} className='path'>
              <div style={{ fontWeight: 'bold' }}>
                {index + 1}. {path[index].type} → {path[index + 1].type}:
              </div>
              <div style={{ marginLeft: '0.5em' }}>{product.instruction}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
