// 发送POST请求函数
async function sendData(data,token) {

  // 构建请求URI<a href="static/test/Index.html"></a>
  const uri = `https://api.github.com/repos/${'Ron_Stash'}/${'Ron_Stash.github.io'}/static/test/data.txt`;

  // 设置请求参数
  const params = {
    method: 'POST',
    headers: {
      'Authorization': `token ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Add data',
      content: btoa(unescape(encodeURIComponent(data)))
    })
  };

  // 发送POST请求
  const response = await fetch(uri, params);
  const result = await response.json();

  console.log(result);
}

// 使用示例
const data = {name: '张三', age: 20}; 
sendData(JSON.stringify(data));
