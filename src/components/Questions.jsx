import { faCircleCheck, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';


const Questions = ({ questionAll }) => {
    const { question, options ,id, correctAnswer } = questionAll;
    // console.log(questionAll);
    const [ans, setAns] = useState([])
    // const [right, setRight]
   
    const selectOption=(option)=>{
        if(option===correctAnswer){
            
            swal("Correct Answer!", "You clicked the button!", "success");
        }
        else{
            swal("Wrong Answer!", "You clicked the button!", "warning");
        }
        // console.log(option);
    }
    
    const ansEye =(correctAnswer)=>{
        setAns(correctAnswer)
       
        }

       

    return (
        <div className='bg-gray-800 text-gray-100 mb-4 p-6 rounded-lg'>
           
           <div className='flex items-center' >
                 <small onClick={() => ansEye(correctAnswer)} className=' hover:bg-black rounded-lg p-4'>
                 <FontAwesomeIcon  icon={faEye} />
                 </small>
                 <p>{ans}</p>
           </div>
            <div >
                <h2 className="mb-12 leading-none text-center text-3xl">Question: {question} </h2>
                
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div className='flex items-center'>
                        <h3 onClick={()=>selectOption(options[0])} className="font-semibold p-4 hover:bg-black rounded-lg mr-2">
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></h3>
                        <p className="mt-1 text-gray-400">{options[0]}</p>
                    </div>
                    <div className='flex items-center'>
                        <h3 onClick={()=>selectOption(options[1])} 
                        className="font-semibold p-4 hover:bg-black rounded-lg mr-2">
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></h3>
                        <p className="mt-1 text-gray-400">{options[1]} </p>
                    </div>
                    <div className='flex items-center'>
                        <h3 onClick={()=>selectOption(options[2])} 
                        className="font-semibold p-4 hover:bg-black rounded-lg mr-2">
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></h3>
                        <p className="mt-1 text-gray-400">{options[2]}</p>
                    </div>
                    <div className='flex items-center'>
                        <h3 onClick={()=>selectOption(options[3])} 
                        className="font-semibold p-4 hover:bg-black rounded-lg mr-2">
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></h3>
                        <p className="mt-1 text-gray-400">{options[3]}</p>
                    </div>
                </div>
            </div>
           
        </div>
        
    );
};

export default Questions;