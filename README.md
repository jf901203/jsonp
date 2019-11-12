## ajax请求受同源策略限制不能进行跨域请求

1. 但是script标签中的src属性却不受限制，jsonp就是利用这一特性来实现跨域请求。

## jsonp解决ajax跨域的原理

1. jsonp只能解决get类型的ajax请求跨域问题
2. jsonp请求不是ajax请求 而是一般的get请求

## 基本原理

1. 浏览器端

    - 动态生成script来请求后台接口(src就是接口的url)
    - 定义好用于接收响应数据的函数，并将函数名通过请求参数提交给后台(callback=fn)
2. 服务器端：

    - 接收到请求处理产生结果数据后，返回一个函数调用的js代码 并将结果数据作为实参传入函数调用

3. 浏览器端：

    - 收到响应自动执行函数调用js代码 也就执行了以前定义好的回调函数，并得到了需要的结果数据