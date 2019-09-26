
//根据索引值截取一定范围的数组(包括两边索引值对应的元素),并使用递归的思想求和

let nums = [0,1,2,3,4,5,6];
let i = 3;
let j = 6;
let newArr = nums.slice(i,j+1);
function main(i,j,arr){
    console.log(arr);//[3, 4, 5, 6]
    let sum = 0;
    let index = 0;//4
    function sumRange(item1,item2){
        sum += item2;//3+4+5+6
        if(++index < arr.length){//1<4 2<4 3<4
            sumRange(sum,arr[index]);
        }
    }
    if(arr.length == 1){
        console.log(arr[0])
    }else{
        sumRange(0,arr[0]);
        console.log(sum);
    }
}
main(i,j,newArr);
