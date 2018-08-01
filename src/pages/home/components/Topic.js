import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	TopicList,
	TopicItem,
}from '../style'
class Topic extends PureComponent {
	render() {
		const { topicData } = this.props;
		const newList = topicData.toJS()
		return (
			<TopicList>
				{
					newList.map((item)=>{
						return(
							<TopicItem key={item.title}>
								<img className="item-img" src={item.src} alt={item.title} />
								<div className="item-name">{item.title}</div>
							</TopicItem>	
						)
					})
				}
				<a className="more-hot-collection">更多热门话题</a>
			</TopicList>
		)
	}
}
const mapState = (state) => {
	return {
		topicData:state.getIn(['home','topicData']),
	}
}
export default connect(mapState,null)(Topic)