import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CarouselReducer from './reducers/CarouselReducer'
import QuanLyDanhSachPhimReducer from './reducers/QuanLyDanhSachPhimReducer'
import QuanLyRapReducer from './reducers/QuanLyRapReducer'
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer'
import QuanLyDatVeReducer from './reducers/QuanLyDatVeReducer'
import LoadingReducer from './reducers/LoadingReducer'


const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyDanhSachPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))