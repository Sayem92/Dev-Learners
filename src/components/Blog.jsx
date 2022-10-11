import React from 'react';

const Blog = () => {
    return (
        <div className='m-3 md:m-6'>
            <div className="w-full p-6 mb-4 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 ">
                <article className='mb-6'>
                    <h2 className="text-xl font-bold">What is the purpose of react router?</h2>
                    <p className="mt-4 text-gray-400">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API</p>

                </article>
                
            </div>
            <div className="w-full p-6 mb-4 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 ">
                
                <article className='mb-6'>
                    <h2 className="text-xl font-bold">How does context api works ?</h2>
                    <p className="mt-4 text-gray-400">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </article>
                
            </div>
            <div className="w-full p-6 mb-4 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 ">
                
                <article className='mb-6'>
                    <h2 className="text-xl font-bold">What is the useRef hook ?</h2>
                    <p className="mt-4 text-gray-400">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    <p className="mt-4 text-gray-400">If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
                    To avoid this, we can use the useRef Hook.</p>
                </article>
            </div>
        </div>
    );
};

export default Blog;