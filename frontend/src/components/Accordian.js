import React, { useState } from 'react'
import data from '../Utils/faq'
import SingleQuestion from './Question'
import '../styles/faq.css'

const Accordian = () => {
  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className='container'>
        <h3>Frequently Asked Questions</h3>
        <section className='info'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default Accordian