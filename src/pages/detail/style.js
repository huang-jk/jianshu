import styled from 'styled-components'
export const DetailWarp = styled.div`
	margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 620px;
    .image-package {
    	width: 100%;
    	margin-bottom: 20px;
    }
    p {
    	margin: 0 0 25px;
    	color: #2f2f2f;
	    word-break: break-word!important;
	    word-break: break-all;
	    font-size: 16px;
	    font-weight: 400;
	    line-height: 1.7;
    }
    b {
    	font-weight: 700;
    }
`
export const Title = styled.h1`
	word-break: break-word!important;
    margin: 20px 0 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
`
export const Author = styled.div`
	margin: 30px 0 40px;
	.avatar {
		width: 48px;
	    height: 48px;
	    vertical-align: middle;
	    display: inline-block;
	    border: 1px solid #ddd;
    	border-radius: 50%;
	}
`
export const AuthorInfo = styled.div`
	vertical-align: middle;
    display: inline-block;
    margin-left: 8px;
    vertical-align: middle;
    .name {
		margin-right: 3px;
	    font-size: 16px;
    }
    .follow {
    	padding: 0 5px 0;
    	border-color: #42c02e;
    	border-radius: 40px;
	    color: #fff;
	    background-color: #42c02e;
	    font-size: 12px;
	    font-weight: 400;
    	line-height: normal;
    }
    .badge-icon {
    	margin-right: 5px;
	    width: 20px;
	    height: 20px;
	    border-radius: 0;
	    border: 0;
	    vertical-align: middle;
    }
    .meta {
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
        span {
            margin-right: 5px;
        }
    }
`




