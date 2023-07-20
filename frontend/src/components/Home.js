import { Link } from 'react-router-dom';
export default function Home(props) {
  return (
    <>
      <header className="App-header">
        <h2>Welcome to English test</h2>
        <p>Categorizing a set of words according to their part of speech.</p>
        <div id="progressBar">
          <label htmlFor="progress">
            You have answered <span>{props.questionNumber}</span> questions out of{' '}
            <span>{props.data.length}</span>
          </label>
          <meter value={props.questionNumber} max="10"></meter>
        </div>
      </header>
      <main>
        {props.data.length > 0 && (
          <ul>
            {props.data.map((w) => (
              <li key={w.id} className="hidden">
                <h4>
                  Select correct answer <span>{w.word}</span>
                </h4>
                <div onClick={(e) => props.checkAanswer(e.target, w.pos)}>
                  <button>adverb</button>
                  <button>verb</button>
                  <button>noun</button>
                  <button>adjective</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button className="finish-now">
          <Link to="/rank">Finish It</Link>
        </button>
      </main>
    </>
  );
}
