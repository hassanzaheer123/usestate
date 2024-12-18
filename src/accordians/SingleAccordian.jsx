import React, { useState } from 'react'

const SingleAccordian = ({question,answer}) => {
    const [current_accordian,setCurrent_accordian]=useState();
    const [pclass,setPclass]=useState("d-none");
    const [current_accordian_state,setcurrent_accordian_state]=useState("+");

    function accordian_clicked(){
        setCurrent_accordian(0);
        if (current_accordian_state=="+") {
            setPclass("");
            setcurrent_accordian_state("-");
        }
        else{
            setPclass("d-none");
            setcurrent_accordian_state("+");
        }
    }
  return (
    <>
    <div className="single_accordian border p-2 ps-4 pt-3 mb-3">
        <div className="top d-flex justify-content-between align-items-center">
            <h4>{question}</h4>
            <span onClick={accordian_clicked}  className='plus me-4'><p>{`${current_accordian_state}`}</p></span>
        </div>
        
        <p id='accordian_text' className={`${pclass}`}>
            <span className='text-secondary mt-3'>
            {answer}
            </span>
        
        </p>
    </div>
    </>
  )
}

export default SingleAccordian
