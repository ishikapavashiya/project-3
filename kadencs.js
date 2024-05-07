// ======================================kadencs=====================
// let arr = [5, -4, 8, 8]

// let sum = 0;
// let curr = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//     if (curr < 0) {
//         return 0;
//     }
//     if (sum < curr) {
//         sum = curr;
//         return sum;
//     }
// }
// console.log(sum);

// ======================================liner sec==========================


// let arr = [18, 9, 7, 5, 2]
// let swap=false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]<arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp;
//           swap=true;
//         }
//         if(!swap){
//             break;
//         }
//     }
// }
// console.log(arr);   

// =============================================binary============
// let arr = [5, 1, 2, 3, 4,];

// let sea = (arr, element, start, end) => {
//     if (start > end) {
//         return -1;
//     }
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] === element) {
//         return mid; 
//     } else if (arr[mid] > element) {
//         return sea(arr, element, start, mid - 1);
//     } else {
//         return sea(arr, element, mid + 1, end);
//     }
// }
// let res = sea(arr, 3, 0, arr.length - 1);
// console.log(res);

// ===========================queue=================================

// class queue {
//     constructor() {
//         this.queue = []
//         this.size = 5;
//     }
//     insert(ele) {
//         if (this.queue.length < this.size) {
//             this.queue.push(ele)
//         }
//         else {
//             console.log("stack is overflow");
//         }
//     }
//     remove() {
//         if (this.queue.length != 0) {
//             for (let i = 0; i < this.queue.length; i++) {
//                 if (this.queue[0] != this.queue[i])
//                     console.log(this.queue[i]);
//             }
//         }
//     }
//     travel(){
//         this.queue.map((val,ind)=>{
//             console.log(val);
//         })
//     }
//     firstele(){
//         if(this.queue.length !=0){
//             console.log("first element",this.queue[0]);
//         }
//     }
//     lastele(){
//         if(this.queue.length !=0){
//             console.log("last element",this.queue[this.queue.length-1]);
//         }
//     }
//     lastsecuondele(){
//         if(this.queue.length !=0){
//             console.log("lase secuond element",this.queue[this.queue.length-2]);
//         }
//     }
// }

// let s1 = new queue()

// s1.insert(1)
// s1.insert(5)
// s1.insert(6)
// s1.insert(7)
// s1.insert(8)

// s1.remove()
// s1.travel()
// s1.firstele()
// s1.lastele()
// s1.lastsecuondele()

