import React, { useState } from 'react';
import './App.css';

const Button = (props) => {
  return (
    <div>
      <button onClick={props.buttonInfo}>{props.buttonName}</button>
    </div>
  )
}


function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  const buttonName = { namea: "next anecdotes", nameb: "vote" };
  const [selected, setSelected] = useState(0);

  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));
  const [maxPosition, setMaxPosition] = useState(0)
const [maxIndex, setMaxIndex] = useState();
  const voting = () => {
    const copy = [...vote]
    copy[selected] = copy[selected] + 1;
    setVote(copy)
    setMaxPosition(Math.max(...copy))
    setMaxIndex(copy.indexOf(Math.max(...copy)))
    console.log(copy)
    console.log(maxPosition)

  }


  const clicked = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div className="App">
      <h1>Anecdote of the day</h1>
      <div>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <p>has:{vote[selected]}votes</p>
      </div>
    </div>
      <div>
        <Button buttonName={buttonName.nameb} buttonInfo={voting} />
        <Button buttonName={buttonName.namea} buttonInfo={clicked} />
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
      <div>
        {anecdotes[maxIndex]}
      </div>
      <div>
        <p>has:{maxPosition}votes</p>
      </div>
    </div>
    </div>
  );
}

export default App;
