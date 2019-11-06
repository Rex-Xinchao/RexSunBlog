import axios from 'docs/static/js/axios'
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
