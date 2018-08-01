import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1532761450412'); /* IE9*/
    src: url('./iconfont.eot?t=1532761450412#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1532761450412') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1532761450412#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
