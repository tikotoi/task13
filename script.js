// 1 task

// let user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age:25,
//     studentstatus: 'active'
// }

// console.log(user.studentstatus);

// // 2 task

// let ages = [23, 34, 23, 18, 50, 45, 32, 20]

// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }

// let age = [13, 4, 63, 48, 5, 45, 22, 20]

// let y=0 

// while (y <age.length) {
//     console.log(age[y]);
//     y++;
// }


// 3 task
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let n of numbers) {
//     if (n>5) {
//         console.log(n);
//     }   
//     }

// 4 task_1 way
// let user = {
// 	name: 'giorgi',
// 	age:  17,
// 	studentstatus:'active'
// }
// let logError = true
// if  (user.age < 18 && user.studentstatus =='active') {
//     console.log('hello');
//     logError = false
// } 
// if (user.name =='giorgi'){
//     console.log('hello giorgi');
//     logError = false
// }

// if (user.studentstatus =='active' || user.age < 25){
//     console.log('hello world');
//     logError = false
//     }
// if (logError) {
//     console.log('error');
// }

// // 4 task_2 way

// let userr = {
// 	name: 'giorgi',
// 	age:  17,
// 	studentstatus:'active'
// }

// if  (userr.age < 18 && userr.studentstatus =='active') {
//     console.log('hello');
// } 
// else if (userr.name =='giorgi'){
//     console.log('hello giorgi');
// }

// else if (userr.studentstatus =='active' || userr.age < 25){
//     console.log('hello world');
//     }
// else {
//     console.log('error');
// }

// 5 task

// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

// for ( let object of array) {
//     if (typeof object ==='string')
//     console.log(object);
// }

//6 task
// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]

// for (let x of array) {
//     for ( let n of x) {
//         if ( n>0)
//         console.log(n);
//     };
// }

// 7 task 
// let array = [32, 10, 'hello', null, 'hello2', 50 ]

// for ( let x of array) {
//         if (typeof x=='number' && x % 5 == 0) 
//         console.log(x);
//     }s


//  function 

//1 task 

// function sum(...n) {
//     let x=0; 
//     for (let item of n) {
//         if (item>0) {x+=item 
//         }
//     }
//     return x
// }

// let result =sum (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
// console.log(result);

// 2 task

// function sum(...array) {
// let y=0

// for (let numbers of array) {
//     y+=numbers;
// }
// return y
// }

// let result =sum (10, 50, 6, 7, 8, 11, 6, 3, 9)
// console.log(result);

//3 task

// let user = {
//     firstname: 'giorgi',
//     lastname: ' saakadze',
//     age: 32,
//     isloggedin: true
//   }

//   function account() {
    
//         if (user.isloggedin===true) {
//             console.log(user.firstname+user.lastname);
//         }
//         else{
//             console.log('false');
//         }
//     }
//   account();


//   4 task

// function numbers(array) {
// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i]>max) {
//         max=array[i]
//     }
// }
// return max
// }

// let x =[102, -80, 3456, 7, 8, 11, 6, 3, 9]
// let result =numbers(x)
// console.log(result);