import { useEffect, useState } from 'react';
import shortid from 'shortid';
import './App.css';
import { Path } from './Components/Path';
import { graph, types, Product } from './graph';

let visited: string[] = [];

function App() {
  const [fromTypes, setFromTypes] = useState(types);
  const [toTypes, setToTypes] = useState(types);

  const [from, setFrom] = useState('none');
  const [to, setTo] = useState('none');

  const [started, setStarted] = useState(false);

  const [paths, setPaths] = useState<Product[][]>([]);

  useEffect(() => {
    if (started) {
      const start: Product = {
        type: from,
        instruction: '',
      };
      visited = [];
      const newPaths = getPaths(start, to);
      newPaths.sort((a, b) => a.length - b.length);
      setPaths(newPaths);
    }
  }, [from, to, started]);

  function handleFromChange(val: string) {
    if (!started && val !== 'none' && to !== 'none') setStarted(true);
    setFrom(val);

    const newToTypes = types.slice();
    for (let i = 0; i < newToTypes.length; ++i) {
      if (newToTypes[i] === val) {
        newToTypes.splice(i, 1);
        break;
      }
    }

    setToTypes(newToTypes);
  }

  function handleToChange(val: string) {
    if (!started && from !== 'none' && val !== 'none') setStarted(true);
    setTo(val);

    const newFromTypes = types.slice();
    for (let i = 0; i < newFromTypes.length; ++i) {
      if (newFromTypes[i] === val) {
        newFromTypes.splice(i, 1);
        break;
      }
    }

    setFromTypes(newFromTypes);
  }

  return (
    <div>
      <div className='credit'>
        <div>
          A project by{' '}
          <a
            href='https://www.facebook.com/profile.php?id=100075591456103'
            target='_blank'
            rel='noreferrer'
          >
            Md Irtiaz Kabir
          </a>{' '}
          and{' '}
          <a
            href='https://www.facebook.com/profile.php?id=100075494377507'
            target='_blank'
            rel='noreferrer'
          >
            Md Imtiaz Kabir
          </a>
        </div>
        <div>
          This program has been taught discrete reactions and it uses dfs
          bactracking algorithm to connect the pieces together
        </div>
        <div style={{ color: 'tomato' }}>
          Catuion: This is not supposed to be used as your guide book! It's only
          a toy project.
        </div>
      </div>

      <form className='select-form'>
        <select
          onChange={(event) => handleFromChange(event.target.value)}
          value={from}
        >
          {!started && <option value='none'>Choose Here</option>}
          {fromTypes.map((type) => (
            <option value={type} key={`from-${type}`}>
              {type}
            </option>
          ))}
        </select>
        <div style={{ fontSize: '2rem', margin: '0 1em' }}>→</div>
        <select
          onChange={(event) => handleToChange(event.target.value)}
          value={to}
        >
          {!started && <option value='none'>Choose Here</option>}
          {toTypes.map((type) => (
            <option value={type} key={`to-${type}`}>
              {type}
            </option>
          ))}
        </select>
      </form>

      <div style={{ margin: '0 1.5em' }}>
        {paths.length > 0 &&
          paths.map((path, index) => (
            <div key={shortid()} className='path-wrapper'>
              <div className='path-index'>{index + 1}.</div>
              <Path path={path} />
            </div>
          ))}
      </div>
    </div>
  );
}

function getPaths(node: Product, target: string): Product[][] {
  if (node.type === target) return [[node]];

  visited.push(node.type);

  const resultPaths: Product[][] = [];

  let visitedCopy = visited.slice();

  for (let connectedNode of graph[node.type]) {
    let productName = connectedNode.type;

    if (visited.includes(productName)) continue;

    const paths = getPaths(connectedNode, target);

    if (paths.length !== 0) {
      for (let i = 0; i < paths.length; ++i) {
        paths[i].unshift(node);
        resultPaths.push(paths[i]);
      }
    }

    visited = visitedCopy.slice();
  }

  return resultPaths;
}

export default App;
