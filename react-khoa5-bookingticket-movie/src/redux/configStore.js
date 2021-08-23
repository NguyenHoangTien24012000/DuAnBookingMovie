import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CarouselReducer from './reducers/CarouselReducer'
import QuanLyDanhSachPhimReducer from './reducers/QuanLyDanhSachPhimReducer'
import QuanLyRapReducer from './reducers/QuanLyRapReducer'
const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyDanhSachPhimReducer,
    QuanLyRapReducer
})


export const store = createStore(rootReducer,applyMiddleware(thunk))