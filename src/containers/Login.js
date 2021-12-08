import React, {useState} from "react";
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login,clearCheckout } from "../actions/auth";
import {StyledLogin} from "../styles/layout"
import signin from '../assets/img/sign_in.svg'
import loader from '../assets/img/loader-cube.svg'
import eyeSlash from '../assets/img/eye-slash.png'
import eye from '../assets/img/eye.png'
import {validateLogin} from '../helper'
import ReactGA from 'react-ga';

const Login = (props) => {
  process.env.NODE_ENV === 'production' &&  ReactGA.pageview(window.location.pathname + window.location.search);
  let email = React.createRef();
  let password = React.createRef();
  const [secure, setSecure] = useState(true);
  const [errors, setErrors] = useState({});
  const signIn = async ({current:{value: email}},{current:{value: password}}) => {
    let check = validateLogin({email,password})
    let dis = {}
    if (check.valid === false) {
      if (check.errors.email) {
        dis.email = check.errors.email
        setErrors(dis)
      }
      if (check.errors.password) {
        dis.password = check.errors.password
        setErrors(dis)
      }
      return
    }
    setErrors({})
    await props.login(email,password)
     props.clearCheckout()
  }
  return (
    <StyledLogin className="bg-pink-50 dark:bg-white">
       <div id="image" className=" hidden sm:block sm:w-1/3 mb-12 ">
            <img src={signin} className="mt-32 h-32  sm:h-32 xl:h-64 object-cover" alt="Logo"/>
            </div>
            <div id="content" className="w-full sm:w-1/2">
            <span className="text-gray-900  text-3xl mb-6 font-bold">
                Welcome back!
            </span>
            <p className="text-gray-900 text-md">
           Sign into your account
            </p>
            <form className="w-full max-w-lg mt-8" onSubmit={(e)=> { e.preventDefault(); signIn(email,password)}}>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-city">
        Email
      </label>
      <input ref={email} className={`appearance-none block w-full bg-gray-200 text-gray-700 mb-4 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${ errors.email ? "border-red-500": "border-gray-200"}`} id="grid-email" type="email" placeholder="test@gmail.com"/>
      {errors.email ? (
          <p className="text-red-500 text-xs italic">{errors.email}</p>

        ) : ''}
    </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4" htmlFor="grid-password">
        Password
      </label>
      <span className={`w-full inline-flex items-center rounded border border-r-1  bg-gray-200 text-gray-700 mb-2 text-sm  focus:outline-none focus:bg-white focus:border-gray-500 ${errors.password ? "border-red-500 " : " border-gray-200"}`}>
          <input ref={password} className="appearance-none block rounded w-full py-3 px-4 leading-tight" id="grid-password" type={secure ? 'password' : 'text'} placeholder="******************"/>
           {
             secure ? (

               <img src={eyeSlash} alt="slash" onClick={() => { setSecure(!secure)}} className="h-6 w-10 px-2 cursor-pointer fill-current"/>
             ) :(

               <img src={eye} alt="slash" onClick={() => { setSecure(!secure)}} className="h-8 w-10 px-1 cursor-pointer fill-current"/>
             )
           }
        </span>
        {errors.password ? (
          <p className="text-red-500 text-xs italic">{errors.password}</p>

        ) : ''}
    </div>
  </div>
  <button disabled={props.loading} className={`w-full mt-3 flex justify-center hover:bg-gray-200 hover:text-gray-900 dark:hover:text-gray-900 dark:hover:bg-gray-200 rounded-md px-3 py-3 uppercase ${ props.loading ? "bg-red-700  dark:bg-black dark:text-white text-white cursor-not-allowed": "bg-red-700  dark:bg-black text-white text-black cursor-pointer"}`}>
   {props.loading ?  (
     <>
     <img src={loader} className="h-6 w-10 px-2 fill-current" alt="loading..."/>
     loading &nbsp;...
     </>
   ):'LOG IN'}
  </button>
</form>
        </div>
        </StyledLogin>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading.status
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login,clearCheckout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));