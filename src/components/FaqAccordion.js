import React, { useState, useEffect } from "react";

const FaqAccordion = (props) => {

    // need a way to show/hide the anwers to the faq questions based on if the text of the question or the buttons are clicked
    // will probably need to use 'useEffect' to change the state of each question's answer from invisible to visible

    const [showAnswer, setShowAnswer] = useState(false)
    const [buttonSvg, setButtonSvg] = useState(<></>)
    // const [questionClicked, setQuestionClicked] = useState('')

    // console.log(props.faqs)

    const handleClick = (e) => {
        setShowAnswer(prev => !prev)
        
        const answerToShow = document.querySelector(`#p-${e.target.dataset.key}`)
        const buttonToChange = document.querySelector(`#button-${e.target.dataset.key}`)
        // console.log(answerToShow)
        if (answerToShow.style.display === 'none') {
            answerToShow.style.display = 'block'
            buttonToChange.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`
        } else {
            answerToShow.style.display = 'none'
            buttonToChange.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`
        }
        
    }

    // if the text or the button is clicked, set something to true? when that something is set to true, show the <p> below the question that holds the answer to the question

    const faqs = props.faqs.map((faq, i) => {

        return (
            <div className="faq-inner" key={i}>
                <div className="question-container">
                    <button className="question" onClick={handleClick} data-key={i}>{faq.question}</button>
                    <button className="show-hide-button" id={`button-${i}`} onClick={handleClick} value={faq.answer} data-key={i}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg></button>
                </div>
                <p className="hidden answer" id={`p-${i}`}>{faq.answer}</p>
                <hr id={`hr-${i}`} />
            </div>
        )
    })

    return (
        <div className="faq-outer">
            <div className="title-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
                <h1 className="title">FAQs</h1>
            </div>
            {faqs}
        </div>
    )
}

export default FaqAccordion