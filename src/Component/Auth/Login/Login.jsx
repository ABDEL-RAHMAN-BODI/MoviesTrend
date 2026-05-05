// Desgin Formik Yup Api  Toast

import React from 'react'
import Auth from '../../../assets/pawel-nolbert-4u2U8EO9OzY-unsplash 3.jpg'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Login({savetoken}) {
let navigate = useNavigate()



  async function login(values) {
  let {data} = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signin`,values)
console.log(data);
localStorage.setItem("token",data.token);
savetoken()
toast.success("Welcome to Home!",{position:"top-right"});
navigate("/home");


}

let ValidationSchema = Yup.object({
   email:Yup.string().email('Invalid Email Address').required('Email is Required!'),
   password:Yup.string().matches(/^[A-Za-z-0-9]{8,16}$/,'Password Should Start With Capitals').required('Password is Required!'),
})


let formik = useFormik({
initialValues:{
  email:"",
  password:"",
},
validationSchema : ValidationSchema,
onSubmit:(values)=>login(values)
})






  return <>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
<img src={Auth} className='w-100 mt-5 mb-5' alt="" />
      </div>
      <div className="col-md-6 mt-5">
<h3 className='text-center text-white py-2 mb-3 auth'>Login</h3>
<form onSubmit={formik.handleSubmit}>
  <div className="form-group">
    <label htmlFor="Email" className='mb-2 h5 notfound'>Email</label>
    <input className='form-control trend' id='email'
     type="email" name='email' placeholder='Email'
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     
     />
    {formik.errors.email&&formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:""}
  </div>
  <div className="form-group">
    <label htmlFor="Password" className='mb-2 h5 notfound mt-2'>Password</label>
    <input className='form-control trend' id='password'
     type="password" name='password' placeholder='Password'
     value={formik.values.password}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}

     
     />
    {formik.errors.password&&formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:""}
  </div>

<div className=" d-flex justify-content-center mt-3">
<button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 auth text-white '>Login</button>
</div>
</form>
      </div>
    </div>
  </div>
  
  </>
}
