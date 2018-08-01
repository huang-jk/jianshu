import * as contans from './contans';
import { fromJS } from 'immutable' 
import axios from 'axios'
const setHomeData = (data) => ({
	type:contans.SET_HOME_DATA,
	data
})
const addListOper = (data,pageList) => ({
	type:contans.ADD_LIST_DATA,
	data:fromJS(data),
	page:pageList,
})
export const addListData  = (index) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page='+index).then((res)=>{
			dispatch(addListOper(res.data.data,index))
		}).catch(()=>{
			console.log('catch')
		})
	}
}
export const getHomeData = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res)=>{
			dispatch(setHomeData(res.data.data))
		}).catch(()=>{
			console.log('catch')
		})
	}
}
export const changeShow = (flag) => ({
	type:contans.CHANGE_SHOW,
	flag
})