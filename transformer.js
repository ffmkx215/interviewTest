const userIds = ['U01','U02','U03']
const orderIds = ['T01','T02','T03','T04']
const userOrders = [
    {userId:'U01',orderIds:['T01','T02']},
    {userId:'U02',orderIds:[]},
    {userId:'U03',orderIds:['T03']}
]
const userData = {'U01':'Tom','U02':'Sam','U03':'John'}
const orderData = {
    'T01':{name:'A',price:499},
    'T02':{name:'B',price:599},
    'T03':{name:'C',price:699},
    'T04':{name:'D',price:799},
}
let temp = []
for (let i = 0;i < userIds.length;i++){
    temp.push({user:{id:userOrders[i].userId,name:userData[userOrders[i].userId]},orders:[]})
    userOrders[i].orderIds.forEach(item=>{
        temp[i].orders.push({id:item,name:orderData[item].name,price:orderData[item].price})
    })
}
const result = temp
console.log(result)