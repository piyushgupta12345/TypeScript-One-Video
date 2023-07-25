// let num1 = 1;

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(num1, 4));


// Exam:- 2
// function getTotal(numbers: number[]){
//     return numbers.reduce((acc, item)=>{
//         return acc+item;
//     },0)
// }

// console.log(getTotal([3, 2, 1]))

// function getTotal(numbers: Array<number>){
//     return numbers.reduce((acc, item)=>{
//         return acc+item;
//     },0)
// }

// console.log(getTotal([3, 2, 1]))

// Exam:- 3
// const user = {
//     firstName: "Piyush",
//     lastName: "Gupta",
//     age: 19
// }

// console.log(user.firstName)


// type alias  ----------->>>>>>>>>>>>>>>

// type User = {
//     name: string,
//     age: number,
//     address?: string
// }

// function login(userData: User):User {
//     return userData;
// }

// const user= {
//     name: "Piyush",
//     age: 19
// }

// console.log(login(user));


// Interface  ----------->>>>>>>>>>>>>>>

/*interface Transtion {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number,
    accountHolder: string,
    balance: number,
    isActive: boolean
    transtions:Transtion[]
}

const transtion1: Transtion={
    payerAccountNumber: 345,
    payeeAccountNumber: 543
}

const transtion2: Transtion={
    payerAccountNumber: 346,
    payeeAccountNumber: 33
}

const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: "piyush",
    balance: 1234,
    isActive: true,
    transtions:[transtion1, transtion2]
}*/

// Interface Extend  --------->>>>>>>>>>>>>>>>>>>>

/*interface Book {
    name: string,
    price: number
}

interface Ebook extends Book {
    // name: string,
    // price: number,
    fileSize: number,
    format: string
}

interface AudioBook extends Ebook {
    // name: string,
    // price: number,
    // fileSize: number,
    // format: string,
    duration: number
}

const book: AudioBook ={
    name: "Atomic habbits",
    price: 1200,
    fileSize: 300,
    format: 'pdf',
    duration: 5
}*/

// Two same name interface merge ---------->>>>>>>>>>>>>>>.
// interface Book {
//     name: string,
//     price: number
// }

// interface Book {
//     size: number
// }

// const book:Book={
//     name: 'Atomic Habbits',
//     price: 1200,
//     size: 300
// }


// two same Type not merge

// type Book = {
//     name: string,
//     price: number
// }

// type Book = {
//     size: number
// }


// Unions  -------->>>>>>>>>...

/*type ID = number | string;

// Norrowing

function print(id: ID) {

    if(typeof id === 'string'){
        console.log(id.toUpperCase())
    } else{
        console.log(id)
    }

}

print(1)*/

// function getFirstThree(x: string | Array<number>){
//     return x.slice(0,3)
// }

// console.log(getFirstThree("hello"))

// Generics  ---------->>>>>>>>>>>>>>>>>>>..............

// Generics  ---------->>>>>>>>>>>>>>>>>>>..............
// Structual typing / Dunk typing   --------->>>>>>>>>>>>.............

/*interface ICreadential {
    username: string,
    password: string,
    isAdmin?: boolean
}

function login(credentials: ICreadential):boolean {
    console.log(credentials)
    return true
}


const user = {
    username: 'codergyan',
    password: 'secret',
    isAdmin: true
}

login(user)*/

/*interface Auth {
    username: string,
    password: string,
    login(username: string, password: string):void
}

const auth: Auth = {
    username: 'codergyan',
    password: 'scret',
    login(username: "hii", password: "gmail"){
        return true;
    }
}*/


