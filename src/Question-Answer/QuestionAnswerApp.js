import React, { useState } from 'react';
import { QuestionAnswerDisplay } from './QuestionAnswerDisplay';
import { data } from './qadata'
import './QuestionAnswer.css';

export const QuestionAnswerApp = () => {
    const [questions, setQuestions] = useState(data)
    return (

        <main>
            <div className="question-container">
                <h2 >Question and Answers about something</h2>
                <div className='qa-underline'> </div>
                <section className="qa-info">
                    {questions.map((question) => {
                        return <QuestionAnswerDisplay key={question.id} {...question} />
                    })}
                </section>
            </div>
        </main>
    )
}