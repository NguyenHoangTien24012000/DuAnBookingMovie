import React, { Fragment, useEffect, useState } from 'react'
import { Button, Tabs } from 'antd'
import { history } from '../../App';
import { ACCESS_TOKEN, GROUPID, USER_LOGIN } from '../../util/config';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatThongTinProfileAction, thongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';
import moment from 'moment';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
    Form,
    Input,
  } from 'antd';
export default function Profile(props) {
    const { TabPane } = Tabs;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thongTinTaiKhoanAction())
        return () => {

        }
    }, [])
    const { thongTinNguoiDungDatVe } = useSelector(state => state.QuanLyNguoiDungReducer)
    console.log(thongTinNguoiDungDatVe)
    function callback(key) {
        console.log(key);
    }
    const operations = <Fragment>
        <Button className="ml-1" onClick={() => {
            history.push('/home')
        }}>Back Home</Button>
        <Button className="ml-1" onClick={() => {
            localStorage.removeItem(USER_LOGIN)
            localStorage.removeItem(ACCESS_TOKEN)
            history.push('/home')
            window.location.reload()
        }}>Đăng xuất</Button>
    </Fragment>

    return (
        <div className="container">
            <Tabs tabBarExtraContent={operations} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Thông tin cá nhân" key="1">
                    <TabProfile {...props} thongTinNguoiDungDatVe={thongTinNguoiDungDatVe} />
                </TabPane>
                <TabPane tab="Lịch sử đặt vé" key="2">
                    <TabLichSuDatVe {...props} thongTinDatVe={thongTinNguoiDungDatVe.thongTinDatVe} />
                </TabPane>
            </Tabs>
        </div>
    )
}


function TabProfile(props) {
    const dispatch = useDispatch()
    const thongTinCaNhan = props.thongTinNguoiDungDatVe
    const [state, setState] = useState(false)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: thongTinCaNhan?.taiKhoan,
            matKhau: thongTinCaNhan?.matKhau,
            email: thongTinCaNhan?.email,
            soDt: thongTinCaNhan?.soDT,
            hoTen: thongTinCaNhan?.hoTen,
            maNhom: GROUPID,
            maLoaiNguoiDung : JSON.parse(localStorage.getItem(USER_LOGIN)).maLoaiNguoiDung
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
            matKhau: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            soDt: Yup.number().typeError("Must be number!").min(10, "Too Short!").required("Required"),
            hoTen: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
        }),
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            await dispatch(capNhatThongTinProfileAction(values))
            setState(!state)
        },
    });
    return (
        <div className="text-center flex justify-center mt-10">
            <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-coolGray-50 text-coolGray-800 shadow-md">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="123" className="object-cover object-center w-full h-full rounded" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{thongTinCaNhan.hoTen}</h2>
                        <span className="text-sm text-coolGray-600">{thongTinCaNhan.taiKhoan}</span>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z" />
                            </svg>
                            <span className="text-coolGray-600">{thongTinCaNhan.email}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z" />
                            </svg>
                            <span className="text-coolGray-600">{thongTinCaNhan.soDT}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="ml-5">
                <Button className="mb-5" onClick={()=>{
                    setState(!state)
                }}>Chỉnh sửa thông tin cá nhân</Button>
                {state ? <div>
                    <Form
                        onSubmitCapture={formik.handleSubmit}
                     
                        layout="horizontal"

                        size="middle"

                    >

                        <Form.Item label="Tài khoản">
                            <Input value={formik.values.taiKhoan} disabled name="taiKhoan" onChange={formik.handleChange} />
                            <p className="text-red-700">{formik.errors.taiKhoan}</p>
                        </Form.Item>
                        <Form.Item label="Mật khẩu">
                            <Input name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} />
                            <p className="text-red-700">{formik.errors.matKhau}</p>
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input name="email" onChange={formik.handleChange} value={formik.values.email} />
                            <p className="text-red-700">{formik.errors.email}</p>
                        </Form.Item>
                        <Form.Item label="Số điện thoại" >
                            <Input name="soDt" value={formik.values.soDt} onChange={formik.handleChange} />
                            <p className="text-red-700">{formik.errors.soDt}</p>
                        </Form.Item>
                        <Form.Item label="Họ tên">
                            <Input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} />
                            <p className="text-red-700">{formik.errors.hoTen}</p>
                        </Form.Item>
                        <Form.Item label="Cập nhật người dùng">
                            <button type="submit" className="border-2 border-pink-500 rounded-lg bg-pink-500 px-4 py-1 text-white">Update User</button>
                        </Form.Item>
                    </Form>
                </div> : ""}
            </div>
        </div>
    )

}

function TabLichSuDatVe(props) {
    const { thongTinDatVe } = props
    // const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer)
    return (
        <div>

            {thongTinDatVe?.map((item, index) => {
                return <div key={index} className="mt-2 text-left w-full flex space-x-2">

                    <img src={item.hinhAnh} style={{ width: "200px", height: "250px" }} alt={index} className="rounded" />

                    <div className="flex flex-col  whitespace-normal">
                        <div>
                            <p className="font-semibold mb-1 text-lg">{item.tenPhim}</p>
                            <p className=" text-coolGray-600">Ngày Đặt: {moment(item.ngayDat).format('hh:mm A')}  {moment(item.ngayDat).format('YYYY/MM/DD')}</p>
                            <p className="">Hệ thống rạp chiếu: {item.danhSachGhe[0]?.tenHeThongRap}</p>
                            <p className="">Rạp chiếu: {item.danhSachGhe[0]?.tenCumRap}</p>
                            <p className="">Mã vé: {item.maVe}</p>

                            <span>Số ghế ngồi: </span>
                            {item.danhSachGhe?.map((item, index) => {
                                return <span className="text-sm m-1 border-blue-800 border-2 rounded-xl" key={index}>{item.tenGhe}</span>
                            })}
                        </div>
                    </div>
                </div>
            })}
        </div>
    )

}

