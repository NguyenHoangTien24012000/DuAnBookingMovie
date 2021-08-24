import React, { memo } from 'react'
import { Tabs } from 'antd';
import { Avatar } from 'antd';
import CumRapPhim from './CumRapPhim';


const { TabPane } = Tabs;

function HomeMenu(props) {

    const { danhSachRap } = props
    // console.log("danhSachRap", danhSachRap)


    const renderHeThongRap = () => {
        return danhSachRap?.map((heThongRap, index) => {
            return <TabPane tab={<Avatar size="large" src={heThongRap.logo} />}  key={index}>
                    <CumRapPhim cumRapPhim={heThongRap.lstCumRap} />

            </TabPane>
        })
    }

    return (
        <>
            <div className="container mx-auto mt-28">
           <p className="text-2xl text-yellow-600">Phim theo cụm rạp</p>
                <Tabs tabPosition="left">
                    {renderHeThongRap()}

                </Tabs>
            </div>
        </>
    )
}


export default memo(HomeMenu)