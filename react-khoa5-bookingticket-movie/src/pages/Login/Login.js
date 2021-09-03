import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import { NavLink } from 'react-router-dom';
export default function Login(props) {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau : ''
        },
        onSubmit: values => {
            console.log("values",values)
            dispatch(dangNhapAction(values))
        },
      });

      const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = formik;


    return (
        <div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
            <form onSubmit={handleSubmit} className="mt-6" action="#" method="POST">
                <div>
                    <label className="block text-gray-700">Account</label>
                    <input name="taiKhoan" onChange={handleChange} placeholder="Enter Account" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" onChange={handleChange} name="matKhau" placeholder="Enter Password" minLength={6} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required />
                </div>
                <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                </div>
                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6">Log In</button>
            </form>

            <p className="mt-8">Need an account? 
                <NavLink to="/register" className="text-blue-500 hover:text-blue-700 font-semibold" >Create an
                account</NavLink>
                </p>

        </div>
    )
}
