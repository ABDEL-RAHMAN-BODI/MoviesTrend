import React from 'react'
import Auth from '../../../assets/pawel-nolbert-4u2U8EO9OzY-unsplash 3.jpg'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Register() {
let navigate = useNavigate()



  async function signup(values) {
  let {data} = await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values)
console.log(data);
toast.success("Successfully Registered!",{position:"top-right"});
navigate("/")


}

let ValidationSchema = Yup.object({
  name:Yup.string().max(16,'Name Should be Less Than 16 Characters').required('Name is Required!'),
  email:Yup.string().email('Invalid Email Address').required('Email is Required!'),
  password:Yup.string().matches(/^[A-Za-z0-9]{8,16}$/,'Password Should Start With Capitals').required('Password is Required!'),
  age:Yup.string().required('Age is Required!'),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/,'Phone is Invalid').required('Phone is Required!'),

})





  let formik = useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    age:"",
    phone:"",
  },
  validationSchema:ValidationSchema,
  onSubmit:(values)=>signup(values)
  })
  

  return<>
   <div className="container">
      <div className="row">
        <div className="col-md-6">
  <img src={Auth} className='w-100 mt-5 mb-5' alt="" />
        </div>
        <div className="col-md-6 mt-5">
  <h3 className='text-center text-white py-2 mb-3 auth'>Register</h3>
  <form onSubmit={formik.handleSubmit}>
  <div className="form-group">
      <label htmlFor="Name" className='mb-2 h5 notfound'>Name</label>
      <input className='form-control trend' id='Name'
       type="text" name='name' placeholder='Name'
       value={formik.values.name}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       />
       {formik.errors.name&&formik.touched.name?<div className='alert alert-danger'>{formik.errors.name}</div>:""}
    </div>
    <div className="form-group">
      <label htmlFor="Email" className='mb-2 h5 notfound'>Email</label>
      <input className='form-control trend' id='Email'
       type="email" name='email' placeholder='Email'
       value={formik.values.email}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       />
       {formik.errors.email&&formik.touched.email?<div className='alert alert-danger'>{formik.errors.email}</div>:""}
    </div>
    <div className="form-group">
      <label htmlFor="Password" className='mb-2 h5 notfound mt-2'>Password</label>
      <input className='form-control trend' id='Password'
       type="password" name='password' placeholder='Password'
       value={formik.values.password}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       />
  {formik.errors.password&&formik.touched.password?<div className='alert alert-danger'>{formik.errors.password}</div>:""}
    </div>
    <div className="form-group">
      <label htmlFor="Age" className='mb-2 h5 notfound mt-2'>Age</label>
      <input className='form-control trend' id='Age'
       type="number" name='age' placeholder='Age'
       value={formik.values.age}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       />
  {formik.errors.age&&formik.touched.age?<div className='alert alert-danger'>{formik.errors.age}</div>:""}
    </div>

    <div className="form-group">
      <label htmlFor="Phone" className='mb-2 h5 notfound mt-2'>Phone</label>
      <input className='form-control trend' id='Phone'
       type="tel" name='phone' placeholder='phone'
       value={formik.values.phone}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       />
  {formik.errors.phone&&formik.touched.phone?<div className='alert alert-danger'>{formik.errors.phone}</div>:""}
    </div>
  
  <div className=" d-flex justify-content-center mt-3">
  <button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 auth text-white '>Register</button>
  </div>
  </form>
        </div>
      </div>
    </div>
  
  </>
}
