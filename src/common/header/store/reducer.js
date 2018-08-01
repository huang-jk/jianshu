import * as contans from './contans';
import { fromJS } from 'immutable';//以防不小心改变state的数据
const defaultValue = fromJS({
	focused:false,
	list:[],
	mouseIn:false,
	page:1,
	pageTotal:1,
})

export default (state=defaultValue, action) => {
	//immutable的set会结合之前的immutable对象
	//和设置的值，返回一个全新的对象
	switch (action.type) {
		case contans.SEARCH_FOCUS:
			return state.set('focused',true);
		case contans.SEARCH_BLUR:
			return state.set('focused',false)
		case contans.SET_HISTROY_DATA:
			return state.merge({
				'list':action.data,
				'pageTotal':action.pageTotal
			});
		case contans.ENTER_SEAECH_INFO:
			return state.set('mouseIn',true);
		case contans.LEAVE_SEAECH_INFO:
			return state.set('mouseIn',false);
		case contans.HAND_SWITCH_CLICK:
			return state.set('page',action.page);
		default:
			return state
	}
}