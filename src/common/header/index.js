import React ,{ Component }from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom';
import { 
	HeaderWarp,
	Logo,
	Meau,
	MeatItem,
	SearchWrap,
	Search,
	SearchInfo,
	SearchInfoArea,
	SearchTitle,
	SearchTileSwitch,
	SearchInfoList,
	SearchInfoItem,
	AddAction,
	Button,
} from './style';
class Header extends Component {
	showSearchInfo (){
		const {list , page,pageTotal, focused , mouseIn , enterSearchInfo , leaveSearchInfo,handSwitchClick} = this.props;
		const listData = [];
		const newList = list.toJS();
		if(newList.length) {
			for(let i=(page-1)*10;i<page*10;i++) {
				let item = newList[i];
				item&&listData.push(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
			}
		}
		if(focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter = {enterSearchInfo}
					onMouseLeave = {leaveSearchInfo}
				>
					<SearchInfoArea>
						<SearchTitle>
							热门搜索
							<SearchTileSwitch 
								onClick={()=>{handSwitchClick(page,pageTotal,this.spin)}}
							>
								<i className="spin iconfont" ref={(ref)=>this.spin = ref}>&#xe851;</i>
								换一批
							</SearchTileSwitch>
						</SearchTitle>
						<SearchInfoList>
							{listData}
							</SearchInfoList>
					</SearchInfoArea>
				</SearchInfo>
			)
		}else {
			return
		}
	}
	render() {
		const {handInputFocus , focused , handInputBlur , list , loginFlag ,loginOut} = this.props;
		return(
			<HeaderWarp>
				<Link to="/">
					<Logo />
				</Link>
				<Meau>
					<MeatItem className="left active">首页</MeatItem>
					<MeatItem className="left">下载App</MeatItem>
					{
						loginFlag?<MeatItem className="right" onClick={loginOut} >退出</MeatItem>:
						<Link to="/login"><MeatItem className="right">登录</MeatItem></Link>
					}
					<MeatItem className="right">
						<i className="iconfont">&#xe636;</i>
					</MeatItem>
					<SearchWrap>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="siled"
						>
							<Search 
								className={focused?'focused':''} 
								onFocus={()=>{handInputFocus(list)}}
								onBlur={handInputBlur}
							/>
						</CSSTransition>
						<i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
						{this.showSearchInfo()}
					</SearchWrap>
				</Meau>
				<AddAction>
					<Link to="/write">
						<Button className="write-btn">
							<i className="iconfont ic-write">&#xe670;</i>
							写文章
						</Button>
					</Link>
					<Button>注册</Button>
				</AddAction>
			</HeaderWarp>
		)
	}
}

const mapStateProps = (state) =>{
	return {
		focused:state.getIn(['header','focused']),
		list:state.getIn(['header','list']),
		mouseIn:state.getIn(['header','mouseIn']),
		page:state.getIn(['header','page']),
		pageTotal:state.getIn(['header','pageTotal']),
		loginFlag: state.getIn(['login','loginFlag'])
	}
}
const mapActionProps = (dispatch) => {
	return {
		handInputFocus(list) {
			list.size === 0&&dispatch(actionCreators.getHistroyData())
			dispatch(actionCreators.searchFocus())
		},
		handInputBlur() {
			dispatch(actionCreators.searchBlur())
		},
		enterSearchInfo() {
			dispatch(actionCreators.enterSearchInfo())
		},
		leaveSearchInfo() {
			dispatch(actionCreators.leaveSearchInfo())
		},
		handSwitchClick(page,pageTotal,spin) {
			let spinRotate = spin.style.transform.replace(/[^\d]/g,'');
			if(spinRotate) {
				spinRotate = parseInt(spinRotate,10)
			}else {
				spinRotate = 0;
			}
			spin.style.transform = 'rotate('+(spinRotate+360)+'deg)'
			if(page >= pageTotal){
				dispatch(actionCreators.handSwitchClick(1))
			}else {
				dispatch(actionCreators.handSwitchClick(page + 1))
			}
		},
		loginOut() {
			dispatch(loginCreators.loginOut());
		}
	}
}
export default connect(mapStateProps,mapActionProps)(Header)