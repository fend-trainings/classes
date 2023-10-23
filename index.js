let yourName = document.querySelector('.name');
let age = document.querySelector('.age');
let height = document.querySelector('.height');
let lengths = document.querySelectorAll('.length');
let Submit = document.querySelector('.button');
let display = document.querySelector('p');
let attend = document.querySelector('.attend');
let courseOfStudy = document.querySelector('.course');
let lengthValue;


lengths.forEach(length => {
    length.addEventListener("click",()=>{
        lengthValue = length.value
        console.log(lengthValue)
    })
});

class Person {
    constructor(name,age,heigth,hair){
        this.fullname = name;
        this.age = age;
        this.height = heigth;
        this.hairSize = hair;
        // this.courseRegistered = course

    }    

    details(){
        let acceptedHair;
        if(this.hairSize === 'short'){
            acceptedHair = 'accepted'
        }else{
            acceptedHair = 'not accepted'
        }
       return `your hair is ${this.hairSize}, therefore you are ${acceptedHair}`
    }
}

class Osom extends Person{
    constructor(name,age,heigth,hair,course,frequency){
        super(name,age,heigth,hair)
        this.courseOfStudy = course;
        this.attending = frequency
    }

    attendance(){
        return `${this.fullname}, a student of ${this.courseOfStudy} attends class ${this.attending}`
    }
}

Submit.addEventListener('click',(ev)=>{
    console.log(yourName.value,age.value,height.value)
    let Name = yourName.value
    let Age = age.value;
    let Heigth = height.value;
    let course = courseOfStudy.value
    let attendanceReport = attend.value
    let newPerson = new Osom(Name,Age,Heigth,lengthValue,course,attendanceReport);
    display.innerHTML = newPerson.details();
    // console.log(newPerson.details)

    ev.preventDefault()
})
