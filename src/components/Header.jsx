import React from 'react';

const Header = () => {
    return (
        
            <section className="bg-gray-800 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-vector/quiz-neon-sign_1262-19629.jpg?w=2000" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Let's go to practice 
                            <span className="text-violet-400"> Quiz </span>and learn easily !!!
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Here, You can practice React, JavaScript, CSS, Git quiz and you can see that your how many right or wrong answer. So click the below button. </p>
                     
                    </div>
                </div>
            </section>
       
    );
};

export default Header;