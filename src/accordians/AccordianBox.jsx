import React from 'react'
import SingleAccordian from './SingleAccordian'
import { faqs } from './faqs'

const AccordianBox = () => {
  return (
    <div className="col-9 right">
             {faqs.map((item,index)=>{
              return (
                <SingleAccordian key={index} {...item} />
              )
              
             })}
             
               
    </div>
  )
}

export default AccordianBox
