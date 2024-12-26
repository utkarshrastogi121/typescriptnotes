// let x: number=1;
// console.log(x);

// function add(a: number, b: number): number {
//     return a + b;
// }

// function greet(firstname: string,lastname: string,age: number) {
//     console.log(`Hello ${firstname} ${lastname} ${age}`);
// }

// function isLegal(age: number): boolean {
//     if (age >= 18) {
//         return true;
//     } else {    
//         return false;
//     }
// }
// let x=isLegal(20);

// Interface
// Example

// interface User{
//     firstname: string;
//     lastname: string;
//     age: number;
//     email?: string;   (?: optional)
// }
// function isLegal(user: User): boolean {
//     if (user.age >= 18) {
//         return true;
//     } else {    
//         return false;
//     }
// }
// function greet(user: User) {
//     console.log(`Hello ${user.firstname} ${user.lastname} ${user.age}`);
// }

// classes with interface with implements keyword

//Types  has some extra features like union, intersection, type guards, type aliases, etc.

// type User = { firstname: string, lastname: string, age: number, email?: string };

// difference between type and interface is that type can be used with union, intersection, etc. but interface can't be used with union, intersection, etc and type can be used with type guards but interface can't be used with type guards and type can be used with type aliases but interface can't be used with type aliases and type can be used with computed properties but interface can't be used with computed properties.



// Array

// example1
// type NumberArray = number[];
// function maxValue(arr: NumberArray): number {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// maxValue([1, 2, 3, 4, 5]);

// example2
// interface User { 
//     firstname: string;
//     lastname: string;
//     age: number;
// }
// function filterUsers(users: User[], age: number): User[] {
//     let result: User[] = [];
//     for (let user of users) {
//         if (user.age >= age) {
//             result.push(user);
//         }
//     }
//     return result;
// }


// Enums used when we have a fixed set of values
//example 1
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomething(keyPressed: Direction) {
//     if (keyPressed === Direction.Up) {
//         console.log('Move up');
//     } else if (keyPressed === Direction.Down) {
//         console.log('Move down');
//     } else if (keyPressed === Direction.Left) {
//         console.log('Move left');
//     } else if (keyPressed === Direction.Right) {
//         console.log('Move right');
//     }
// }
// doSomething(Direction.Up); 
// doSomething(Direction.Down);
// doSomething(Direction.Left);

// example 2
// const app=express();
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     InternalServerError = 500
// }
// app.get("/",(req,res)=>{
//     if(!req.query.id){
//         res.status(ResponseStatus.NotFound).json({})
//     }
//     res.status(ResponseStatus.Success).json({});
// })


//Generics

//Limitaion without generics

//example1
// type Input = string | number;
// function firstElement(arr: Input[]): Input {
//     return arr[0];
// }
// const value = firstElement(["a", "b", "c"]); // in this way we send the string or number in a mixed way
// value.toUpperCase(); // Error: Object is possibly 'undefined'.

//example2
// type Input = string | number;
// function firstElement(arr:string[]|number[]): Input {
//     return arr[0];
// }
// const value = firstElement(["a", "b", 1,2,3]); // but in this way we cannot send the string or number in a mixed way.either we can sebd strings or numbersb only


// Generics is a way to create reusable components in typescript. It allows us to write a function or a class that can work with any data type.It is a way to make components work for any data type and not restrict to one data type.

// function identity<T>(arg: T): T {
//     return arg;
// }
// let output = identity<string>("myString");
// let output2 = identity<number>(1);
// console.log(output);
// console.log(output2);

// it will return the same type of value that we pass in the function. <> is used to define the type of the value.



// Exporting and Importing Modules

// maths.ts
// export function add(a: number, b: number): number {  //export is used to export the function
//     return a + b;
// }
// export function subtract(a: number, b: number): number {
//     return a - b;
// }

// app.ts
// import { add, subtract } from './maths';  //import is used to import the function
// console.log(add(1, 2));
// console.log(subtract(1, 2));