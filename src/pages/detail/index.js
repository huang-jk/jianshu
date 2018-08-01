import React , { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { 
	DetailWarp,
	Title,
	Author,
	AuthorInfo,
} from './style';
class Detail extends Component {
	render() {
		const {title , meta , content} = this.props;
		return (
			<DetailWarp>
				<Title>{title}</Title>
				<Author>
					<img 
						className="avatar"
						src="//upload.jianshu.io/users/upload_avatars/7044932/7988f366-91e6-42ed-a9be-a3e9154b86c0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" 
						alt="图片"
					/>
					<AuthorInfo dangerouslySetInnerHTML={{__html:meta}} />
				</Author>
				<div dangerouslySetInnerHTML={{__html:content}}></div>
			</DetailWarp>
		)
	}
	componentDidMount() {
		this.props.getDetailData(this.props.match.params.id);
	}
}
const mapState = (state) => {
	return {
		title:state.getIn(['detail','title']),
		content:state.getIn(['detail','content']),
		meta:state.getIn(['detail','meta']),
	}
}
const mapAction = (dispatch) => {
	return {
		getDetailData(id) {
			dispatch(actionCreators.getDetailData(id))
		}
	}
}
export default connect(mapState,mapAction)(withRouter(Detail))