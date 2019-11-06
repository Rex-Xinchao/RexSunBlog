function Ajax (options) {
  // 新建一个对象，用途接受XHR对象
  var xhr = null;

  // 第一步创建XMLHttpRequest对象,同时兼任IE
  // 首先检测原生XHR对象是否存在，如果存在则返回它的新实例
  if (typeof XMLHttpRequest !== 'undefined') {
    xhr = new XMLHttpRequest();

    // 然后如果原生对象不存在，则检测ActiveX对象
  } else if (typeof ActiveXObject !== 'undefined') {

    // 如果存在,则创建他的对象,但这个对象需要一个传入参数,如下:
    if (typeof arguments.callee.activeXString !== 'string') {
      // 对象版本
      var versions = [
        'Microsoft.XMLHTTP',
        'Msxml2.XMLHTTP.7.0',
        'Msxml2.XMLHTTP.6.0',
        'Msxml2.XMLHTTP.5.0',
        'Msxml2.XMLHTTP.4.0',
        'MSXML2.XMLHTTP.3.0',
        'MSXML.XMLHTTP'
      ], i, len;

      for (i = 0, len = versions.length; i < len; i++) {
        try {
          // 需要versions数组中的某个项,数组的7个项分别对应7个版本.
          new ActiveXObject(versions[i]);

          // arguments是javascript函数的内置对象,代表传入参数的集合，
          // callee就代表对象本身即new createXHR
          arguments.callee.activeXString = versions[i];
          break;

        } catch (e) {
          // 跳过
        }
      }
    }
    // 直到循环创建成功为止,然后给自己添加一个属性叫activeXString
    xhr = new ActiveXObject(arguments.callee.activeXString);

  } else {
    // 如果这两种对象都不存在，就抛出一个错误
    throw new Error('No XHR object available');
  }

  /**
   ** options形参解析：
   * data 发送的参数，格式为对象类型
   * url 发送请求的url，服务器地址（api）
   * async 否为异步请求，true为异步的，false为同步的
   * method http连接的方式，包括POST和GET两种方式
   */
  options = options || {};
  options.success = options.success || function () {};
  options.fail = options.fail || function () {};

  var data = options.data,
    url = options.url,
    async = options.async === undefined ? true : options.async,
    method = options.method.toUpperCase(),
    dataArr = [];

  // 遍历参数
  for (var k in data) {
    dataArr.push(k + '=' + data[k]);
  }

  // GET请求
  if (method === 'GET') {
    url = url + '?' + dataArr.join('&');
    xhr.open(method, url.replace(/\?$/g, ''), async);
    xhr.send();
  }

  // POST请求
  if (method === 'POST') {
    xhr.open(method, url, async);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(dataArr.join('&'));
  }

  // 响应接收完毕后将触发load事件
  xhr.onload = function () {
    /**
     * XHR对象的readyState属性
     * 0：未初始化。尚未调用open()方法。
     * 1：启动。已经调用open()方法，但尚未调用send()方法。
     * 2：发送。已经调用send()方法，但尚未接收到响应。
     * 3：接收。已经接收到部分响应数据。
     * 4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。
     */
    if (xhr.readyState === 4) {
      // 得到响应
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        // 处理成功数据
        var res;
        if (options.success && options.success instanceof Function) {
          res = xhr.responseText;
          if (typeof res === 'string') {
            res = JSON.parse(res);
            options.success(xhr, res);
          }
        }
      } else {
        // 处理错误数据
        if (options.fail && options.fail instanceof Function) {
          options.fail(handleError(xhr))
        }
      }

    } else {
      // 抛出检测XHR对象的readyState属性
      console.log('XHR was readyState：', xhr.readyState);
    }
  }
}

function handleError (res) {
  var code = res.status
  console.log(res)
  var err = {
    code: code,
    message: ''
  }
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
      err.message = '请求地址出错:' + res.responseURL
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
  return err
}
