import { useCookies } from "react-cookie"
import { parseCookies } from "../../helpers/cookies"
import { useState } from 'react'


const Login = () => {
  const [cookie, setCookie] = useCookies(["user"])
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = {"username":username, "password":password};


  const handleSignIn = async () => {
    console.log(JSON.stringify(data));
    try {
      fetch('http://localhost/mkc/api/login.php',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      }
      )
      .then(response => response.json())
      .then(json => console.log(json))

      // setCookie("user", JSON.stringify(data), {
      //   path: "/",
      //   maxAge: 3600, 
      //   sameSite: true,
      // })
    } catch (err) {
      console.log("Error::");
      console.log(err)
    }
  }


    return (<div>
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
              handleSignIn();
            }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <div className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"></div>
              </span>
              Sign in
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