import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	RecomList,
	RecomItem,
}from '../style'
class Recommend extends PureComponent {
	render() {
		const { recomList } = this.props;
		const newList = recomList.toJS()
		return (
			<RecomList>
				{
					newList.map((item)=>{
						return(
							<RecomItem key={item.id} imgUrl={item.imgUrl} />
						)
					})
				}
				
			</RecomList>
		)
	}
}
const mapState = (state) => {
	return {
		recomList:state.getIn(['home','recomList']),
	}
}
export default connect(mapState,null)(Recommend)