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
export const setAutorList = (data,pageTotal) => ({
	type: contans.SET_AUTHOR_LIST,
	data:fromJS(data),
	pageTotal:pageTotal,
})
export const getAutorList  = (index) => {
	return (dispatch) => {
		axios.get('/api/write.json?page='+index).then((res)=>{
			const pageTotal = Math.ceil(res.data.data.length/5);
			dispatch(setAutorList(res.data.data,pageTotal))
		}).catch(()=>{
			console.log('catch')
		})
	}
}
export const clickSwitch = (page) => ({
	type: contans.SWITCH_AUTHOR_LIST,
	page:page,
})
