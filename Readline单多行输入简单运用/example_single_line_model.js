//导入readline模块
var readline = require('readline');

//创建readline.Interface实例
var readlineTest = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//line事件
readlineTest.on('line', function(line){
	console.log("您输入了："+line);
    readlineTest.close();//使readline.Interface实例结束
});

//close事件
readlineTest.on('close', function() {
    process.exit(0);
});