import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({quizTopics}) => {
    const {logo, name, total, id} = quizTopics;
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-100">Quiz: {total}</p>
                    </div>
                    <Link to={`/quiz/${id}`}  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-500 text-gray-900 hover:bg-blue-600">Quiz Start <FontAwesomeIcon className='pl-2' icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;