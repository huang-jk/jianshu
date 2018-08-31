import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1535701483025'); /* IE9*/
  src: url('./iconfont.eot?t=1535701483025#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1535701483025') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1535701483025#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
