// save.php
$account = $_GET['account'];
$password = $_GET['password'];

// 数据校验

$html = "<div>账号:$account</div><div>密码:$password</div>";

file_put_contents('data.txt', $html);
