import React , { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Login extends Component {
	render() {
		if(this.props.loginFlag) {
			return (
				<div>文章页面</div>
			)
		}else {
			return <Redirect to="/login" />
		}
	}
}
const mapState = (state) => {
	return {
		loginFlag:state.getIn(['login','loginFlag'])
	}
}
export default connect(mapState,null)(Login)