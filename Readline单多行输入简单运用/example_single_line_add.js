//导入readline模块
var readline = require('readline');

//创建readline.Interface实例
var readlineTest = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//创建一个空数组来存储控制台输入的内容
var numberArray=[];
//初始化结果值
var result=0;
//line事件
readlineTest.on('line', function(line){
    //将控制台输入内容去前后空格和换行符，再按空格分割，形成一个新数组，并且赋给数组numberArray
	numberArray=line.trim().split(" ");
    //通过遍历将数组元素中可以转换为数值的元素转换为number类型
    for(var i in numberArray){
        numberArray[i]=Number(numberArray[i]);
    }
    //将数组元素叠加后的值赋值给result
	result=numberArray.reduce(function(total,next){
        return total+next;
    },0);
    //打印输出
    console.log(numberArray[0]+" + "+numberArray[1]+" = "+result);
    readlineTest.close();//使readline.Interface实例结束
});

//close事件
readlineTest.on('close', function() {
    process.exit(0);
});