// import React, { useState } from 'react'
// import {useNavigate} from 'react-router-dom';

// const Login = (props) => {
//     const [credentials,setCredentials] = useState({email:"", password: ""});
//     let navigate = useNavigate();
//     const handleSubmit = async(e) =>{
//         e.preventDefault();
//         const response = await fetch(`http://127.0.0.1:10000/api/auth/login`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({email:credentials.email, password: credentials.password})
//           });
//           const json = await response.json()
//           console.log(json)
//           if(json.success){
//             // Save the auth token and redirect
//             localStorage.setItem("token", json.authtoken);
//             props.showAlert(" LoggedIn Successfully", "success")
//             navigate("/");
//           }
//           else{
//             props.showAlert(" Invalid Details", "danger")
//           }
//     }
//     const onChange = (e) => {
//         setCredentials({ ...credentials, [e.target.name]: e.target.value });
//       };
//   return (
//     <div className='mt-2'>
//       <h2 className='my-2'>Login to continue with medAI</h2>
//       <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password'/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:10000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.ok) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        console.error(json.message); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> back
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor rounded-lg text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account?
            <Link to="/signup" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
