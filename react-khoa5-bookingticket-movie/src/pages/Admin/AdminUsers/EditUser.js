import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capNhatThongTinNguoiDungAction, layDanhSachLoaiNguoiDungAction, layDanhSachNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Form,
    Input,
    Select,
  
  } from 'antd';
import { GROUPID } from '../../../util/config';
export default function EditUser(props) {
   
    const dispatch = useDispatch()
    const {danhSachNguoiDung} = useSelector(state => state.QuanLyNguoiDungReducer)
    // console.log(nguoiDungTimKiem)
    const nguoiDungTimKiem = danhSachNguoiDung[0]
    useEffect(() => {
        dispatch(layDanhSachLoaiNguoiDungAction())
        dispatch(layDanhSachNguoiDungAction(props.match.params.taiKhoan))
    }, [props.match.params.taiKhoan])
    const formik = useFormik({
        enableReinitialize : true,
        initialValues: {
          taiKhoan: nguoiDungTimKiem?.taiKhoan,
          matKhau: nguoiDungTimKiem?.matKhau,
          email: nguoiDungTimKiem?.email,
          soDt : nguoiDungTimKiem?.soDt,
          maLoaiNguoiDung : nguoiDungTimKiem?.maLoaiNguoiDung,
        hoTen :nguoiDungTimKiem?.hoTen,
        maNhom :GROUPID
        },
        validationSchema : Yup.object().shape({
            taiKhoan : Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            matKhau : Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            soDt : Yup.number().typeError("Must be number!").min(10,"Too Short!").required("Required"),
            hoTen : Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            maLoaiNguoiDung :Yup.string().required("Required")
        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
            dispatch(capNhatThongTinNguoiDungAction(values))
        },
      });
      const handleChange =(value) =>{
        // console.log(value)
        formik.setFieldValue('maLoaiNguoiDung',value)
    }
    const {danhSachLoaiNguoiDung} = useSelector(state => state.QuanLyNguoiDungReducer)
    const renderOption = () =>{
        return danhSachLoaiNguoiDung.map((item,index) =>{
            return  <Select.Option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</Select.Option>
        })
    }
    return (
        <div>
                <p className="font-bold text-xl">Chỉnh sửa người dùng</p>
            <Form
                 onSubmitCapture ={formik.handleSubmit}
                 labelCol={{
                     span: 4,
                 }}
                 wrapperCol={{
                     span: 14,
                 }}
                 layout="horizontal"
 
                 size="middle"
               
            >
             
                <Form.Item label="Tài khoản">
                    <Input value={formik.values.taiKhoan} disabled name="taiKhoan" onChange = {formik.handleChange} />
                    <p className="text-red-700">{formik.errors.taiKhoan}</p>
                </Form.Item>
                <Form.Item label="Mật khẩu">
                    <Input name="matKhau" onChange = {formik.handleChange} value={formik.values.matKhau}/>
                    <p className="text-red-700">{formik.errors.matKhau}</p>
                </Form.Item>
                <Form.Item label="Email">
                    <Input name="email" onChange = {formik.handleChange} value={formik.values.email} />
                    <p className="text-red-700">{formik.errors.email}</p>
                </Form.Item>
                <Form.Item label="Số điện thoại" >
                    <Input name="soDt" value={formik.values.soDt} onChange = {formik.handleChange}/>
                    <p className="text-red-700">{formik.errors.soDt}</p>
                </Form.Item>
                <Form.Item label="Mã loại người dùng">
                    <Select name="maLoaiNguoiDung" defaultValue ={formik.values.maLoaiNguoiDung}  onChange = {handleChange}>
                        {renderOption()}
                    </Select>
                    <p className="text-red-700">{formik.errors.maLoaiNguoiDung}</p>
                </Form.Item>
                <Form.Item label="Họ tên">
                    <Input name="hoTen"  onChange = {formik.handleChange} value={formik.values.hoTen} />
                    <p className="text-red-700">{formik.errors.hoTen}</p>
                </Form.Item>
                <Form.Item label="Cập nhật người dùng">
                <button type="submit" className="border-2 border-pink-500 rounded-lg bg-pink-500 px-4 py-1 text-white">Update User</button>
                </Form.Item>
            </Form>
        </div>
    )
}
