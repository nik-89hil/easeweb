import React from 'react'
import { motion } from "framer-motion"
import ContactImg from "../assets/contact.png"
import { useForm } from 'react-hook-form'


export const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();


  const showData = (data) => {
    console.log(data)
  }

  const handleErrors = (errors) => { };


  const registerOptions = {
    name: { required: "required..." },
    email: { required: "required..." },
    message:{required: "message..."}
  }




  return (
    <>
      <div className="box">
        <motion.h1

          initial={{
            y: -12,
            opacity: 0
          }}

          whileInView={{
            y: 0,
            opacity: 1
          }}

        >Contact</motion.h1>
        <motion.h4
          initial={{
            y: 12,
            opacity: 0
          }}

          whileInView={{
            y: 0,
            opacity: 1
          }}

        >start making your website with easeweb</motion.h4>
        <br />
        <br />
        <img src={ContactImg} alt="contact.png" className='aboutImg' />
        <br />
        <div className="cont-form">
          <form onSubmit={handleSubmit(showData, handleErrors)} className='formbox'>
            <label htmlFor="name">name</label><br />
            <input type="text" name='name' {...register('name', registerOptions.name)} />
            <p className="error">{errors?.name && errors?.name.message}</p>
            <label htmlFor="email">email</label><br />
            <input type="email" name='email' {...register('email', registerOptions.email)} />
            <p className="error">{errors?.email && errors?.email.message}</p>
            <br />
            <textarea type="text" name='message' placeholder='message' {...register('message', registerOptions.message)} />
            <p className="error">{errors?.message && errors?.message.message}</p>

            <button className='btn-cont'>send message</button>
            <button className='btn-cont' type='reset'>clear all</button>
          </form>
          <br />
          <hr />
          <br />
          <div className="con-soc">
            <p className='soc-box'>
              <a href=""></a>
            </p>
            <p className='soc-box'>
              <a href=""></a>
            </p>
            <p className='soc-box'>
              <a href=""></a>
            </p>
            <p className='soc-box'>
              <a href=""></a>
            </p>

          </div>

        </div>
      </div>
        <br />
        <br />



    </>
  )
}
