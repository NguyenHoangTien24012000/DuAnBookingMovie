import React, { useEffect, useState } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Film from '../../components/Film/Film';
import CarouselSlick from '../../components/CarouselSlick/CarouselSlick';
import { GetSanhSachPhimAction } from '../../redux/actions/QuanLyDanhSachPhimAction';
import { Tabs } from 'antd';


const { TabPane } = Tabs;



export default function Home() {


  
    

    const { danhSachPhimDangChieu, danhSachPhimSapChieu} = useSelector(state => state.QuanLyDanhSachPhimReducer)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetSanhSachPhimAction())
    }, [])

    const [state, setState] = useState({filmDangChieu : true})

    const callback = (key)=> {
        if(key === "1"){
            setState({
                filmDangChieu : true
            })
        }else if(key ==="2"){
            setState({
                filmDangChieu : false
            })
        }

    }

    return (



        <div className="w-full mt-20">
            <div className="container mx-auto">
                <Divider>
                    <Tabs tabBarStyle={{color : "red" }}   size="large" defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Phim Đang Chiếu" key="1">
                           
                        </TabPane>
                        <TabPane tab="Phim Sắp Chiếu" key="2">
                           
                        </TabPane>
                    </Tabs>
                </Divider>
               
                {state.filmDangChieu ? <p>film dang chieu</p> : <p>fiml sap chieu</p>}
                {state.filmDangChieu  ?  <CarouselSlick danhSachPhim={danhSachPhimDangChieu} /> : <CarouselSlick danhSachPhim={danhSachPhimSapChieu} />}
                {/* <div className="grid gap-x-8 grid-cols-4">
                    {renderDanhSachPhim()}
                </div> */}
            </div>
            <HomeMenu />

        </div>
    )
}
