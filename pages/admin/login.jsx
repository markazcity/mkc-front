import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import PropagateLoader from "react-spinners/PropagateLoader";
import { css } from "@emotion/react";
import Head from 'next/head'

var qs = require('qs');


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [logging, setLogging] = useState(false);
  const LOGIN_URL = "https://api.markazcity.in/login.php";
  const DEV_LOGIN_URL = "http://localhost/mkc/api/login.php";

  const router = useRouter();

useEffect(() => {
  console.log(Cookies.get('user'));
}, [])


  const handleSignIn = async () => {
    setLogging(true);
    fetch(LOGIN_URL,
      {
        method: 'POST', 
        body:
        qs.stringify({
            "username": username,
            "password": password
          })
        ,
        headers: { 
          'Accept': 'application/json',
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      }
      }
      )
    .then(response => response.json())
    .then(data =>{
      setLogging(false);
      if(data.status==="NoDataFound"){
        setError("Something went wrong!");
      }
      else if(data.status==="NoUser"){
        setError("No user found with this credentials.");
      }else if(data.status==="PasswordIncorrect"){
        setError("Password do not match");
      }else{
        Cookies.set('user', `${data.username}`,{ expires: 1 });
      router.push('/admin');
      
      }
    });
  }

  const signIn = () => {
    if(username.length>5 && password.length>5){
      setError("");
    handleSignIn();
    }else{
      if(username.length<6){
        setError("Please enter a valid username.");
      }else if(password.length<6){
        setError("Please enter a valid password.");
      }
    }
  }

    return (<div>
       <Head>
                <title>Login - Markaz Knowledge City</title>
            </Head>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src="/assets/img/logob.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
        </div>
        { error && (<p className="bg-red-200 text-red-700 rounded px-5 py-2 text-center">
            {error}
          </p>)}
          { !error && (<p className="bg-transparent text-transparent rounded px-5 py-2 text-center">
            MKC
          </p>)}
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              {/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a> */}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) =>{
              e.preventDefault();
              signIn();
            }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <div className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"></div>
              </span>
              { !logging?
                <span>Sign in</span>
              :
            <PropagateLoader color="#fff"/> } <span className="text-transparent"> Sign In</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>);
}
 
export default Login;


 export const getStaticProps = async (ctx) => {


  return {
    props:{
      data:null
    }
  }
}