import React, { useState } from 'react';
import './App.css';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.itClicked} >{props.passText}</button>
    </div>
  )
}
const Statistic = (props) => {
  return (
    <div><p>{props.passText}:{props.passValue}{props.passPersent}</p></div>
  )
}

const Statistics = (props) => {
  if (props.passState.good === 0 && props.passState.neutral === 0 && props.passState.bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  const all = props.passState.good + props.passState.neutral + props.passState.bad;
  const avgCalculation = (props.passState.good - props.passState.bad) / all;
  const posPercentage = (props.passState.good * 100) / all;

  return (<div>
    <Statistic passValue={props.passState.good} passText={props.passState.textG} />
    <Statistic passValue={props.passState.neutral} passText={props.passState.textN} />
    <Statistic passValue={props.passState.bad} passText={props.passState.textB} />
    <Statistic passValue={all} passText={props.passState.allT} />
    <Statistic passValue={avgCalculation} passText={props.passState.avgT} />
    <Statistic passValue={posPercentage} passText={props.passState.posT} passPersent={props.passState.percent} />


  </div>
  )
}

function App() {
  const [clicked, setClicked] = useState({
    good: 0,
    textG: "good",
    neutral: 0,
    textN: "neutral",
    bad: 0,
    textB: "bad",
    allT: "all",
    avgT: "average",
    posT: "positive",
    percent: "%"
  });


  const goodClicked = () => {
    setClicked({ ...clicked, good: clicked.good + 1 })
  }
  const neutralClicked = () => {
    setClicked({ ...clicked, neutral: clicked.neutral + 1 })
  }
  const badClicked = () => {
    setClicked({ ...clicked, bad: clicked.bad + 1 })
  }

  return (
    <div className="App">

      <h1>give feedback</h1>

      <div className="buttonDiv">
        <Button itClicked={goodClicked} passText={clicked.textG} />
        <Button itClicked={neutralClicked} passText={clicked.textN} />
        <Button itClicked={badClicked} passText={clicked.textB} />

      </div>

      <h1>statistics</h1>

      <Statistics passState={clicked} />


    </div>
  );
}

export default App;
