import * as contans from './contans';
import { fromJS } from 'immutable' 
const defaultValue = fromJS({
	title:'',
	content:'',
	meta:'',
})
export default (state=defaultValue, action) => {
	switch (action.type) {
		case contans.SET_DETAIL_DATA:
			return state.merge({
				'title': action.title,
				'content': action.content,
				'meta':action.meta
			});
		default:
			return state
	}
}