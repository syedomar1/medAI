// import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom';

// const Signup = (props) => {
//     const [credentials,setCredentials] = useState({name: "", email:"", password: "", cpassword: ""});
//     let navigate = useNavigate();
//     const handleSubmit = async(e) =>{
//       e.preventDefault();
//       const {name, email, password} = credentials
//       const response = await fetch(`http://127.0.0.1:10000/api/auth/createuser`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({name,email,password})
//         });
//         const json = await response.json()
//         console.log(json)
//         if(json.success){
//           // Save the auth token and redirect
//           localStorage.setItem("token", json.authtoken);
//           navigate("/");
//           props.showAlert("Account Created Successfully", "success")
//         }
//         else{
//           props.showAlert(" User Aldready exists", "danger")
//         }
//   }
//   const onChange = (e) => {
//       setCredentials({ ...credentials, [e.target.name]: e.target.value });
//     };
//   return (
//     <div className='mt-2'>
//       <h2 className='my-2'>Create an account to use medAI</h2>
//       <form onSubmit={handleSubmit} className='container'>
//   <div className="my-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="email" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" id="password" name='password' minLength={5} required onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="cpassword" className="form-label">Password</label>
//     <input type="password" className="form-control" id="cpassword" name='cpassword' minLength={5} required onChange={onChange}/>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

// export default Signup

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:10000/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.ok) {
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
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* imgbox */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src='../assets/homebg.png' alt="" />
            </figure>
          </div>
          <div className="rounded-l-g lg:pl-16 py-11">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-2">
              Create an <span className="text-primaryColor"> Account</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-5 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-5 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder=" Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-5 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleInputChange}
                  className="w-full px-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-5 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className=" flex items-center">
                <figure className="w-[60px] h-[60px] rounded-full border-solid border-primaryColor flex items-center justify-center">
                  <img src='../assets/homebg.png' alt="" className="w-full rounded-full" />
                </figure>
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor rounded-lg text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
                >
                  Sign Up
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
