var key = CryptoJS.enc.Utf8.parse("0123456789abcdef0123456789abcdef");

function convertData() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  if (isEncrypted(input)) {
    var decrypted = decrypt(input);
    output.innerHTML = "IP不正确，检验码:" + decrypted;
  } else {
    var encrypted = encrypt(input);
    output.innerHTML = "IP不正确，检验码:：" + encrypted;
  }
}

function isEncrypted(data) {
  // 判断数据是否为加密后的结果
  return /^[0-9a-fA-F]+$/.test(data);
}

function encrypt(data) {
  var encrypted = CryptoJS.AES.encrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString(CryptoJS.enc.Hex);
}

function decrypt(data) {
  var decrypted = CryptoJS.AES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(data)
  }, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
}


function ipwrite(IP) {
    // 创建XMLHttpRequest对象
    var xhr = new XMLHttpRequest();

    // 设置请求方法和URL
    xhr.open('POST', 'http://yxtsql.com/mysql/ip.php', true);

    // 设置请求头
    xhr.setRequestHeader('Content-Type', 'application/json');

    // 监听请求完成事件
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // 请求成功
          console.log(xhr.responseText);
        } else {
          // 请求失败
          console.log('Error: ' + xhr.status);
        }
      }
    };

    // 准备要发送的数据
    var data = {
      name: 'John',
      age: 30
    };

    // 将数据转换为JSON字符串
    var jsonData = JSON.stringify(data);

    // 发送请求
    xhr.send(jsonData);
}
