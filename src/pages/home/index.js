import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css';
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
		const {imgList , showBack} = this.props;
		const newImgList = imgList.toJS()
		return (
			<HomeWarp>
				<HomeLeft>
					<Carousel autoplay>
						{
							newImgList.map(item=>{
								return (
									<div className="banner" key={item.id}><img alt="图片" src={item.src}/></div>
								)
							})
						}
					</Carousel>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{showBack?<BackTop onClick={this.backTop}>返回顶部</BackTop>:null}
			</HomeWarp>
		)
	}
	componentDidMount() {
		this.props.getHomeData();
		this.props.getImgList();
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
		},
		getImgList() {
			dispatch(actionCreators.getImgList())
		}
	}
}
const mapState = (state) => {
	return {
		showBack:state.getIn(['home','showBack']),
		imgList:state.getIn(['home','imgList']),
	}
}
export default connect(mapState,mapAction)(Home)