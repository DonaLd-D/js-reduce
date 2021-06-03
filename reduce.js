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
