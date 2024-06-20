# HTTP
## GET与POST的区别
- GET请求参数存在长度限制，POST无限制
- GET产生一个TCP数据包，POST产生两个
- GET请求的内容暴露在地址栏中，POST的请求内容包含在Request Body中
- GET的请求内容会被浏览器主动缓存
- POST比GET更安全
- GET回退无风险，POST会重新提交请求