import axios from 'axios'
import * as contans from './contans';
const setLogin = (data) => ({
	type: contans.SET_LOGIN,
	data
})
export const login = (text,pass) => {
	return (dispatch) => {
		axios.get('/api/login.json?id='+text+'&pass='+pass).then(()=>{
			dispatch(setLogin(true))
		})
	}
}
export const loginOut = () => ({
	type: contans.LGOIN_OUT,
	loginFlag: false,
})