import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimUpLoadAction, layThongTinPhimAction, themPhimUploadHinhAction } from '../../../redux/actions/QuanLyDanhSachPhimAction';
import { GROUPID } from '../../../util/config';
const EditFilm = (props) => {
    console.log(props)
    const dispatch = useDispatch()
    const {thongTinPhim} = useSelector(state => state.QuanLyDanhSachPhimReducer)
    console.log("thongtin",thongTinPhim)
    useEffect(() => {
        // console.log(props.match.params.id)
        dispatch(layThongTinPhimAction(props.match.params.id))
    }, [])
    const formik = useFormik({
        enableReinitialize : true,
        initialValues: {
            maPhim : thongTinPhim.maPhim,
            tenPhim:thongTinPhim.tenPhim,
            trailer : thongTinPhim.trailer,
            moTa: thongTinPhim.moTa,
            ngayKhoiChieu : thongTinPhim.ngayKhoiChieu,
            dangChieu:thongTinPhim.dangChieu,
            sapChieu : thongTinPhim.sapChieu,
            hot :thongTinPhim.hot,
            danhGia:thongTinPhim.danhGia,
            hinhAnh : null,
            
        },
        onSubmit: values => {
            values.maNhom = GROUPID
           let formData = new FormData();
           for(let key in values ){
               formData.append(key,values[key])
               if(key === 'hinhAnh' && values.hinhAnh !== null){
                 
                    formData.append("File", values.hinhAnh,values.hinhAnh.name)
                   
               }
           }
        //    console.log(values)
           dispatch(capNhatPhimUpLoadAction(formData))
        },
    });

    const handleChangeDatePicker = (value) =>{
        // console.log("value",value)
        let ngayThang = moment(value)
        formik.setFieldValue("ngayKhoiChieu",ngayThang)
    }
    const hangdleChangeSwitch = (name) =>{
        return value => formik.setFieldValue(name, value)
    }
    const hangdleChangeFile = async (e) =>{
        //lay file ra tu e
        let file = e.target.files[0]
        // console.log("file",file)
        // tao doi tuong de doc file 
        // if(file.type)
        await formik.setFieldValue("hinhAnh",file)
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e)=>{
            setImgSrc(e.target.result)
        } 
    }
    const [imgSrc, setImgSrc] = useState('')
   

    return (
        <>
            <p className="text-xl font-bold">Thêm phim mới</p>
            <Form
                onSubmitCapture ={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                size="large"
            >

                <Form.Item label="Tên phim">
                    <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim}/>
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer}  />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker name="ngayKhoiChieu" format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)}  />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber name="danhGia" min={0} max={5} onChange={hangdleChangeSwitch("danhGia")} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch name="dangChieu" onChange={hangdleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked ">
                    <Switch name="sapChieu" onChange={hangdleChangeSwitch("sapChieu")} checked={formik.values.sapChieu} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked"> 
                    <Switch name="hot" onChange={hangdleChangeSwitch("hot")} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" name="hinhAnh" onChange={hangdleChangeFile} accept="image/*"></input>
                    <br></br>
                    <img style={{width:130,height : 150}} src = {imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="..."   />
                </Form.Item>
                <Form.Item label="Cập nhật">
                    <button type="submit" className="border-2 border-pink-500 rounded-lg bg-pink-500 px-4 py-1 text-white">Update</button>
                </Form.Item>
            </Form>
        </>
    )
}


export default EditFilm