import { useState } from 'react'

const Header = ( {title} ) => ( <h1> {title} </h1> )

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const StatisticLine = (props) => {
  return (
    <tr> 
      <td> {props.text} </td>
      <td> {props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all){
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
        </tbody>
      </table>
    )
  }
  return ( 
    <div> No feedback given </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100 + " %"

  return (
    <div>
      <Header title={"give feedback"}/>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <Header title={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={total} average={average} positive={positive}/>
    </div>
  )
}

export default App