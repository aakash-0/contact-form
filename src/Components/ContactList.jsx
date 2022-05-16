import React from 'react'
import ContactCard from './ContactCard'
import {useState} from "react"
import "./contactlist.css"


function ContactList() {
    const [data,setData] = useState([
        {
            name:"Aakash yadav",
            email :"yaakash59.ay@gmail.com",
            image : "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            phone : "9292929292"
        },
        {
            name:"Kunal bisht",
            email :"kunalbisht@gmail.com",
            image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            phone : "9292929292"
        },
        {
            name:"Aman saxena",
            email :"amansaxena@gmail.com",
            image : "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            phone : "9292929292"
        },
        {
            name:"Suraj patel",
            email :"surajpatel@gmail.com",
            image : "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            phone : "9292929292"
        },
        {
            name:"shubham bisht",
            email :"shubhlabh@gmail.com",
            image : "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600",
            phone : "9292929292"
        }

    ])
  return (
    <div className='list-container'>
      {data.map((e,i)=>{
      return  <ContactCard key={i} name= {e.name} email ={e.email} image = {e.image} phone={e.phone} />
      })}
   </div>
  )
}

export default ContactList