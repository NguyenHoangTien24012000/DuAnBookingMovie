
import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import cssTrapezoid  from './CheckOut.module.css'
export default function CheckOut(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    console.log(userLogin)
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-8 mt-10">
            <p className="text-center text-2xl text-green-600">Màn Hình</p>
                <div className=" flex justify-center">
                <div className={cssTrapezoid.trapezoid}></div>

                </div>

            </div>
            <div className="col-span-4 min-h-screen">

                <p className="text-center text-4xl font-bold text-green-500 mt-10">0 đ</p>
                <hr className="shadow-sm"></hr>
                <p className="mt-5">Tên Phim :</p>
                <p>Rạp Phim :</p>
                <p className>Ngày chiếu :</p>
                <hr className="shadow-sm"></hr>
                <div className="flex justify-between mt-5">
                    <p>Ghế</p>
                    <p>0 đ</p>
                </div>
                <hr className="shadow-sm"></hr>
                <p className="mt-5">Email</p>
                <p>{userLogin.email}</p>
                <hr className="shadow-sm"></hr>

                <div className="grid grid-rows-3 h-1/2">
                    <Button className="row-start-3" type="primary" shape="round"  size="large">
                        Đặt vé
                    </Button>
                </div>
            </div>
        </div>
    )
}
