<?php
// 获取参数
$name = $_GET['ac'];
$age = $_GET['ps'];

// 数据文件
$file = 'data.txt';

// 打开文件进行写入
$fp = fopen($file, 'a');

// 写入数据 
fwrite($fp, "$ac, $ps\n"); 

// 关闭文件
fclose($fp);

