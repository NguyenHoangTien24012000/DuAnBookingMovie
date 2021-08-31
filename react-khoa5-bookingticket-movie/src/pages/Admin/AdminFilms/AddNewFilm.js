import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../redux/actions/QuanLyDanhSachPhimAction';
import { GROUPID } from '../../../util/config';
const AddNewFilm = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            tenPhim:'',
            trailer : '',
            moTa: '',
            ngayKhoiChieu : '',
            dangChieu:false,
            sapChieu : false,
            hot :false,
            danhGia:0,
            hinhAnh : {},
            
        },
        onSubmit: values => {
            values.maNhom = GROUPID
           let formData = new FormData();
           for(let key in values ){
               formData.append(key,values[key])
               if(key === 'hinhAnh'){
                   formData.append("File", values.hinhAnh,values.hinhAnh.name)
               }
           }
        //    console.log(values)
           dispatch(themPhimUploadHinhAction(formData))
        },
    });

    const handleChangeDatePicker = (value) =>{
        // console.log("value",value)
        let ngayThang = moment(value).format("DD/MM/YYYY")
        formik.setFieldValue("ngayKhoiChieu",ngayThang)
    }
    const hangdleChangeSwitch = (name) =>{
        return value => formik.setFieldValue(name, value)
    }
    const hangdleChangeFile = (e) =>{
        //lay file ra tu e
        let file = e.target.files[0]
        // console.log("file",file)
        // tao doi tuong de doc file 
        // if(file.type)
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (e)=>{
            setImgSrc(e.target.result)
        } 
        formik.setFieldValue("hinhAnh",file)
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
                    <Input name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name="trailer" onChange={formik.handleChange}  />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name="moTa" onChange={formik.handleChange}  />
                </Form.Item>
                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker name="ngayKhoiChieu" format={"DD/MM/YYYY"} onChange={handleChangeDatePicker}  />
                </Form.Item>
                <Form.Item label="Số sao">
                    <InputNumber name="danhGia" min={0} max={5} onChange={hangdleChangeSwitch("danhGia")} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch name="dangChieu" onChange={hangdleChangeSwitch("dangChieu")} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked ">
                    <Switch name="sapChieu" onChange={hangdleChangeSwitch("sapChieu")} />
                </Form.Item>
                <Form.Item label="Hot" valuePropName="checked">
                    <Switch name="hot" onChange={hangdleChangeSwitch("hot")} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" name="hinhAnh" onChange={hangdleChangeFile} accept="image/*"></input>
                    <br></br>
                    <img style={{width:130,height : 150}} src = {imgSrc} alt="..."   />
                </Form.Item>
                <Form.Item label="Thêm phim">
                    <button type="submit" className="border-2 border-pink-500 rounded-lg bg-pink-500 px-4 py-1 text-white">Add</button>
                </Form.Item>
            </Form>
        </>
    )
}


export default AddNewFilm