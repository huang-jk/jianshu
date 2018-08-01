import * as contans from './contans';
import { fromJS } from 'immutable' 
import axios from 'axios'
const setHistroyData = (data,pageTotal) => ({
	type:contans.SET_HISTROY_DATA,
	data: fromJS(data),
	pageTotal
})
export const searchFocus = () =>({
	type:contans.SEARCH_FOCUS
})
export const searchBlur = () =>({
	type:contans.SEARCH_BLUR
})
export const enterSearchInfo = () => ({
	type:contans.ENTER_SEAECH_INFO
})
export const leaveSearchInfo = () => ({
	type:contans.LEAVE_SEAECH_INFO
})
export const handSwitchClick = (page) =>({
	type:contans.HAND_SWITCH_CLICK,
	page,
})
export const getHistroyData = () => {
	return (dispatch) => {
		axios.get('/api/histroy.json').then((res)=>{
			const data = res.data.data;
			const pageTotal = Math.ceil(data.length/10);
			dispatch(setHistroyData(data,pageTotal))
		}).catch(()=>{
			console.log('catch')
		})
	}
}