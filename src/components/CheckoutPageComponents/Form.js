import React, { useState } from 'react';
const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');



  return (
    <div className='grid flex-col'>
      <div className="flex flex-col justify-center border-2 shadow-md rounded-lg py-10">
        <div className='px-10'>
          <div className="justify-center flex">
            <label htmlFor="firstname">First Name</label>
          </div>
          <div className='flex justify-center'>
            <input className='rounded-lg' type="text" id='firstname'
            onChange={(event) => setFirstName(event.target.value)}
            required/>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-center'>
            <label htmlFor="lastname">Last Name</label>
          </div>
          <div className="flex justify-center">
            <input className='rounded-lg' type="text" id='lastname'
            onChange={(event) => setLastName(event.target.value)}
            required/>
          </div>
        </div>
        <div>
          <div className="justify-center flex">
            <label htmlFor="email">Email</label>
          </div>
          <div className="flex justify-center">
            <input className='rounded-lg' type="email" id='email'
            onChange={(event) => setFirstName(event.target.value)}
            required/>
            <span className='error'></span>
          </div>
        </div>
        <div className=''>
          <div className="justify-center flex">
            <label htmlFor="phonenumber">Phone Number</label>
          </div>
          <div className="flex justify-center">
            <input className='rounded-lg' type="text" id='phonenumber'
            onChange={(event) => setFirstName(event.target.value)}
            required/>
          </div>
        </div>
        <div className='flex pt-2 justify-center'><button className='ring-2 ring-cyan-400 hover:ring-yellow-400 hover:bg-cyan-400 hover:text-white rounded-lg px-6 py-2'>Continue</button></div>
      </div>
    </div>
  )
}

export default Form