import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';
import Topics from './Topics';

const Home = () => {
    const quizData = useLoaderData().data;
    // console.log(quizData);
    return (
        <div>
            <Header></Header>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             <div className="grid gap-5 mx-auto sm:grid-cols-1 lg:grid-cols-2 lg:max-w-screen-lg">
           {
            quizData.map(quizTopics => <Topics
                key={quizTopics.id}
                quizTopics={quizTopics}
            ></Topics>)
           }
        </div>
        </div>
        </div>
    );
};

export default Home;