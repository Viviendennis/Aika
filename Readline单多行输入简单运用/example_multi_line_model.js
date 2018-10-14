
//  引入readline模块
var readline = require('readline');

//  创建一个readline接口实例
var readlineTest = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
    
});

var lineCounts=4;//输入的行数，参数写死
var tempArray=[];//创建数组来存储每一行的数据
var tempArrayIndex=0;//初始化数组的索引

readlineTest.on('line', function(line){
    
    //将每一行的内容添加至数组tempArray
    tempArray[tempArrayIndex]=line;
    tempArrayIndex++;
    
    //当已输入的行数达到最大输入的行数时，结束readline.Interface实例
    if(tempArray.length==lineCounts){
        console.log(tempArray);//用于调试，可删去
        readlineTest.close();
    }
    
});

//当readlineTest执行'close'命令时，输入流关闭，程序结束。
readlineTest.on('close', function() {
    
    process.exit(0);
    
});