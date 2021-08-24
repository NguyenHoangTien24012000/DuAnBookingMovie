import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setThongTinPhimDetailAction } from '../../redux/actions/QuanLyRapAction'
import moment from 'moment'
import hoverFilm from '../../components/Film/Film.module.css'
import Avatar from 'antd/lib/avatar/avatar';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;
export default function Detail(props) {

    const { id } = props.match.params
    const dispatch = useDispatch()
    const { thongTinPhimDetail } = useSelector(state => state.QuanLyRapReducer)
    console.log({ thongTinPhimDetail })

    useEffect(() => {
        dispatch(setThongTinPhimDetailAction(id))
    }, [])
    const renderDanhGia = () => {
        let arrStar = []
        for (let i = 0; i < thongTinPhimDetail.danhGia; i++) {
            arrStar.push(<i key={i} className="fa fa-star"></i>)
        }
        return arrStar;
    }
    const renderCumRapChieu = () => {
        return thongTinPhimDetail.heThongRapChieu?.map((item, index) => {
            return <TabPane tab={<Avatar size="large" src={item.logo} />} key={index}>
                <Tabs tabPosition='left'>
                    {item.cumRapChieu?.map((cumRap, index) => {
                        return <TabPane tab={<div style={{ cursor: 'pointer' }} key={index} className=" text-left w-64 flex space-x-2">

                            <img src={cumRap.hinhAnh} style={{ width: "70px", height: "70px" }} alt={index} className="rounded" />

                            <div className="flex flex-col  whitespace-normal">
                                <div>
                                    <h6 className="font-semibold mb-0">{cumRap.tenCumRap}</h6>
                                    <p className="text-sm text-coolGray-600">{cumRap.diaChi.length + cumRap.tenCumRap.length > 60 ? <span>{cumRap.diaChi.slice(0, 25)}...</span> : <span>{cumRap.diaChi}</span>}</p>
                                </div>
                            </div>
                        </div>} key={index}>
                            <div style={{ cursor: 'pointer' }} className="mb-4 text-left w-full flex space-x-2">
                                <div className="bg-cover bg-center rounded " style={{ backgroundImage: `url(${thongTinPhimDetail?.hinhAnh})`, width: "100px", height: "100px" }} ></div>
                                <div className="flex flex-col  whitespace-normal">
                                    <div className="w-full">
                                        <h6 className="font-semibold mb-0">{thongTinPhimDetail.tenPhim}</h6>
                                        <div className="grid grid-cols-4 gap-4">
                                            {cumRap.lichChieuPhim?.slice(0, 8).map((item, index) => {
                                                return <NavLink key={index} className="border-2 rounded-lg border-yellow-400 p-1 hover:bg-red-700" to="/">
                                                    {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }
    return (
        <div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${thongTinPhimDetail?.hinhAnh})`, minWidth: '100%', minHeight: '100vh', borderRadius: '10px' }}>
                <CustomCard
                    className="grid grid-cols-8 gap-4"
                    style={{ minHeight: "100vh", minWidth: '100%' }}
                    effectColor="#C780FF" // required
                    color="#14AEFF" // default color is white
                    blur={5} // default blur value is 10px
                    borderRadius={0} // default border radius value is 10px
                >
                    <div className="col-start-3 col-span-2 flex flex-wrap content-center">
                        {/* <div className="">
                            <img src={thongTinPhimDetail?.hinhAnh} alt="123"></img>
                        </div> */}
                        <div className={hoverFilm.parent} style={{ position: 'relative', cursor: 'pointer' }}>
                            <div style={{ backgroundImage: `url(${thongTinPhimDetail?.hinhAnh}),url(https://picsum.photos/2401)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                <img className="w-full opacity-0" style={{ height: '350px' }} src={thongTinPhimDetail?.hinhAnh} />
                            </div>
                            <div className={hoverFilm.child} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <i className="fa fa-play-circle text-white text-4xl"></i>
                            </div>
                            <div className={hoverFilm.blackHover}></div>
                        </div>

                    </div>
                    <div className="col-span-3 flex flex-wrap content-center">
                        <div>
                            <p className="text-lg ">Ngày khởi chiếu : <span className="text-blue-700 font-bold">{moment(thongTinPhimDetail.ngayKhoiChieu).format("YYYY/MM/DD")}</span></p>
                            <p className="text-2xl">Tên Phim : <span className="text-pink-700 font-bold"> {thongTinPhimDetail.tenPhim}</span></p>
                            <p className="text-base">Mô tả : <span className=" text-black">{thongTinPhimDetail.moTa}</span></p>
                            <p className="text-lg">Đánh giá: <span className="text-yellow-500">
                                {renderDanhGia()}
                            </span></p>
                        </div>

                    </div>
                </CustomCard>

            </div>
            <div className="container mx-auto mt-24">
                <p className="text-2xl text-yellow-600">Phim theo cụm rạp</p>
                <Tabs tabPosition='left'>
                    {renderCumRapChieu()}
                </Tabs>
            </div>
        </div>
    )
}
