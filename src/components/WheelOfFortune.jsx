import { useState } from "react";

function generateAnswer() {
  const word = 'Orange Clockwork'
  return word.split('');
}


export default function WheelOfFortune(props) {
  const [answer, setAnswer] = useState(generateAnswer());
  const [solved, setSolved] = useState([...Array(answer.length)]);

  const newAnswer = () => {
    const newWord = generateAnswer();
    setAnswer(newWord);
  }

  const solveLetter = (e) => {
    if (e.keyCode < 65 && e.keyCode > 90) return;
    const key = e.key.toLowerCase();
    const newSolved = solved.map((i, ind) =>
      answer[ind].toLowerCase() === key ? answer[ind] : i
    )
    setSolved(newSolved);
  }


  return (
    <>
      <WordPanel answer={answer} solved={solved} />
      <input type="text" onKeyUp={(e) => { solveLetter(e) }} />
    </>
  )
}

function WordPanel(props) {
  const { answer, solved } = props;
  const addRows = [...Array(answer.length + 2)];
  return (
    <>
      <div className="panel-row">
        {addRows.map((i, ind) => <div className="panel-space" key={ind} ></div>)}
      </div>
      <div className="panel-row">
        <div className="panel-space"></div>
        {solved.map((i, ind) =>
          answer[ind] === ' ' ?
            <div className="panel-space" key={ind} ></div> :
            <div className="panel-letter" key={ind} >{i}</div>
        )}
        <div className="panel-space"></div>
      </div>
      <div className="panel-row">
        {addRows.map((i, ind) => <div className="panel-space" key={ind} ></div>)}
      </div>
    </>
  )
}