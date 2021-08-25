import axios from 'axios'
import Axios from 'axios'
import { quanLyPhimServices } from '../../services/QuanLyPhimServices'

import { DOMAIN } from '../../util/config'
import { GET_CAROUSEL} from '../types/CarouselType'

//neu co tham so dau vao
// export const getCarouselAction = () =>{
//     return async (dispatch) =>{
//         try {
//             const result = await Axios({
//                 url : `${DOMAIN}/QuanLyPhim/LayDanhSachBanner`,
//                 method : 'GET'
//             })
//             dispatch({
//                 type : SET_CAROUSEL,
//                 arrCarousel : result.content.data
//             })
//         } catch (error) {
//             console.log('error', error)
//         }
//     }
// }


//neu ko co tham so
export const getCarouselAction = async (dispatch) => {
    try {
        const result = await quanLyPhimServices.layDanhSachBanner();
        // console.log(result)
        if(result.data.statusCode === 200){
            dispatch({
                type: GET_CAROUSEL,
                arrCarousel: result.data.content
            })
        }
      
    } catch (error) {
        console.log('error', error)
    }
}