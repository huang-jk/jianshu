import styled from 'styled-components'
import logo from '../../statics/logo.png'
export const HeaderWarp = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
	display:block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100px;
	height: 56px;
	background: url(${logo});
	background-size: contain;
`
export const Meau = styled.div`
	margin: 0 auto;
	width: 960px;
	height: 100%;
	padding-right: 20px;
`
export const MeatItem = styled.span`
	padding: 0 15px;
	line-height: 56px;
	font-size: 17px;
	color: #333;
	&.left {
		float:left;
		margin-right: 10px;
	}
	&.right {
		font-size: 15px;
		float:right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`
export const SearchWrap = styled.div`
	position:relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		top: 13px;
		width: 30px;
		line-height: 30px;
		text-align:center;
		border-radius: 19px;
		color: #969696;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
	.siled-enter {
		transition: all .2s ease;
	}
	.siled-enter-active {
		width: 240px;
	}
	.siled-exit {
		transition: all .2s ease;
	}
	.siled-exit-active {
		width: 160px;
	}

`
export const Search = styled.input.attrs({
	placeholder:'搜索'
})`
	width: 160px;
	height: 38px;
	margin-top: 9px;
	border: none;
	outline:0;
	border-radius: 19px;
	background: #eee;
	padding: 0 40px 0 20px;
	margin-left: 20px;
	font-size: 14px;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
`
export const AddAction = styled.div`
	position:absolute;
	right: 0;
	top: 0;
`
export const SearchInfo = styled.div`
	position:absolute;
	width: 250px;
	left: 20px;
	top: 47px;
	margin-top: 9px;
	background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    &::before {
		position: absolute;
	    background-color: #fff;
	    box-shadow: 0 0 8px rgba(0,0,0,.2);
        content: "";
	    left: 27px;
	    width: 10px;
	    height: 10px;
	    transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	    -webkit-transform: rotate(45deg);
	    top: -5px;
	    z-index: -1;
    }
    &::after {
    	content: "";
	    position: absolute;
	    width: 0;
	    height: 0;
	    border: 12px solid transparent;
	    border-bottom-color: #fff;
	    left: 20px;
	    bottom: 99%;
    }
`
export const SearchInfoArea = styled.div`
	padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
`
export const SearchTitle = styled.div`
	font-size: 14px;
    color: #969696;
    height: 20px;
    margin-bottom: 10px;
`
export const SearchTileSwitch = styled.div`
	float: right;
	font-size: 13px;
	.spin {
		display: block;
		float: left
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`
export const SearchInfoList = styled.div`
	overflow:hidden;
`
export const SearchInfoItem = styled.a`
	margin: 0 10px 12px 0;
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`
export const Button = styled.div`
	float: right;
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    text-align:center;
    &.write-btn {
	    width: 100px;
	    height: 40px;
	    margin: 8px 15px 0;
	    border-radius: 20px;
	    font-size: 15px;
	    color: #fff;
	    background-color: #ea6f5a;
	    .ic-write{
	    	margin-right: 3px;
		    font-size: 19px;
		    vertical-align: middle;
	    }
    }
    
`