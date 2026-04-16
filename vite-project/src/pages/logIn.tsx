
import { MdArrowForward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";


import Background from "../assets/bgsec-login.jpg"
import BgLinkPages from '../components/bgLinkPages'
import TextInput from '../components/TextInput'
import { Link } from 'react-router-dom';



const LogIn = () => {
    return (
        <div className='w-full flex flex-col items-center pb-12 gap-24 bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${Background})` }}>
            <BgLinkPages title='log in'/>

            <div className="w flex flex-col items-center gap-8 py-10 px-12 bg-white shadow-2xl rounded-3xl">
                <h3 className='text-3xl font-bold'>log in</h3>
                <p className="text-lg capitalize">Don't have an account yet? <Link className='text-sky-500' to="/signup"> Sign up for free</Link></p>
                <TextInput  placeHolder='Enter your name here' />
                <TextInput  placeHolder='Enter your password here' />
                <div className="flex w-full justify-between text-lg">
                    <label htmlFor="checkbox" className='flex gap-2'>
                        <input type="checkbox" className="checkbox" />
                        Remember me

                    </label>
                    <p className="text-secondary">Forget password?</p>
                </div>

                <button className="w-full flex justify-center
                 items-center gap-2 text-2xl bg-blue-500
                  hover:bg-blue-600 shadow hover:shadow-2xl
                   transition duration-700 hover:-translate-y-1 
                   py-4 text-white rounded-3xl" >
                    LogIn <MdArrowForward />
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

export default LogIn