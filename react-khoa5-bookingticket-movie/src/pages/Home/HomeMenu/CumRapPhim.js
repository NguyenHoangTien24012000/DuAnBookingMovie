
import React from 'react'
import { Card, Avatar, Tabs } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import DanhSachPhimTheoCumRap from './DanhSachPhimTheoCumRap';

const { Meta } = Card;

const { TabPane } = Tabs;
export default function CumRapPhim(props) {
    const { cumRapPhim } = props
    console.log('cumRap', cumRapPhim)
    const renderCumRapPhim = () => {
        return cumRapPhim?.map((cumRap, index) => {
            return <TabPane tab={<div style={{ cursor: 'pointer' }} key={index} className=" text-left w-64 flex space-x-2">

                <img src={cumRap.hinhAnh} style={{ width: "70px", height: "70px" }} alt={index} className="rounded" />

                <div className="flex flex-col  whitespace-normal">
                    <div>
                        <h6 className="font-semibold mb-0">{cumRap.tenCumRap}</h6>
                        <p className="text-sm text-coolGray-600">{cumRap.diaChi.length + cumRap.tenCumRap.length > 60 ? <span>{cumRap.diaChi.slice(0,25)}...</span> : <span>{cumRap.diaChi}</span>}</p>
                    </div>
                </div>
            </div>} key={index}>
                <DanhSachPhimTheoCumRap danhSachPhimTheoCumRap={cumRap.danhSachPhim} />
            </TabPane>


        })
    }
    return (
        <Tabs tabPosition="left" className="pl-0">
            {renderCumRapPhim()}
        </Tabs>
    )
}
