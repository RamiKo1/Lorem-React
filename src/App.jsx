import { useState } from 'react'
import { nanoid } from 'nanoid'
import data from './data'
const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    //Casting String to Number
    let amount = parseInt(count)
    console.log(typeof amount)
    setText(data.slice(0, amount))
    console.log(text)
  }
  return (
    <section className="section-center">
      <header>
        <h4>Tired of boring lorem ipsum?</h4>
      </header>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}> {item}</p>
        })}
      </article>
    </section>
  )
}
export default App
