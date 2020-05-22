//导入{}中定义的变量
import {flag,sum} from "./aaa.js"


if(flag){
    console.log('小明是天才')
    console.log(sum(40,20))
}

//直接导入 export定义的变量
import {num1,height} from "./aaa.js"
console.log(num1);
console.log(height);

 //导入export的function
 import {mul,Person} from "./aaa.js"
 console.log(mul(20,40))
 const p =new Person;
p.run()

//导入 export default的内容
import addr from "./aaa.js"
console.log(addr)

// 同一全部导入
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);

