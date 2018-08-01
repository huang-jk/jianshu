import { fromJS } from 'immutable';//以防不小心改变state的数据
import * as contans from './contans';
const defaultValue = fromJS({
	loginFlag:false,
})
export default (state=defaultValue, action) => {
	switch (action.type) {
		case contans.SET_LOGIN:
			return state.set('loginFlag',action.data)
		case contans.LGOIN_OUT:
			return state.set('loginFlag',action.data)
		default:
			return state
	}
}