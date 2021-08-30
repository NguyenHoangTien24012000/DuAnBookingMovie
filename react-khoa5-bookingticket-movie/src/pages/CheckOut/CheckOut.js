
import { Button } from 'antd'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChitietPhongVeAction } from '../../redux/actions/QuanLyDatVeAction'
import { CHUYEN_TAB_CHECKOUT, CHUYEN_TAB_KET_QUA, DAT_VE } from '../../redux/types/QuanLyDatVeTypes'
import cssTrapezoid from './CheckOut.module.css'
import './StyleGhe.css'
import _ from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';
import { thongTinTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction'
import moment from 'moment'
import { history } from '../../App'
import { ACCESS_TOKEN, USER_LOGIN } from '../../util/config'
import { NavLink } from 'react-router-dom'
// import { connection } from '../../index'



function CheckOut(props) {
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachHangKhacDangdat } = useSelector(state => state.QuanLyDatVeReducer)
    // console.log("chiTietPhongVe", chiTietPhongVe)
    const { danhSachGhe, thongTinPhim } = chiTietPhongVe

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layChitietPhongVeAction(props.match.params.id))
        //Load danh sach ghe dang dat tu server về 
        // connection.on("loadDanhSachGheDaDat",(dsGheKhachDat) =>{
        //     console.log('DanhsachGheKhachDat', dsGheKhachDat)
        // })

    }, [])
    const renderDanhSachGhe = () => {
        return danhSachGhe?.map((item, index) => {
            let gheVip = item.loaiGhe === "Vip" ? 'gheVip' : ''
            let gheDaDat = item.daDat ? 'gheDaDat' : ''
            let gheDangDat = danhSachGheDangDat.findIndex(dangDat => dangDat.maGhe === item.maGhe)
            let cssGheDangDat = gheDangDat !== -1 ? 'gheDangDat' : ''
            let gheNguoiKhac = danhSachGheKhachHangKhacDangdat.findIndex(nguoiKhac => nguoiKhac.maGhe === item.maGhe)
            let cssGheNguoiKhac = gheNguoiKhac !== -1 ? 'gheNguoiKhacDangDat' : ''
            let cssGheBanDat = userLogin.taiKhoan === item.taiKhoanNguoiDat ? 'gheDoBanDat' : ''
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDangDat: item
                    })
                }} type="button" disabled={item.daDat || gheNguoiKhac !== -1} className={`ghe ${gheVip} ${gheDaDat} ${cssGheDangDat} ${cssGheBanDat} ${cssGheNguoiKhac}`}>{item.stt}</button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-8 mt-10">
                <p className="text-center text-2xl text-green-600">Màn Hình</p>
                <div className=" flex justify-center">
                    <div className={cssTrapezoid.trapezoid}></div>

                </div>
                <div className=" flex justify-center mt-10">
                    <div>  {renderDanhSachGhe()}</div>

                </div>
                <div className="mt-14 container">
                    <hr></hr>
                    <div className="grid grid-cols-8 mt-2">
                        <div className="col-span-1">
                            <div className="ghe" />
                            <p>Ghế chưa đặt</p>
                        </div>
                        <div className="col-span-1">
                            <div className="ghe gheVip" />
                            <p>Ghế Vip</p>
                        </div>
                        <div className="col-span-1">
                            <div className="ghe gheDaDat" />
                            <p>Ghế đã được đặt</p>
                        </div>
                        <div className="col-span-1">
                            <div className="ghe gheDangDat" />
                            <p>Ghế đang đặt</p>
                        </div>
                        <div className="col-span-1">
                            <div className="ghe gheDoBanDat" />
                            <p>Ghế bạn đã đặt</p>
                        </div>
                        <div className="col-span-3">
                            <div className="ghe gheNguoiKhacDangDat"></div>
                            <p>Ghế khách hàng khác đang đặt</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-span-4 min-h-screen">

                <p className="text-center text-2xl font-bold text-green-500 mt-10">Phần thanh toán</p>
                <hr className="shadow-sm"></hr>
                <p className="mt-5">Tên Phim: <span className="text-xl font-bold">{thongTinPhim?.tenPhim}</span></p>
                <p>Tên Cụm Rạp: <span className="font-bold">{thongTinPhim?.tenCumRap}</span></p>
                <p>Địa Chỉ: <span className="font-bold">{thongTinPhim?.diaChi}</span></p>
                <p>Tên Rạp: <span className="font-bold">{thongTinPhim?.tenRap}</span></p>
                <p>Ngày Chiếu: <span className="font-bold">{thongTinPhim?.ngayChieu}</span></p>
                <p>Giờ Chiếu: <span className="font-bold">{thongTinPhim?.gioChieu}</span></p>
                <hr className="shadow-sm"></hr>
                <div className="mt-5">
                    <table className="table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="w-1/3 text-left">Ghế đang chọn : </th>
                                <th className="w-1/3 text-left">Loại ghế :</th>
                                <th className="w-1/3 text-left">Đơn giá :</th>
                            </tr>

                        </thead>
                        <tbody>
                            {_.sortBy(danhSachGheDangDat, ["tenGhe"]).map((item, index) => {
                                return <tr key={index} >
                                    <td> <p className="flex items-center  justify-center ghe gheDangDat">{item.stt}</p></td>
                                    <td>{item.loaiGhe}</td>
                                    <td>{item.giaVe.toLocaleString()} đ</td>

                                </tr>
                            })}

                            <tr>
                                <td><p className="font-bold">Tổng Tiền: </p></td>
                                <td></td>

                                <td> <p className="font-bold text-xl">{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe;
                                }, 0).toLocaleString()} đ</p></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr className="shadow-sm"></hr>
                <p className="mt-5">Email người đặt vé :</p>
                <p className="font-bold">{userLogin.email}</p>
                <hr className="shadow-sm"></hr>

                <div className="grid grid-rows-3 h-auto">
                    <Button onClick={() => {
                        const thongTinDatVe = new ThongTinDatVe();
                        thongTinDatVe.maLichChieu = props.match.params.id;
                        thongTinDatVe.danhSachVe = danhSachGheDangDat;
                        console.log("thong tin dat ve", thongTinDatVe)
                        dispatch(datVeAction(thongTinDatVe))
                    }} className="row-start-3" type="primary" shape="round" size="large">
                        Đặt vé
                    </Button>
                </div>
            </div>
        </div>
    )
}


const { TabPane } = Tabs
export default function (props) {
    const { tabCheckOut } = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    useEffect(() => {
        
        return () => {
            dispatch({
                type: CHUYEN_TAB_CHECKOUT,
                tab: "1"
            })
        }
    }, [])
    const operations = <Fragment>
        <Button onClick={() => {history.push('/profile')}}>{userLogin.taiKhoan}</Button>
        <Button className="ml-1" onClick={()=>{
            localStorage.removeItem(USER_LOGIN)
            localStorage.removeItem(ACCESS_TOKEN)
            history.push('/home')
            window.location.reload()
        }}>Đăng xuất</Button>
    </Fragment>
    return <div>
        <Tabs tabBarExtraContent={operations} className="m-10" defaultActiveKey="1" activeKey={tabCheckOut} onChange={(key) => {
            console.log(key)
            dispatch({
                type: CHUYEN_TAB_CHECKOUT,
                tab: key.toString()
            })
        }}>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
                <CheckOut {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
                <KetQuaDatVe {...props} />
            </TabPane>
            <TabPane tab={ <NavLink to="/home" >Home</NavLink>} key="3">
               
            </TabPane>

        </Tabs>
    </div>
}


function KetQuaDatVe(props) {
    const dispatch = useDispatch()
    // const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { thongTinNguoiDungDatVe } = useSelector(state => state.QuanLyNguoiDungReducer)
    // console.log('thong tin dat ve', thongTinNguoiDungDatVe)
    const { thongTinDatVe } = thongTinNguoiDungDatVe
    const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer)
    useEffect(() => {
        dispatch(thongTinTaiKhoanAction())
    }, [])
    return <div className="container">
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <p className="font-bold text-2xl">Thông tin tài khoản</p>
                <p>Họ tên khách hàng đặt vé: <span className="font-bold">{thongTinNguoiDungDatVe.hoTen}</span></p>
                <p>Email khách hàng đặt vé: <span className="font-bold">{thongTinNguoiDungDatVe.email}</span></p>
                <p>Tài khoản đặt vé: <span className="font-bold">{thongTinNguoiDungDatVe.taiKhoan}</span></p>
            </div>
            <div className="col-span-1">
                <p className="font-bold text-2xl">Lịch sử đặt vé</p>
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
                                <p>Ngày giờ chiếu {chiTietPhongVe?.thongTinPhim.gioChieu}-{chiTietPhongVe?.thongTinPhim.ngayChieu}</p>
                                <span>Số ghế ngồi: </span>
                                {item.danhSachGhe?.map((item, index) => {
                                    return <span className="text-sm m-1 border-blue-800 border-2 rounded-xl" key={index}>{item.tenGhe}</span>
                                })}
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </div>
}