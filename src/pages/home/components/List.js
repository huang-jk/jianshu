import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import {
	ListItem,
	ListInfo,
	LoadMore,
}from '../style'
class List extends PureComponent {
	render() {
		const { listData , addListData , pageList} = this.props;
		const newList = listData.toJS()
		return (
			<div>
				{
					newList.map((item,index)=>{
						return(
								
									<ListItem key={index}>
										<img className="wrap-img" src={item.src} alt="图片" />
										<ListInfo>
											<Link to={ "/detail/"+index } >
												<div><span className="title">{item.title}</span></div>
												
											</Link>
											<p className="abstract">{item.content}</p>
											<div className="meta">
												<strong className="nickname">{item.nickname}</strong>
												<span>{item.readNum}</span>
												<span>{item.loveNum}</span>
											</div>
										</ListInfo>
									</ListItem>	
						)
					})
				}
				<LoadMore onClick={()=>{addListData(pageList)}}>加载更多</LoadMore>
			</div>
			
		)
	}
}
const mapState = (state) => {
	return {
		listData:state.getIn(['home','listData']),
		pageList:state.getIn(['home','pageList']),
	}
}
const mapAction = (dispatch) => {
	return {
		addListData(pageList) {
			dispatch(actionCreators.addListData(pageList+1))
		}
	}
}
export default connect(mapState,mapAction)(List)
