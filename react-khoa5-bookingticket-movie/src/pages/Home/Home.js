import React, { useEffect, useMemo, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../components/Film/Film';
import CarouselSlick from '../../components/CarouselSlick/CarouselSlick';
import { getSanhSachPhimAction } from '../../redux/actions/QuanLyDanhSachPhimAction';
import { Tabs } from 'antd';
import { layDanhSachRapAction } from '../../redux/actions/QuanLyRapAction';


const { TabPane } = Tabs;



export default function Home() {





    const { danhSachPhimDangChieu, danhSachPhimSapChieu } = useSelector(state => state.QuanLyDanhSachPhimReducer)
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSanhSachPhimAction())
        dispatch(layDanhSachRapAction())
    }, [])

    const [state, setState] = useState({ filmDangChieu: true })

    const callback = (key) => {
        if (key === "1") {
            setState({
                filmDangChieu: true
            })
        } else if (key === "2") {
            setState({
                filmDangChieu: false
            })
        }

    }
    

    return (



        <div className="w-full mt-20">
            <div className="container mx-auto">
                <Divider>
                    <Tabs tabBarStyle={{ color: "red" }} size="large" defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Phim Đang Chiếu" key="1">

                        </TabPane>
                        <TabPane tab="Phim Sắp Chiếu" key="2">

                        </TabPane>
                    </Tabs>
                </Divider>

          
                {state.filmDangChieu ? <CarouselSlick danhSachPhim={danhSachPhimDangChieu} /> : <CarouselSlick danhSachPhim={danhSachPhimSapChieu} />}
                {/* <div className="grid gap-x-8 grid-cols-4">
                    {renderDanhSachPhim()}
                </div> */}
            </div>
            <HomeMenu danhSachRap ={heThongRapChieu} />

        </div>
    )
}
