(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{231:function(n,e,s){"use strict";s.r(e);var t=s(0),r=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h2",{attrs:{id:"原生ajax封装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生ajax封装"}},[this._v("#")]),this._v(" 原生Ajax封装")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("function Ajax (options) {\n  // 新建一个对象，用途接受XHR对象\n  var xhr = null;\n\n  // 第一步创建XMLHttpRequest对象,同时兼任IE\n  // 首先检测原生XHR对象是否存在，如果存在则返回它的新实例\n  if (typeof XMLHttpRequest !== 'undefined') {\n    xhr = new XMLHttpRequest();\n\n    // 然后如果原生对象不存在，则检测ActiveX对象\n  } else if (typeof ActiveXObject !== 'undefined') {\n\n    // 如果存在,则创建他的对象,但这个对象需要一个传入参数,如下:\n    if (typeof arguments.callee.activeXString !== 'string') {\n      // 对象版本\n      var versions = [\n        'Microsoft.XMLHTTP',\n        'Msxml2.XMLHTTP.7.0',\n        'Msxml2.XMLHTTP.6.0',\n        'Msxml2.XMLHTTP.5.0',\n        'Msxml2.XMLHTTP.4.0',\n        'MSXML2.XMLHTTP.3.0',\n        'MSXML.XMLHTTP'\n      ], i, len;\n\n      for (i = 0, len = versions.length; i < len; i++) {\n        try {\n          // 需要versions数组中的某个项,数组的7个项分别对应7个版本.\n          new ActiveXObject(versions[i]);\n\n          // arguments是javascript函数的内置对象,代表传入参数的集合，\n          // callee就代表对象本身即new createXHR\n          arguments.callee.activeXString = versions[i];\n          break;\n\n        } catch (e) {\n          // 跳过\n        }\n      }\n    }\n    // 直到循环创建成功为止,然后给自己添加一个属性叫activeXString\n    xhr = new ActiveXObject(arguments.callee.activeXString);\n\n  } else {\n    // 如果这两种对象都不存在，就抛出一个错误\n    throw new Error('No XHR object available');\n  }\n\n  /**\n   ** options形参解析：\n   * data 发送的参数，格式为对象类型\n   * url 发送请求的url，服务器地址（api）\n   * async 否为异步请求，true为异步的，false为同步的\n   * method http连接的方式，包括POST和GET两种方式\n   */\n  options = options || {};\n  options.success = options.success || function () {};\n  options.fail = options.fail || function () {};\n\n  var data = options.data,\n  url = options.url,\n  async = options.async === undefined ? true : options.async,\n  method = options.method.toUpperCase(),\n  dataArr = [];\n\n  // 遍历参数\n  for (var k in data) {\n    dataArr.push(k + '=' + data[k]);\n  }\n\n  // GET请求\n  if (method === 'GET') {\n    url = url + '?' + dataArr.join('&');\n    xhr.open(method, url.replace(/\\?$/g, ''), async);\n    xhr.send();\n  }\n\n  // POST请求\n  if (method === 'POST') {\n    xhr.open(method, url, async);\n    xhr.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n    xhr.send(dataArr.join('&'));\n  }\n\n  // 响应接收完毕后将触发load事件\n  xhr.onload = function () {\n    /**\n     * XHR对象的readyState属性\n     * 0：未初始化。尚未调用open()方法。\n     * 1：启动。已经调用open()方法，但尚未调用send()方法。\n     * 2：发送。已经调用send()方法，但尚未接收到响应。\n     * 3：接收。已经接收到部分响应数据。\n     * 4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。\n     */\n    if (xhr.readyState === 4) {\n      // 得到响应\n      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {\n        // 处理成功数据\n        var res;\n        if (options.success && options.success instanceof Function) {\n          res = xhr.responseText;\n          if (typeof res === 'string') {\n            res = JSON.parse(res);\n            options.success(xhr, res);\n          }\n        }\n      } else {\n        // 处理错误数据\n        if (options.fail && options.fail instanceof Function) {\n          options.fail(handleError(xhr))\n        }\n      }\n\n    } else {\n      // 抛出检测XHR对象的readyState属性\n      console.log('XHR was readyState：', xhr.readyState);\n    }\n  }\n}\n\nfunction handleError (res) {\n  var code = res.status\n  console.log(res)\n  var err = {\n    code: code,\n    message: ''\n  }\n  switch (code) {\n    case 400:\n      err.message = '请求错误'\n      break\n    case 401:\n      err.message = '未授权，请重新登录'\n      break\n    case 403:\n      err.message = '拒绝访问'\n      break\n    case 404:\n      err.message = '请求地址出错:' + res.responseURL\n      break\n    case 408:\n      err.message = '请求超时'\n      break\n    case 500:\n      err.message = '服务器内部错误'\n      break\n    case 501:\n      err.message = '服务未实现'\n      break\n    case 502:\n      err.message = '网关错误'\n      break\n    case 503:\n      err.message = '服务不可用'\n      break\n    case 504:\n      err.message = '网关超时'\n      break\n    case 505:\n      err.message = 'HTTP版本不受支持'\n      break\n    default:\n  }\n  return err\n}\n\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);