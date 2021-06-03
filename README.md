### js为数组定义了5个迭代方法

每个方法都接收两个参数：要在每一项上运行的函数和（可选）运行该函数的作用域的对象--影响this的值。传入这些方法中的函数会接收三个参数：数组项的值，该项在数组中的位置和数组对象本身。

- every():对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true。
- filter():对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组。
- forEach():对数组中的每一项运行给定函数，这个方法没有返回值。
- map():对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
- some():对数组中的每一项运行给定的函数，如果该函数对任一项返回true,则返回true。
- 以上方法都不会修改数组中包含的值。

### js为数组定义了2个归并方法

reduce()和reduceRight(),这两个方法都会迭代数组的每个项，然后构建一个最终返回的值。2个方法都接收两个参数：在每一项上调用的函数和（可选）作为归并基础的初始值。传给reduce()和reduceRight()的函数接收4个参数：前一个值，当前值，项的索引和数组对象。

- reduce():从数组的第一项开始，逐个遍历到最后。
- reduceRight():从数组的最后一项开始，向前遍历到第一项。

```
let arr1=[1,2,3,4]
//不带初始值的迭代
let val1=arr1.reduce((pre,cur)=>{
    return pre+cur
})
console.log(val1) //10

//带初始值的迭代
let val2=arr1.reduce((pre,cur)=>{
    return pre+cur
},10)
console.log(val2) //20

//将二维数组转为一维数组
let arr2=[[1,2],[3,4],[5,6]]
let val3=arr2.reduce((pre,cur)=>{
    return pre.concat(cur)
},[])
console.log(val3) //[1,2,3,4,5,6]

//计算数组中每个元素出现的次数
let arr3=[1,3,4,1,3,2,9,8,5,3,2,0,12,10]
let val4=arr3.reduce((pre,cur)=>{
    if(cur in pre){
        pre[cur]+=1
    }else{
        pre[cur]=1
    }
    return pre
},{})
console.log(val4)

//按属性给数组分类
let bills=[
    {type:'shop',money:233},
    {type:'study',money:341},
    {type:'shop',money:821},
    {type:'transfer',money:821},
    {type:'study',money:821}
]
let val5=bills.reduce((pre,cur)=>{
    if(!pre[cur.type]){
        pre[cur.type]=[]
    }
    pre[cur.type].push(cur)
    return pre
},{})
console.log(val5)

//数组去重
let arr4=[1,2,1,2,3,4,5,4,3,7,6,5,6,4]
let val6=arr4.reduce((pre,cur)=>{
    if(!(pre.includes(cur))){
        pre.push(cur)
    }
    return pre
},[])
console.log(val6)

//求最大最小
let arr5=[
    {age:21},
    {age:22},
    {age:23}
]
let val7=arr5.reduce((pre,cur)=>{
    if(!pre){
        pre=cur
        return pre
    }
    if(pre.age<cur.age){
        pre=cur
        return pre
    }
    return pre
},0)
console.log(val7)
```
