
function jsonp(url,params={},callback){
  
// http://www.baidu.com?aa=11&callback=my_jsonp04349289664328899
var  query=url.indexOf('?')===-1 ? '?' : '&'

 Object.keys(params).forEach((item)=>{
   query += item + "=" + params[item] + '&'
 })

 // 处理回调函数名
 var random=Math.random().toString().replace('.','')
 var cbval='my_jsonp'+random
 var cb='callback='+cbval
// url拼接完毕
 query += cb;

 // 动态创建一个script标签

var script = document.createElement("script");
 // 发送请求
 script.src=url+query


 // 处理回调函数 根据参数得到数据

 window[cbval]=function(params){
    // 把数据返回出去 ===> 触发 callback
    callback(params)
   
    document.body.removeChild(script)
 }

 // 把script添加到body上去

 document.body.appendChild(script)

}


