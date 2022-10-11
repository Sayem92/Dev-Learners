import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quiz = () => {
    const quizData = useLoaderData().data;
    const questionsArray = quizData.questions
    // console.log(quizData);
    // console.log(questionsArray);


    return (
        <div>         
            <section className="">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-4xl font-medium tracking-wider text-center text-blue-600 mb-4">Quiz for {quizData.name}</p>
                    {
                        questionsArray.map(questionAll => <Questions
                            key={questionAll.id}
                            questionAll={questionAll}

                        ></Questions>)
                    }
                
                </div>
            </section>
        </div>
    );
};

export default Quiz;