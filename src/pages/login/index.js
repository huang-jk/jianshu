import React , { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom'
import {
	LoginWrapper,
	LoginBox,
	Input,
	Button,
}from './style'
class Login extends Component {
	render() {
		if(!this.props.loginFlag) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="账号" innerRef={(ref) =>{this.textRef = ref}} />
						<Input placeholder="密码" innerRef={(ref) =>{this.passRef = ref}} />
						<Button onClick={ ()=>{this.props.doLogin(this.textRef,this.passRef)} }>登录</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to="/" />
		}
		
	}
	
}
const mapState = (state) => {
	return {
		loginFlag:state.getIn(['login','loginFlag'])
	}
}
const mapAction = (dispatch) => {
	return {
		doLogin(textRef,passRef) {
			dispatch(actionCreators.login(textRef.value,passRef.value))
		}
	}
}
export default connect(mapState,mapAction)(Login)