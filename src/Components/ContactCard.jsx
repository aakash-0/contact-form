import React, { useState } from 'react'
import "./contactcard.css"
import useCollapse from 'react-collapsed';

function ContactCard({name,email,image,phone}) {
    const[flag,setFlag] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ flag });

    const handelClick = ()=>{
        if(flag===false){
            setFlag(true);
        }
        else{
            setFlag(false)
        }
    }


  return (<>
  <div className='contact-card' {...getToggleProps({onClick: handelClick})}>
        <div className='image-container'>
            <img src={image} alt="emage"></img>
        </div>
        <div className='contact-details'>
            <div className='fnt'>
                {name}
            </div>
            <div className='fmt'>
                {email}
            </div  >
                <div className='fmt' {...getCollapseProps()}>{phone}</div>
        </div>     
    
    </div>
   
   
    
    
 
     
  </>
   )
}

export default ContactCard