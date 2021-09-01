import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import { Cascader } from 'antd';
import { DatePicker } from 'antd';
import { quanLyRapServcies } from '../../../services/QuanLyRapServices';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import { taoLichChieuAction } from '../../../redux/actions/QuanLyDatVeAction';
export default function AdminShowtimesFilm(props) {
    console.log(props)
    const [state, setState] = useState({
        heThongRap: [],
        cumRap: []
    })
    const dispatch = useDispatch()
    useEffect(async () => {
        try {
            const result = await quanLyRapServcies.layThongTinHeThongRap()
            if(result.data.statusCode === 200){
                setState({
                    ...state,
                    heThongRap: result.data.content
                })
            }
            
        } catch (error) {
            console.log("Error", error)
        }
    }, [])
    // console.log(state.heThongRap)
    const heThongRap = state.heThongRap.map((item,index) =>{
        return {value : item.maHeThongRap, label : item.tenHeThongRap}
    })
    // console.log(heThongRap)
    const handleChangeHeThongRap = async (value) =>{
        // console.log(value)
        
        try {
            const result = await quanLyRapServcies.layThongTinCumRapTheoHeThong(value)
            if(result.data.statusCode === 200){
                setState({
                    ...state,
                    cumRap : result.data.content
                })
            }
        } catch (error) {
            console.log("error",error)
        }
    }
    // console.log("cumRap",state.cumRap)
    const cumRap = state.cumRap.map((item,index) =>{
        return {value : item.maCumRap, label : item.tenCumRap}
    })
    const formik = useFormik({
        initialValues: {
          maPhim: props.match.params.id,
          ngayChieuGioChieu: '',
          maRap : '',
          giaVe: '',
        },
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
            dispatch(taoLichChieuAction(values))
            // console.log(values)
        },
      });
      const changeCumRap =(value) =>{
        formik.setFieldValue("maRap",value[0])
      }
      const onOk = (value) =>{
          formik.setFieldValue("ngayChieuGioChieu",moment(value).format("DD/MM/YYYY hh:mm:ss"))
      }
      const onChangeDate =(value) =>{
        formik.setFieldValue("ngayChieuGioChieu",moment(value).format("DD/MM/YYYY hh:mm:ss"))
    }
    let film = JSON.parse(localStorage.getItem("filmTaoLichChieu"))
    console.log(film)
    return (
        <>
            <p className="text-xl font-bold">Tạp lịch chiếu cho Phim: {props.match.params.tenPhim}</p>
            <img src={film.hinhAnh} alt={film.hinhAnh} style={{width : "200px",height:"250px"}} className="mb-3" />
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                size="large"
            >

                <Form.Item label="Hệ Thống rạp">
                    <Cascader name="" options={heThongRap} onChange={handleChangeHeThongRap} placeholder="Chọn hệ Thống rạp" />
                </Form.Item>
                <Form.Item label="Cụm rạp">
                    <Cascader options={cumRap} name="maRap" onChange={changeCumRap} placeholder="Chọn cụm rạp" />
                </Form.Item>
                <Form.Item label="Ngày giờ chiếu">
                    <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />

                </Form.Item>
                <Form.Item label="Giá vé">
                    <InputNumber
                        defaultValue={0}
                        min={75000}
                        max={150000}
                        onChange = {(value) =>{
                            // console.log("value",value)
                            formik.setFieldValue('giaVe',value)
                        }}
                    />
                </Form.Item>
                <Form.Item label="Tạo lịch chiếu">
                    <button type="submit" className="border-2 border-pink-500 rounded-lg bg-pink-500 px-4 py-1 text-white">Add</button>
                </Form.Item>
            </Form>
        </ >
    )
}
