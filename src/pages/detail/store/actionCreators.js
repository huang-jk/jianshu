import * as contans from './contans';
import axios from 'axios'
const setDetailData = (data) => ({
	type:contans.SET_DETAIL_DATA,
	content:data.content,
	title:data.title,
	meta:data.meta,
})

export const getDetailData = (id) => {
	return (dispatch) => {
		axios.get('/api/detail.json?id='+id).then((res)=>{
			dispatch(setDetailData(res.data))
		}).catch(()=>{
			console.log('catch')
		})
	}
}
