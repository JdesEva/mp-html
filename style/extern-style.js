/*
 * @Author: jdeseva
 * @Date: 2022-03-31 10:49:19
 * @LastEditors: jdeseva
 * @LastEditTime: 2022-04-08 14:49:53
 * @Description:
 */


/**
 * 由于externStyle会将标签名转化为 ._0 类似的索引形式，所以不建议这边使用 标签名的复合选择器 例如 h4::before 这种形式
 *
 * 此样式优先级最低，如果需要覆盖需要添加 !important; 但是支持伪类（仅支持 before 和 after）以及类名，扩展性比较好
 */


const style = `
div,h1,h2,h3,h4,h5,a,b,i,p,span,ul,ol,li,img,em,strong,pre {
  box-sizing: border-box;
}

a {
  font-size: 32rpx;
  color: #409eff;
  font-weight: normal;
}

._hover {
  text-decoration: none !important;
  opacity: 0.99!important;
}

.high-light,.entry-link {
  color: #846bff!important;
  font-weight: bold;
  margin: 0 8rpx;
  font-size: 36rpx;
}

.high-light::after,.entry-link::after {
  position: relative;
  top: -2px;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 4px;
  vertical-align: middle;
  background: url(https://img1.dxycdn.com/2022/0224/594/7177314972739014353-2.png)
    no-repeat 50% !important;
  background-size: cover !important;
  content: '';
}

h2 {
  margin: 60rpx 0 32rpx;
  line-height: 60rpx;
  color: #1a1a1a;
  font-size: 38rpx;
  font-weight: 600
}

.h2-icon {
  position: relative;
  top: -4rpx;
  display: inline-block;
  width: 36rpx;
  height: 36rpx;
  margin-right: 8rpx;
  vertical-align: middle;
  background: url(https://img1.dxycdn.com/2021/0802/584/0788504254853685943-22.png)
    no-repeat 50%;
  background-size: cover;
  content: '';
}

text {
  font-size: 34rpx;
  line-height: 61rpx;
  margin: 32rpx 0 0;
  padding-bottom: 20rpx;
  overflow: auto;
  font-weight: 400;
  color: #4d4d4d;
}
p {
  font-size: 34rpx;
  line-height: 61rpx;
  margin: 32rpx 0 0;
  padding-bottom: 20rpx;
  overflow: auto;
  font-weight: 400;
  color: #4d4d4d;
}

ul,
ol,
.ul,
.ol {
  margin: 0;
  padding-bottom: 28rpx;
  overflow: auto;
  list-style: none;
  padding-inline-start: 0;
}

._ul {
  list-style-type: none!important;
}

._ol, ._ul {
  padding: 0!important;
  margin: 0!important;
}

li {
  font-size: 32rpx;
  line-height: 58rpx;
  margin-bottom: 0;
  font-weight: 400;
}

.node-li,._li {
  width: 100%;
  position: relative;
  padding-left: 20rpx;
  box-sizing: border-box;
  display: block!important;
}

.node-li::before {
  position: absolute;
  content: '';
  display: block;
  width: 12rpx;
  height: 12rpx;
  left: 0;
  top: 20rpx;
  background: url(https://img1.dxycdn.com/2021/0802/018/2642549862567785943-22.png) no-repeat 50%;
  background-size: cover;
}







`

module.exports = {
   style
}
