import React from 'react'
import { useFormik } from 'formik';
import { GROUPID } from '../../util/config';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKiTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';
export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            matKhauConfirm: '',
            email: '',
            soDt: '',
            maNhom: '',
            hoTen: '',
            maNhom: GROUPID
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            matKhau: Yup.string().required('Password is required').min(6,"Too short"),
            matKhauConfirm: Yup.string().oneOf([Yup.ref('matKhau'), null], 'Passwords must match'),
            hoTen : Yup.string().min(6,"Too Short!")
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            dispatch(dangKiTaiKhoanAction(values))
        },
    });
    return (
        <div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Register an account</h1>
            <form onSubmit={formik.handleSubmit} className="mt-6" action="#" method="POST">
                <div>
                    <label className="block text-gray-700">Account</label>
                    <input name="taiKhoan" onChange={formik.handleChange} placeholder="Enter Account" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required />
                    <p className="text-red-700">{formik.errors.taiKhoan}</p>
                </div>

                <div>
                    <label className="block text-gray-700">Email</label>
                    <input name="email" onChange={formik.handleChange} placeholder="Enter Email" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required />
                    <p className="text-red-700">{formik.errors.email}</p>
                </div>
                <div>
                    <label className="block text-gray-700">Full name</label>
                    <input name="hoTen" onChange={formik.handleChange} placeholder="Enter full name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete = "true" required />
                    <p className="text-red-700">{formik.errors.hoTen}</p>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-2">
                        <div>  <label className=" text-gray-700">Password</label>
                            <input type="password" onChange={formik.handleChange} name="matKhau" placeholder="Enter Password" minLength={6} className="w-5/6 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required />
            <p className="text-red-700">{formik.errors.matKhau}</p>
          </div>
                        <div> <label className="text-gray-700">Password confirm</label>
                            <input type="password" onChange={formik.handleChange} name="matKhauConfirm" placeholder="Confirm" minLength={6} className="w-5/6 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none" required />
            <p className="text-red-700">{formik.errors.matKhauConfirm}</p>
          </div>
                    </div>
                </div>
                <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
        px-4 py-3 mt-6">Sign Up</button>
            </form>


        </div>
    )
}
