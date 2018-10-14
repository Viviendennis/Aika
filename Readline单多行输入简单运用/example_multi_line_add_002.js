
//  引入readline模块
var readline = require('readline');

//  创建一个readline接口实例
var readlineTest = readline.createInterface({
    
    input: process.stdin,
    output: process.stdout
    
});

var linesArray=[];//该数组用来存储输入的内容

var linesArrayIndex=0;//设置存储输入内容数组的索引初始值

var resultArray=[];//该数组用来存储除输入内容第一行外其他行的输入内容

var result=0;//总值

var str=""//整合式子

readlineTest.on('line', function(line){
    
    //将存储输入内容的数组linesArray的第一个元素linesArray[0]的值设置为允许输入的行数
    if(linesArrayIndex==0){
        linesArray[linesArrayIndex]=Number(line);
        //打印控制台输入的第一行内容："允许输入的行数"
        console.log("允许输入的行数: "+linesArray[0]);
    }
    
    //将每一行的内容作为一个单元写入数组linesArray，并且每写入一个元素则数组下标linesArrayIndex自增1
    linesArray[linesArrayIndex]=Number(line);
    linesArrayIndex++;
    
    //调用Array对象的slice()方法返回linesArray数组的子数组(该子数组的内容为: 除linesArray数组第一个元素外的其他元素)
    //将子数组的每个元素依次添加至结果数组resultArray
    for(var i in linesArray.slice(1)){
        resultArray[i]=linesArray.slice(1)[i];
    }
    
    //将resultArray数组的元素叠加后的值赋值给result
    result=resultArray.reduce(function(total,nextTemp){
        return total+nextTemp;
    },0);
    
    //当输入内容的行数减一后等于linesArray数组的第一个元素(即允许输入的行数)时，则关闭输入流readline
    if(resultArray.length==linesArray[0]){
        //整合式子
        for(var i in resultArray){
            if(i==resultArray.length-1){
                str+=resultArray[i]+"="+result;
            }else{
                str+=resultArray[i]+"+";
            }
        }
        //打印输出整合后的式子
        console.log(str);
        readlineTest.close();//关闭输入流
    }
    
});

//当readlineTest执行'close'命令时，输入流关闭，程序结束。
readlineTest.on('close', function() {
    
    process.exit(0);
    
});