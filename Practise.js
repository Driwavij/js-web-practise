//IF  ALTERNATIVA SWITCH-CASE

const month = 10

if(month<=3) {
    result = 'zima'
}
if(month>=4 && month<=6){
    result = 'vesna'
}
if(month>=7 && month<=9){
    result = 'leto'
}
if(month>=10 && month<=12){
    result = 'osenj'
}

console.log(result)

// STROKA IF

String = 'abcde'
if(String[0]==='a'){
    console.log('da')
} else{
    console.log('net')
}


//STROKA IF 

String = '12345'

if(String[0]==1 || String[0]==2 || String[0]==3){
    console.log('da')
} else{
    console.log('net')
}

// EZ WHILE

let i = 1

while(i<=100){
    console.log(i)
    i+=2
} 

let i = 30

while(i>=0){
    console.log(i)
    i--
}

// FOR

for(let i = 100; i>=0; i--){
    console.log(i)
} 

// NAKOPLENIE REZULTATA V CIKLE 

let result = 1

for(let i = 1; i<=99; i+=2){
    result = result + i;
}

console.log(result)








let myArray =[1,2,3,4,5]
result = 0

for(let i = 0; i<myArray.length; i++){
    result+=myArray[i]
}

console.log(result)

// FOR IN

let obj = {
    green: 'zelenij',
    red: 'krasnij',
    blue: 'goluboj'
}

for(let key in obj){
    console.log(obj[key])
}


let obj = {
    Kolja: 200,
    Vasja: 300,
    Petja: 400
}

for(key in obj){
    console.log([key ]+ ' - zarplata ' + (obj[key]) + " dollarov" )
}



const myArray = [2,5,9,15,0,4]
for( let i = 0; i<myArray.length;i++){
    if(myArray[i]>3 && myArray[i]<10)
    console.log(myArray[i])
}

 Plusovie elementi skladivaem dura
let myArray = [2,-9,1,5,-3]
let result = 0

for(let i = 0;i<myArray.length;i++){
    if(myArray[i]>0){
        result += myArray[i]
    }
}
console.log(result)



let myArray = [1,2,5,8,4,13,4,10]
for(let i = 0; i<myArray.length; i++){
    if(myArray[i]==4){
        console.log('Estj')
        break;
    }
}

// SUMMA FOR IN
let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5
}
let result = 0

for(let key in obj){
    result = result+obj[key]
    
}
console.log(result)


let lox = 'JS'
console.log(lox.toLowerCase())



let string = 'ja uchu javascript!'
console.log(string.slice(3, 8))*/

// REPLACE
let string = 'ja-uchu-javascript!' 

console.log(string.replace(/-/g,'!'))


// С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let string = 'ja uchu javascript!'
let arr = string.split(' ')
console.log(arr)


//Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let string = 'ja uchu javascript!'
let arr = string.split('')
console.log(arr)


//Stroka v massiv , perevorot , massiv v stroku 
let date = '2025-12-31'

let result = date.split('-').reverse().join('.')
console.log(result)


// Pervaja bukva zaglavnaja
let str = 'hello world'
let str2 = str.slice(0,1).toUpperCase()+str.slice(1)
console.log(str2)



let myArray = [1,2,3,4,5]
let result = myArray.slice(0,3) 
console.log(result) // [1,2,3]
*

let myArray = [1,2,3,4,5]
let result = myArray.slice(3,5) //[4,5]
console.log(result)



let myArray = [1,2,3,4,5]
myArray.splice(1,2) //[1,4,5]
console.log(myArray)


let myArray = [1,2,3,4,5]
myArray.splice(3,0,'a','b','c') //[1,2,3,a,b,c,4,5]
console.log(myArray)


let arr = ['a', 'b', 'c', 'd', 'e'];

arr.splice(-2, 1); //[a,b,c,e]
console.log(arr);



let obj = {
    js:'test',
    jq:'hello',
    css:'world'
}

console.log(Object.keys(obj))



let string = '123456'
let result = string.split('').reverse().join('')
console.log(result)



let lox = 'http://2132131';

if (lox.slice(0,7) == ('http://')){
    console.log('yes')
}else{
    console.log('idi nahuj')
}



let string = ''
for(let i=1; i<10;i++){
    string = string + i 
}
console.log(string) //123456789


let string = ''
for(let i = 9; i>0 ;i--){
    string = string + i //987654321
}
console.log(string)



function arrayFill(value, length) { 
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));


//Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным

let myArray = [[1,2,3],[4,5],[6]]
sum = 0
for(let i = 0; i<myArray.length;i++){
    for(let j=0;j<myArray[i].length;j++){
        sum+=myArray[i][j]
    }
}
console.log(sum)



let myArray = [[[1,2],[3,4],[5,6],[7,8]]]
sum = 0
for(let i = 0;i<myArray.length;i++){
    for (let j=0;j<myArray[i].length;j++){
        for(let u = 0;u<myArray[i][j].length;u++){
            sum+=myArray[i][j][u]
        }
    }
}
console.log(sum)


// Only polozotilenoe
let myArray = [2,4,7,-3,-77,-1]
let newArray = []

function isPositive(num){
    if(num>=0){
        return true
    }else{
        return false
    }    
}
for(let i = 0; i<=myArray.length ;i++){
    if(isPositive(myArray[i])){
        newArray.push(myArray[i])
    }
}

console.log(newArray)


//true ili false 
function isNumberinRange(num){
   return num>0 && num<10;
}
console.log(isNumberinRange(6))


// 4etnoe ili ne4etnoe xd
function isEven(num){
    return num %2 == 0;
}
console.log(isEven(5))



//Use object property shorthand with object literals to create and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return ({name,age,gender
    });
    // Only change code above this line
  };



 //SLOZNO
function getDivisors(num){
    let result = []
    for(let i = 1;i<num;i++){
        if(num % i == 0){
            result.push(i)
        }
    }
    return result

}
console.log(getDivisors(300)) 


 //var_text_hello na vartexthello
let string = 'var_text_hello'
console.log(string.replace(/_/g,' '))


function ucfirst(str) {
    return str[0].toUpperCase() + str.substr(1)
}

let str = 'var_text_hello'
let res = []

let newArr = str.split('_')
res.push(newArr[0])


for(let i = 1;i<newArr.length;i++){
    let newStr = ucfirst(newArr[i])
    res.push(newStr)
}

let final = res.join('')
console.log(final)
*/

// СТРИНГ В МАССИВ
let str = 'Kazdij ohotnik zelaet znatj'
let array = str.split(' ')
console.log(array)


 


//1)Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.


function isNumberInRange(num){
    return num>0 && num<10
}
console.log(isNumberInRange(11))


//2) Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.


let myArray = [1,3,5,11]
let newArray = []

for(let i = 0;i<myArray.length;i++){
    if(isNumberInRange(myArray[i])){
        newArray.push(myArray[i])
    }
}

function isNumberInRange(num){
    return num>0 && num<10
}
console.log(newArray)



//3)Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(num){
    return String(num).split('')
}

function arraySum(arr){
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        sum+=Number(arr[i])
    }
    return sum
}
let sum = arraySum(getDigitsSum(123))
console.log(sum)


//4)Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

function isEven(num){
    return num %2==0;
}
console.log(isEven(10))



//5)Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
    // (чисел, на которое делится данное число).
   
function getDivisors(num){
    let result = []
    for(let i = 1;i<num;i++){
        if(num %i==0){
            result.push(i)
        }
    }
    return result
}

console.log(getDivisors(1234))


 

//6)Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

let str = 'You know so'
let res = []
let arr = str.split(' ')

for(let i = 0;i<arr.length;i++){
    res.push(ucfirst(arr[i]))
}

let newStr = res.join(' ')
console.log(res)
console.log(newStr)

function ucfirst(word){
    return word[0].toUpperCase() + word.substr(1)
}


// 7)Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

function inArray(value,arr){
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==value){
            return true
        }
    }
    return false
}
let mas = [1,2,3,4,5,6]
console.log(inArray(5,mas))


//REKURSIJA 


var num = 900;
function isSumLess(num) {
    if (num === 0) 
    return 0;
    return (num - 1) % 9 + 1;
}

console.log('Конечное число = ', isSumLess(num));


// Promise
let promise = new Promise(function(resolve){
	setTimeout(function(){
		resolve(['Kak dela djadja?'])
	},3000)
})

promise.then(function(result){
	console.log(result)
})


//Promis random 4islo s rekursijej 

let promise = new Promise((resolve,reject)=>{
    let i = 0;
    start();

    function start(){
        let interval = getRandomInt(1, 5);
        
        setTimeout(() => {
            i++;
            console.log(i,interval);

            if(interval==2){
                resolve('result')
            }else if(i>=3){      
                reject('error')
            }else{
                start()
            }
        },interval * 500)
    }

})

promise.then(
    (result)=>{alert('result')},
    (error) => {alert('error')}
)
console.log('!')



function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}


// С помощью рекурсии выведите элементы этого массива на экран.

function func(arr){
    console.log(arr.shift())
    if(arr.length !=0){ 
        func(arr)
    }
}

func([1,2,3,4,5]) // 1,2,3,4,5

//Найти сумму элементов массива с помощью рекурсии

function func(arr , sum){
    sum += arr.shift();

    if(arr.length !=0){
        sum = func(arr,sum)
    }
    return sum
}

console.log(func([1,2,3,4,5],0)) //15

//Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:

let arr = [1,[2,7,8],[3,4],[5,[6,7]]]
console.log(func(arr)) 
function func(arr){
    let result = [];
    for(let elem of arr){
        if(typeof elem == 'object'){
            result = result.concat(func(elem))
        }else{
            result.push(elem)
        }
    }
return result // [1, 2, 7, 8, 3, 4, 5, 6, 7]
}

//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.
let arr = [1,2,3,4,5]
let sum = 0
for(let elem of arr){
    sum +=elem
    console.log(sum)
}

//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

let arr = ['privet', 'muzik', 'rodnoj']

let result = arr.map(function(elem){

    return elem + '!'
    
})

console.log(result) // [ 'privet!', 'muzik!', 'rodnoj!' ]


//Используя метод map преобразуйте этот массив в следующий:

/*let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];*/


let arr = ['123','456','789'];

let result = arr.map(elem=>elem.split('').map(Number))
console.log(result)

//Promise ALL

let arr = [
    new Promise  (function(resolve,reject){
        setTimeout(()=>{
            resolve (2 * 2);
        },1000);
    }),
    new Promise  (function(resolve,reject){
        setTimeout(()=>{
            resolve (3 * 3);
        },2000)
    }),
]

Promise.all(arr).then(results => alert(results)) // 4,9

//PROMISE ALL + MAP

function heavyOperation(num){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve (num * num);
        },1000);
    })
}

let nums = [4,3,2]

Promise.all( nums.map(heavyOperation) )
    .then(results=>alert(results)); // 16,9,4

//PROMISE ALL + MAP + CATCH
  function heavyOperation(num) {
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                if(num!=0){
                    resolve (num*num)
                }else{
                    reject('error')
                };
            },2000)
        })
    }

    let nums = [1,0,3];

    Promise.all(nums.map(heavyOperation))
    .then (result => alert(result))
    .catch (error => alert(error)) //error

// GETERS AND SETTERS

class Worker{
   constructor(name, surname, rate, days){
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
   }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setSurname(surname){
        this.surname = surname;
    }
    getSurname(){
        return this.surname;
    }

    setRate(rate){
        this.rate = rate;
    }

    getRate(rate){
        return  this.rate;
    }

    setDays(days){
        this.days=days;
    }

    getDays(){
        return this.days;
    }
    getSalary() {
        return this.rate * this.days
    }

}
let worker = new Worker('Anton', 'Mihalko', 10, 31);


console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); // выведет 31
console.log(worker.getSalary()); // выведет 310 - (10*31)

worker.setRate(20); // Увеличиваем ставку
worker.setDays(10); // Уменьшаем дни
console.log(worker.getSalary()); // выведет 200 - (20*10)

// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName(){
        return this.name + ' ' + this.surname;
    }

    getCourse(){
        return 2022-this.year;
    }
}

class Student extends User{ 
    
    constructor(name, surname, year){
    super(name,surname)
    this.year = year;
    }

   
    
}

let student = new Student('Anton', 'Mihalko', 2019)
console.log(student.name); // Anton
console.log(student.surname); //Mihalko
console.log(student.getFullName()) // Anton Mihalko
console.log(student.year); // 2019
console.log(student.getCourse()); // 3


 //ASYNC + AWAIT

   function getSmth1() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(1),1000)
        });
   }

   function getSmth2() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(2),1000)
    });
   }

   async function func() {
    console.log('1');
    let result1 = await getSmth1();
    console.log('2');
    let result2 = await getSmth2();
    console.log('3');
    alert(result1+result2);
   }

   func()
