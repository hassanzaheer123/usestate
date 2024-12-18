import React from 'react'
import "./accordians_styles.css"
import Left from './Left'
import AccordianBox from './AccordianBox'
const Accordians = () => {
  return (
    <>
    <div className="body">
        <div className="white bg-white row p-5">
            <Left />
            <AccordianBox />

        </div>
    </div>
    
    </>
  )
}

export default Accordians
