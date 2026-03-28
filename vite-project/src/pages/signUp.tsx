import React from 'react'
import { MdArrowForward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";


import Background from "../assets/bgsec-login.jpg"
import BgLinkPages from '../components/bgLinkPages'
import TextInput from '../components/TextInput'
import { Link } from 'react-router-dom';



const SignUp = () => {
  return (
    <div className='w-full flex flex-col items-center pb-12 gap-24 bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${Background})` }}>
      <BgLinkPages title='sign up' />

      <div className="w flex flex-col items-center gap-8 py-10 px-24 bg-white shadow-2xl rounded-3xl">
        <h3 className='text-3xl font-bold'>Sing up</h3>
        <p className="text-lg capitalize">Already have an account? <Link className='text-sky-500' to="/signup">Log In .</Link></p>
        <TextInput id='email' label='Email' placeHolder='Enter your email here' />

        <TextInput id='name' label='User Name' placeHolder='Enter your name here' />
        <TextInput id='password' label='Password' placeHolder='Enter your password here' />
        <TextInput id='Confirmpassword' label='Confirm Password' placeHolder='Enter your password here' />

        <div className="flex w-full justify-between text-lg">
          <label htmlFor="checkbox" className='flex gap-2'>
            <input type="checkbox" className="checkbox" />
            I agree to the <span className=" font-bold">Terms & Conditions</span>

          </label>

        </div>

        <button className="w-full flex justify-center
                 items-center gap-2 text-2xl bg-blue-500
                  hover:bg-blue-600 shadow hover:shadow-2xl
                   transition duration-700 hover:-translate-y-1 
                   py-4 text-white rounded-3xl" >
          SignUp <MdArrowForward />
        </button>

        <div className="divider text-2xl ">OR</div>
        <div className="flex gap-5">
          <button className="btn btn-circle btn-xl text-2xl bg-blue-500 text-white"><FaFacebookF /></button>
          <button className="btn btn-circle btn-xl text-2xl hover:bg-blue-500 hover:text-white transition duration-500"><FaXTwitter /></button>

        </div>
      </div>
    </div>

  )
}

export default SignUp