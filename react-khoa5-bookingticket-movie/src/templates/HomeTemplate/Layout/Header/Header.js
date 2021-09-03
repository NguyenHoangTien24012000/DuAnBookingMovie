import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Select } from 'antd';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { ACCESS_TOKEN, USER_LOGIN } from '../../../../util/config';
import { history } from '../../../../App';

const { Option } = Select;


export default function Header(props) {
    const { t, i18n } = useTranslation();
    function handleChange(value) {
        i18n.changeLanguage(value)
    }
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    // console.log("use", userLogin)
    const renderLogin = () => {
        if (Object.keys(userLogin).length === 0) {
            return <Fragment>
                <button className="self-center px-8 py-3 rounded"><NavLink to='/login' className="text-white"> <Trans i18nKey="signin">signin</Trans></NavLink></button>
                <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"><NavLink to="/register" className="text-white"><Trans i18nKey="signup">signup</Trans></NavLink></button>
            </Fragment>
        }
        return <Fragment>
            <button className="self-center px-8 py-3 rounded"><NavLink to='/profile' className="text-white"> <Trans i18nKey="profile">{userLogin.taiKhoan}</Trans></NavLink></button>
            <button className="self-center px-8 py-3 rounded" onClick={()=>{
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(ACCESS_TOKEN)
                history.push('/home')
                window.location.reload()
            }}><Trans i18nKey="profile">Đăng Xuất</Trans></button>
        </Fragment>
    }


    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/home" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" activeClassName="border-b-2 border-white text-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600">Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/admin/films" activeClassName="border-b-2 border-white text-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Admin</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" activeClassName="border-b-2 border-white text-white" className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent">Contact</NavLink>
                    </li>
                  

                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}
                    <Select defaultValue="EN" style={{ width: 80 }} onChange={handleChange}>
                        <Option value="en">EN</Option>
                        <Option value="vi">VN</Option>
                    </Select>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
