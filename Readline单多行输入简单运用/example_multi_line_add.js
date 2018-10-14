
//  引入readline模块
var readline = require('readline');

//  创建一个readline接口实例
var readlineTest = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
    
});

var numberArray=[];//创建数值数组来存储每一行的数据
var numberArrayIndex=0;//初始化数值数组的索引
var lineCounts=4;//输入的行数，参数写死
var result=0;//初始化结果值
var str="";//整合式子
readlineTest.on('line', function(line){
    
    //将每一行的内容转换为数字后添加至数值数组numberArray
    numberArray[numberArrayIndex]=Number(line);
    numberArrayIndex++;
    
    //将数组每个元素叠加后赋值给result
    result=numberArray.reduce(function(total,nextTemp){
        return total+nextTemp;
    },0);
    
    //当已输入的行数达到最大输入的行数时，结束readline.Interface实例
    if(numberArray.length==lineCounts){
        //组合式子
        for(var i in numberArray){
            if(i==numberArray.length-1){
                str+=numberArray[i]+"="+result;
            }else{
                str+=numberArray[i]+"+";
            }
        }
        //打印结果式子
        console.log(str);
        readlineTest.close();
    }
    
});

//当readlineTest执行'close'命令时，输入流关闭，程序结束。
readlineTest.on('close', function() {
    
    process.exit(0);
    
});