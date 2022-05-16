import React, { useState } from 'react'
import "./contactcard.css"

function ContactCard({name,email,image,phone}) {
    const[flag,setFlag] = useState(false);

    const handelClick = ()=>{
        if(flag===false){
            setFlag(true);
        }
        else{
            setFlag(false)
        }
    }


  return (<>
  <div className='contact-card' onClick={handelClick}>
        <div className='image-container'>
            <img src={image} alt="emage"></img>
        </div>
        <div className='contact-details'>
            <div className='fnt'>
                {name}
            </div>
            <div className='fmt'>
                {email}
            </div >
                {flag?<div className='fmt'>{phone}</div>:<div></div>}
        </div>     
    
    </div>
   
   
    
    
 
     
  </>
   )
}

export default ContactCard