import React , { PureComponent } from 'react';
import { actionCreators} from '../store';
import {connect} from 'react-redux'
import {
	RecomAuthors,
	AuthorTitle,
	AuthorItem,
	AuthorA,
	LookAll
} from '../style';
class Writer extends PureComponent {
	setAutorList() {
		const {autorList,autorPage} = this.props;
		let list = [];
		let listData = autorList.toJS();
		for(let i=(autorPage-1)*5;i<autorPage*5;i++) {
			let item = listData[i];
			if(item) {
				list.push(
					<AuthorItem key={item.id}>
						<AuthorA>
							<img src={item.avatar_source} alt="图片" />
						</AuthorA>
						<a className="follow">
							<i className="iconfont">&#xe643;</i>
							关注
						</a>
						<a className="name">{item.nickname}</a>
						<p>写了{item.total_wordage}字 · {item.total_likes_count}喜欢</p>
					</AuthorItem>	
				)
			}
		}
		return list;
	}
	render() {
		const {clickSwitch, autorPage,pageTotal} = this.props;
		return (
			<RecomAuthors>
				<AuthorTitle>
					<span>推荐作者</span>
					<span className="author-switch" 
						onClick={()=>{clickSwitch(this.spin,autorPage,pageTotal)}}>
						<i className="spin iconfont" ref={(ref)=>this.spin = ref}>&#xe851;</i>
						换一批
					</span>
				</AuthorTitle>
				<ul>
					{this.setAutorList()}			
				</ul>
				<LookAll>
					查看全部
					<i className="iconfont">&#xe6c6;</i>
				</LookAll>
			</RecomAuthors>
		)
	}
	componentDidMount() {
		this.props.getAutorList(this.props.autorPage);
	}
}
const mapState = (state) => {
	return {
		autorList: state.getIn(['home','autorList']),
		autorPage: state.getIn(['home','autorPage']),
		pageTotal: state.getIn(['home','pageTotal']),
	}
}
const mapAction = (dispatch) => {
	return {
		getAutorList(page) {
			dispatch(actionCreators.getAutorList(page));
		},
		clickSwitch(spin,page,pageTotal) {
			let spinRotate = spin.style.transform.replace(/[^\d]/g,'');
			if(spinRotate) {
				spinRotate = parseInt(spinRotate,10)
			}else {
				spinRotate = 0;
			}
			spin.style.transform = 'rotate('+(spinRotate+360)+'deg)'
			if(page >= pageTotal){
				dispatch(actionCreators.clickSwitch(1))
			}else {
				dispatch(actionCreators.clickSwitch(page + 1))
			}
		}
	}
}
export default connect(mapState,mapAction)(Writer)