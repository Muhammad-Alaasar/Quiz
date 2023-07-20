import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Result from './components/Result';
import Home from './components/Home';
import './App.css';

function App() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  let [secore, setSecore] = useState(0);
  let [questionNumber, setQuestionNumber] = useState(0);

  // Fetch Data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () =>
    await fetch('http://localhost:3000/words')
      .then((res) => res.json())
      .then((resData) => setData(resData));

  // Check answer
  const checkAanswer = (element, correctAnswar) => {
    const prevSibling = element.parentElement.previousElementSibling;

    if (element.innerText === correctAnswar) {
      prevSibling.innerHTML = "<span class='correct'>Correct</span> " + prevSibling.innerText;
      setSecore(++secore);
    } else {
      prevSibling.innerHTML = "<span class='incorrect'>Incorrect</span> " + prevSibling.innerText;
    }
    // Disabled question after answered
    element.parentElement.parentElement.classList.add('disabledElement');

    // Increment Answered Questions
    setQuestionNumber(++questionNumber);

    // Shows Next Question
    if (questionNumber < 10)
      element.parentElement.parentElement.nextElementSibling.classList.remove('hidden');

    // Nagitave to rank page
    if (questionNumber === 10) {
      setQuestionNumber(0)
      navigate('/rank');
    }
    
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home data={data} questionNumber={questionNumber} checkAanswer={checkAanswer} />}
        ></Route>
        <Route path="/rank" element={<Result secore={secore} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
