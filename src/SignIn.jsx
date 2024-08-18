import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
const SignIn = (props) => {
    const [toggle,setToggle] = useState(true)
    const [referal,setReferal] = useState(false)

    const activeToggle = ()=>{
        setToggle(false)
    }
    const deactiveToggle = ()=>{
        setToggle(true)
        setReferal(false)
    }
    const reFeral = ()=>{
        setReferal(true)
    }
    return(<>
    <div className="mx-6 ml-6 mr-20">
        <div className="my-4  top-3">
            <RxCross1 
                className=" font-bold text-xl cursor-pointer hover:bg-slate-200"
                onClick={()=>{
                    props.hideSideMenu()
                    deactiveToggle()
                }}
              />
        </div>
        <div className="flex justify-between">
            <div>
                <h2 className="text-[30px] font-medium">{toggle ? 'Login':'Sign Up'}</h2>
                <p>or {toggle ? <span onClick={activeToggle} className='text-[#f38217] cursor-pointer'>create an account</span>:<span onClick={deactiveToggle} className='text-[#f38217] cursor-pointer'>login to your account</span>}</p>
            </div>
            <img className="w-[100px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="roll image"/>
        </div> 
      {toggle ?
        <div className="border relative border-zinc-300">
      <input 
       type="tel"
       className="w-full peer p-6 font-medium placeholder-transparent focus:outline-none "  
       placeholder="Phone Number"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       name="phone"
       id="phone-signup"
       />
       <label
          htmlFor="phone-signup"
          className="
            absolute left-6 top-3 text-zinc-400 font-semibold
            transition-all transform
            -translate-y-1 scale-100
            origin-left
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-1/2
            peer-focus:-translate-y-1/3
            peer-focus:scale-75
            pointer-events-none
          "
        >Phone</label>
      </div>
      
      :
      <>
      <div className="mt-8 border border-b-0 border-zinc-300">
      <div className="border-b relative border-zinc-300">
      <input 
       type="tel"
       className="w-full peer p-6 font-medium placeholder-transparent focus:outline-none "  
       placeholder="Phone Number"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       name="phone"
       id="phone-signup"
       />
       <label
          htmlFor="phone-signup"
          className="
            absolute left-6 top-3 text-zinc-400 font-semibold
            transition-all transform
            -translate-y-1 scale-100
            origin-left
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-1/2
            peer-focus:-translate-y-1/3
            peer-focus:scale-75
            pointer-events-none
          "
        >Phone</label>
      </div>
      <div className="border-b relative border-zinc-300">
      <input 
       type="text"
       className="w-full peer p-6 font-medium placeholder-transparent focus:outline-none "  
       placeholder="Name"
       name="name"
       id="name-signup"
       /><label
          htmlFor="name-signup"
          className="
            absolute left-6 top-3 text-zinc-400 font-semibold
            transition-all transform
            -translate-y-1 scale-100
            origin-left
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-1/2
            peer-focus:-translate-y-1/3
            peer-focus:scale-75
            pointer-events-none
          "
        >Name</label>
      </div>
      <div className="border-b relative border-zinc-300">
      <input 
       type="email"
       className="w-full peer focus:placeholder:text-sm p-6 font-medium placeholder-transparent  focus:outline-none"  
       placeholder="Email"
       name="email"
       id="email-signup"
       />
       <label
          htmlFor="email-signup"
          className="
            absolute left-6 top-3 text-zinc-400 font-semibold
            transition-all transform
            -translate-y-1 scale-100
            origin-left
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-1/2
            peer-focus:-translate-y-1/3
            peer-focus:scale-75
            pointer-events-none
          "
        >Email</label>
      </div>
       {referal ? <div className="border-b relative border-zinc-300">
       <input 
       type="text"
       className="w-full peer p-6 font-medium placeholder-transparent border-zinc-300 focus:outline-none"  
       placeholder="Referal"
       name="referal"
       id="referal-signup"
       />
        <label
          htmlFor="referal-signup"
          className="
            absolute left-6 top-3 text-zinc-400 font-semibold
            transition-all transform
            -translate-y-1 scale-100
            origin-left
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-1/2
            peer-focus:-translate-y-1/3
            peer-focus:scale-75
            pointer-events-none
          "
        >Referal</label>
       </div>:''}
      </div>
      {referal ?'' :<p 
      className="cursor-pointer font-semibold mt-4 text-[0.95rem] text-blue-600"
      onClick={reFeral}
      >Have a referral code?  
      </p>}</>}
      <button
      className="w-full p-4 mt-4 bg-[#f38217] text-white font-semibold"
      >{toggle ? 'Login':'Continue'}</button>
      <p className="text-sm">By clicking on Login, I accept the <NavLink
      to='terms-and-condition' className='font-medium cursor-pointer text-zinc-600'>Terms & Conditions & Privacy Policy</NavLink></p>
     </div>
    </>)
}
export default SignIn