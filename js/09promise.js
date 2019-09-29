let promise = new Promise((resolve,reject)=>{
    console.log('这是同步函数');
    resolve('成功了');
}).then(res=>{
    console.log(res);
});
