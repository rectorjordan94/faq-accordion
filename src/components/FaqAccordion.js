import React, { useState, useEffect } from "react";

const FaqAccordion = (props) => {

    // need a way to show/hide the anwers to the faq questions based on if the text of the question or the buttons are clicked
    // will probably need to use 'useEffect' to change the state of each question's answer from invisible to visible

    const [showAnswer, setShowAnswer] = useState(false)
    // const [questionClicked, setQuestionClicked] = useState('')

    // console.log(props.faqs)

    const handleClick = (e) => {
        setShowAnswer(prev => !prev)
        // console.log(e.target.dataset.key)
        const answerToShow = document.querySelector(`#p-${e.target.dataset.key}`)
        // console.log(answerToShow)
        if (answerToShow.style.display === 'none') {
            answerToShow.style.display = 'inline'
        } else {
            answerToShow.style.display = 'none'
        }
    }

    // if the text or the button is clicked, set something to true? when that something is set to true, show the <p> below the question that holds the answer to the question

    const faqs = props.faqs.map((faq, i) => {

        return (
            <div className="faq-inner" key={i}>
                <div className="question-container">
                    <button className="question" onClick={handleClick} data-key={i}>{faq.question}</button>
                    <button className="show-hide-button" onClick={handleClick} value={faq.answer} data-key={i}>+</button>
                </div>
                <p className="hidden answer" id={`p-${i}`}>{faq.answer}</p>
            </div>
        )
    })

    return (
        <div className="faq-outer">
            <h1 className="title">FAQs</h1>
            {faqs}
        </div>
    )
}

export default FaqAccordion