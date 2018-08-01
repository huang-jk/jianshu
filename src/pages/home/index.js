import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
	HomeWarp,
	HomeLeft,
	HomeRight,
	BackTop,
}from './style'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
class Home extends PureComponent {
	backTop(){
		window.scrollTo(0,0)
	}
	render() {
		return (
			<HomeWarp>
				<HomeLeft>
					<img 
						className="banner" 
						alt="图片"
						src="//upload.jianshu.io/admin_banners/web_images/4365/0b9ffd0051e845a9554c25f6e728dbaf61b7f25c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
						/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{this.props.showBack?<BackTop onClick={this.backTop}>返回顶部</BackTop>:null}
				
			</HomeWarp>
		)
	}
	componentDidMount() {
		this.props.getHomeData();
		this.bindEvent();
	}
	bindEvent() {
		window.addEventListener('scroll',this.props.showBackTop)
	}
	
}
const mapAction = (dispatch) => {
	return {
		getHomeData() {
			dispatch(actionCreators.getHomeData())
		},
		showBackTop() {
			if(document.documentElement.scrollTop > 100) {
				dispatch(actionCreators.changeShow(true))
			}else {
				dispatch(actionCreators.changeShow(false))
			}
		}
	}
}
const mapState = (state) => {
	return {
		showBack:state.getIn(['home','showBack']),
	}
}
export default connect(mapState,mapAction)(Home)