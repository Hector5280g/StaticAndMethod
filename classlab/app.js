// class Governor {
//     constructor(name, money, law, age){
// this.name = name;
// this.money = money;
// this.law = law;
// this.age = age;
//     }
//     takeTax(){
//        console.log(this.name, `will take your money!`);
//      return this;
//         }
    
 class Person {
constructor (name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender; 
}
doMath(){
    console.log(`1+2=` + 3)
}
working(){
    console.log(`working super super hard`)
}
rest(){
    console.log(`you need to rest`)
}

 }
 class PostalWorker extends Person {
    deilverMail(){
        console.log(`I can deliver mail to you `)
    }
    workovertime(){
        console.log('works from morning till night') 
    }
 }
class Chef extends Person {
    cook(){
        console.log('I am the head chef.')
    }
    clean(){
        console.log('I have to clean the kitchen')
    }
}
let postalWorker1 = new PostalWorker('james', 25, 'male');
let postalWorker2 = new PostalWorker('ana', 30, 'female');
let chef1 = new Chef('bobby', 40, 'male');

console.log(chef1);
chef1.cook();