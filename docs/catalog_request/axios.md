[[toc]]

### 兼容性

![alt text](./images/axios.png 'axios兼容性')

### axios 安装

```
npm install axios -s
```

### axios 常用配置项

```
{
   // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

   // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

 // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

   // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,
}
```

### axios 响应结构

```
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

### axios 配置化

```
import axios from 'axios'
import router from './router'
//  默认请求连接2分钟失效
const defaultTimeout = 2
const defaultBaseURL = ''

//  根据form提交方式
const getHeader = type => {
  if (type === 1) {
    return { 'Content-Type': 'application/x-www-form-urlencoded' }
  } else if (type === 2) {
    return { 'Content-Type': 'text/plain;charset=UTF-8' }
  } else {
    return { 'Content-Type': 'application/json;charset=UTF-8' }
  }
}

//  处理errocode
const handleErrorCode = (err, reject) => {
  let code = err.response.status
  err.code = code
  err.message = err.response.statusText
  switch (code) {
    case 400:
      err.message = '请求错误'
      break
    case 401:
      err.message = '未授权，请重新登录'
      break
    case 403:
      err.message = '拒绝访问'
      break
    case 404:
      err.message = `请求地址出错: ${err.response.config.url}`
      break
    case 408:
      err.message = '请求超时'
      break
    case 500:
      err.message = '服务器内部错误'
      break
    case 501:
      err.message = '服务未实现'
      break
    case 502:
      err.message = '网关错误'
      break
    case 503:
      err.message = '服务不可用'
      break
    case 504:
      err.message = '网关超时'
      break
    case 505:
      err.message = 'HTTP版本不受支持'
      break
    default:
  }
  reject(err)
}

//  获取 axios请求配置
const getParamConfig = options => {
  options.header = getHeader(options.type || 0)
  options.baseURL = options.baseURL || defaultBaseURL
  options.timeout = options.timeout || defaultTimeout
  options.method = options.method ? options.method.toLowerCase() : 'post'
  options.params = typeof options.params === 'undefined' ? {} : options.params
  options.data = typeof options.data === 'undefined' ? {} : options.data
  // 获取上传进度的方法
  options.onUploadProgress = options.onUploadProgress || null
  // 获取下载进度的方法
  options.onDownloadProgress = options.onDownloadProgress || null
  return {
    method: options.method,
    url: options.url,
    baseURL: options.baseURL,
    timeout: options.timeout * 60 * 1000,
    headers: options.header,
    data: options.data,
    params: options.params,
    onUploadProgress: options.onUploadProgress,
    onDownloadProgress: options.onDownloadProgress,
  }
}

// 添加请求拦截器
const myRequestInterceptor = axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
const myResponseInterceptor = axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  if (response.data.code === '401') {
    router.push({
      path: "/login"
    })
  }
  return response;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const request = options => {
  //  创建Promise
  let promise = (resolve, reject) => {
    let config = getParamConfig(options)
    // 是否使用拦截器
    options.requestInterceptor || axios.interceptors.request.eject(myRequestInterceptor);
    options.responseInterceptor || axios.interceptors.response.eject(myResponseInterceptor);
    // axios请求
    axios(config).then(function (res) {
      const data = res.data
      if (data.code) {
        reject(data || '')
      } else {
        resolve(data)
      }
    }).catch(function (error) {
      handleErrorCode(error, reject)
    })

  }
  return new Promise(promise)
}

export default request

```

### 全局引入

```
// 在 main.js文件中引入
import request from './request'
Vue.prototype.$api = request;
```
