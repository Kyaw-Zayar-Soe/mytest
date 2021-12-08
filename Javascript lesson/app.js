    //Old version

// var mic = document.getElementById('mic');      //getElementByClassName  class so yin
// mic.style.color = 'blue';
// mic.style.fontSize = 70 +'px';

    //New version

// var en = document.querySelector('#mic');
// en.style.color = 'red';
// en.style.fontSize = 100 +'px';

// let x = 3;
// let y = 'mg mg';
// console.log(typeof y)                             //type of -> to know what type of x is

// let name;
// let age = 20;
//     name = age>15 ? "Mg Mg" : "Aung Aung";         //tinary operator
//     console.log(name);

// let y = 'Mg Mg';
// document.querySelector('#mic').innerText = y;      //innertext h1 element htae ka hr ko pyin yay tr

// let name = ['Mg Mg','Aung Aung',39,true];
// console.table(name[1]);                            //Index array

// let person = {
//     name: "Mg Mg",
//     age: 20,                                          //Object
//     married:false,                                      //-Object htae mhr array/string/number/boolean/object pyan htae loz ya 
//     family:['U Ba',"Daw Mya",'Su Su'],                  //-this- d object htae mhr moh loz tone a pyin mhr so name tat tone like person
//     own:{
//         car:"Toyota",
//         bike:"Mountain bike"
//     },
//     doIt: function(){
//         console.log(this.name+" is riding a "+this.own.bike);
//     }
// }
// let json = JSON.stringify(person);                        //Json encode in php
// let obj = JSON.parse(json);                               //json  decode in php
// console.table(obj);

// let color = 'reed';
// let value;
// switch(color){
//     case'green': 
//     value = 'It is green';                               //Switch case format
//     break;
//     case'red': 
//     value = 'It is red';
//     break;
//     default:
//     value = "I can't guess";
// }
//  document.querySelector("#mic").innerHTML = value;

// let age = 300;
// if(age == 20){
//     console.log('It is 20');
// }else if(age == 30){                                    //If statement 
//     console.log('It is true');
// }else {
//     console.log("I'm tired!");
// }
 

//when start point and end point are already known "For loop"
//when end point is not sure "while loop"
//when at least one time work "dowhile loop"


// for(let i = 0; i< 1000;i++){
//     console.log("Hello world " + i);                       //for loop
// }

// let ob = [
//     {'name':'Ma Ma'},
//     {'name':'Aye Aye'}
// ]
// let i = 0;
// while(i<ob.length){                                          //while loop
//     console.log(ob[i].name);
//     i++
// }

// let i = 15;       //answer out whatever at least one time
// do{                                                          //dowhile loop
//     console.log("Now i is " + i);
//     i++
// }while(i<=10)

// let mo = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
// let tom = mo.split(" ");                    //"Lorem","ipsum" like this        string to ary phit twr
// tom.forEach((co,i) =>{                                      //foreach loop
//     console.log(co + " " + i);
// })

// let mi = /*['aung aung','su su','aye aye']*/{
//     name : 'Mg Mg',
//     age  : 13,
//     married:true,
//     family:['U Ba','Daw Su','Mi Aye']                         //forin loop
// }
// for(tt in mi){
//     console.table(mi[tt])
// }

// let user =[
//     {
//         name:'Aung Aung',
//         age:22,
//         school:'Yangon'
//     },
//     {
//         name:'Mg Aung',
//         age:25,
//         school:'Mandalay'
//     },
//     {
//         name:'Aung maung',
//         age:21,
//         school:'Naypidaw'
//     }
// ]
// user.map((ki) =>{
//     console.log(ki.age);                                   //mapping array obj  //arr hte ka lo chin tr ko ta khu chin u pyin loz ya
// })
// user.filter((ki)=>{
//     console.log(ki)
// })
// user.reduce((a,ki)=>{
//     console.log(a+ki)
// })

// let ind = user.findIndex(ki => ki.age == 25);                 //find index
//     console.log(user[ind]);
 

                //Math object
                
// console.log(Math.PI)
// console.log(Math.E)

// let nu = 2.4;
// console.log(Math.round(nu));                         //fit
// console.log(Math.ceil(nu));                          //alway 3
// console.log(Math.floor(nu));                         //alway 2
// console.log(Math.sqrt(nu));                          //square root
// console.log(Math.abs(nu));                           //0 ka na kwr ha cht pya 
// console.log(Math.pow(8,2));                          //8 nha htet
// console.log(Math.min(8,2));              
// console.log(Math.max(8,2));  

// console.log("**********");

// for(let i = 0; i<5; i++){
//     let num = Math.floor((Math.random() *6) + 1);     //random
//     console.log(num)
// }

// let num = 20;
// let st = num.toString();                         //number to string
// console.log(typeof st)

// let num = "20.5555";
// let st = Number(num);                               //string to number(float pr pya tl)
// console.log(st)

// let num = "20.2"
// let st = parseInt(num);                           //change integer(float twy ko ma pya boo)
// console.log(st);

// let str = "23.4223";
// let inte = parseFloat(str).toFixed(2);                          //change string(.tofix ka '.' nout tan phoe phyat)
// console.log(inte);
// console.log(typeof inte);

// function dom(name,age){
//     return "Name is " + name + " & Age is " + age;               //function argument/function /function return
// }
// let asw = dom("Mg Mg",33);
// console.log(asw)

// let person = {
//     name : 'Mg Mg',
//     brother: 'Aung Aung',
//     sister: 'Su Su',
//     parents: ['U Ba','Daw Mya'],
//     age: 32                                                          //Template literal/Template string
// }

// let mgdata = `
//                 <h4>${person.name} Resume</h4>
//                 <ul>
//                   <li>Father : ${person.parents[0]}</li>
//                   <li>Mother : ${person.parents[1]}</li>
//                   <li>Brother : ${person.brother}</li>
//                   <li>Sister : ${person.sister}</li>
//                   <li>Age : ${person.age}</li>
//                 </ul>
//              `
// document.querySelector(".para").innerHTML = mgdata;
 
           //Function Expression

// function dd(){
//     console.log('Hey Now!');
// }
// dd()

// let ss = ()=> console.log('Hey Now!');
// ss()

//            Immediately Invokable Function Expression(IIFEs)
// (function(){
//     console.log('Hey Now!');
// })();

// (()=> console.log('Hey Now!'))();

// let ary = [1,2,3,4,5,6];
// let ary0 = [7,8,9];

// let bol = Array.isArray(ary);            //array hope ma hope sit

//let x = ary.indexOf(5);                     //find index number

//ary.push(22);                            //at last mhr new add

//ary.unshift(44)                          //a shae mhr a yin add

// ary.pop()                             //nout sone a lone ko remove
// ary.shift()                           //shae sone a lone ko remove

//ary.splice(2,2)                        //(index,count)remove

//ary.reverse();

// let x = ary.concat(ary0)               //conmbine 2 array
// console.log(x)

//    let dd = new Date('Sep 22 2001 05:20:12');
//      console.log(dd)
    // console.log(dd.getDate());
    // console.log(dd.getMonth()+1);
    // console.log(dd.getDay());                //Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
    // console.log(dd.getFullYear()); 
    // console.log(dd.getHours()); 
    // console.log(dd.getMinutes()); 
    // console.log(dd.getSeconds()); 
    // console.log(dd.getMilliseconds()); 
    // console.log(dd.getTime());                 //January 1 1970 start

// dd.setDate(2);
// dd.setFullYear(2000);
// dd.setMonth(9);
// console.log(dd);           

//  let num = [23,2,1,3,5,8,7,44];                ary to string
//  let nu = num.join(',')
//  console.log(nu)

// num.sort((x,y)=>x-y);                //ascending descending
// console.log(num)

// function under(i){
//     return i<13;
// }
// let res = num.find(under);
           //OR
// let res = num.find((i)=>i<13);
//    console.log(res)

// let ary = new Array(122,255,124,231);
// let con = num.concat(ary);
// console.log(con.sort((x,y)=>x-y));

// let no = 29                //block /reassign/no redeclearable 
// var noi = 33              //global /reassign/redeclearable
//const VAL = 33              //global /no reassign/no redeclearable
// console.log(window.noi)

// let sr = 'I can\'t speak english Well';    //escaping
// str.toUpperCase()
// str.toLowerCase()
// str.lastIndexOf(searchValue)
// str.charAt(index)                             //character at fill index
// str.substring(indexStart, indexEnd)           //(0,3)
// str.slice(beginIndex, endIndex)               //(-4,4)pyat htote p pya
// str.replace('english', 'korea')               //replace the word
// str.includes('speak')                         //pr ma pr check true false pya
// str.trim()                                    //sr kyt shae nat nout ka space shi yin remove
// console.log(sri)


// let name = prompt('What is your name?');
// document.querySelector('#mic').innerHTML = name;     //fill the blank 

// let con = confirm("Are you over 18");                    //hope ma hope true false
// let ans = con ? 'Yes over 18' : 'No, under 18';
// document.querySelector('#mic').innerHTML = ans;


// let head = document.querySelector('#mic');
// head.style.background = "black"
// head.style.color = 'white'                                             //location change next page
// head.style.height = 200 + 'px'

// document.querySelector('.btn').addEventListener('click', () => 
//     window.location.href = 'test2.html'
// );

// document.querySelector('.btn').addEventListener('click', () =>          //page refresh
//     window.location.reload()
// );

// let mega = document.scripts
// let mari = Array.from(mega);                                        //script to array change
// mari.forEach((kuro) => {
//     console.log(kuro.src)
// });
// console.log(mega)

// let head = document.querySelectorAll('ul li');                         //ALL ko tone li a kone ya poh //nodelist a nay nat pya
// for(let i=0;i<head.length;i++){
//    let list = head[i].querySelector('a');                              //li htae ka a ko select
//    list.style.color= 'orange';
//    console.log(list)

// }

//firstElementChild/firstChild,nextSibling,previousSibling,childElementCount/childNodes.length, children
        //1 Element
        //2 Attribute
        // 3 Text Node
        // 8 Comment
        // 9 Document Itself
        // 10 Doctype
// let head = document.querySelector('.lst');                            //ul ko select
//   for(let i=0;i<head.childNodes.length;i++){                                            
//     let boo = head.childNodes[i]                                      //ul htae ka li nat text nat ko twae ml
//     if(boo.nodeType == 1){                                            //1 so mha
//         let some = boo.childNodes[0].textContent                      //li htae ka a ko select a htae ka text ko select
       
//    }
//   } 


                         //Create Tag/Element with javascript
// let main = document.querySelector('.lst');
// let text = document.createTextNode('Six');
// let aTag = document.createElement('a');
// aTag.setAttribute('href','#');
// aTag.appendChild(text);
// let li = document.createElement('li');
// li.appendChild(aTag);
// main.appendChild(li);
// console.log(main)

                           //create tag and set attribute
// let oldelement = document.querySelector('#mic');
// let newelement = document.createElement('h1');
// let text = document.createTextNode('Happy Thadingyut Festival');
// newelement.appendChild(text);
// newelement.className = 'voice bi';
// newelement.id = 'viper';
// let body = oldelement.parentNode;
// body.replaceChild(newelement,oldelement);
// console.log(body)

    
//   let main = document.querySelector('.lst');
//   let element = document.querySelector('ul.lst li:first-child');
//   let tag = element.childNodes[0].getAttribute('alt') 

//   console.log(tag)

// let tap = document.querySelector('.btn');

// tap.onclick = (e)=>{                              
//     console.log(e);
// }

//AddEventListener
// tap.addEventListener('dblclick',(e)=>{    
//     console.log(e.type);
// })

//MoreEvent  //mousedown/up //mouseenter/leave or out  //mouseover/move 
// let one = document.querySelector('.btn');
// let two = document.querySelector('#btn');
// one.onmouseover = (e)=>{
//     console.log(e.target.innerText);
// }
// two.addEventListener('mousemove',(e)=>{
//     console.log(e.target.innerText  )
// })

//keydown , keyup , keypress , focus , blur , cut , paste , change
// let form = document.querySelector('form');
// let input = document.querySelector('#sub');

// input.addEventListener('change',(e)=>{
//     alert(123)
// })
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(input.value);
// })


                                //LocalStorage

// let addData = (obj)=>{
//     let data = JSON.stringify(obj);
//     localStorage.setItem('local',data);
// }
// let getData =()=>{
//     let str = localStorage.getItem('local');
//     let obj = JSON.parse(str);
//     return obj;
// }
// let removeData = ()=>{
//     localStorage.removeItem('local');
// }

// let form = document.querySelector('.contain');
// let Inputname = document.querySelector('#name');
// let Inputage = document.querySelector('#age');
// let button = document.querySelector('#btndelete');
// form.addEventListener('submit',(e)=>{
//    e.preventDefault();
//    let name = Inputname.value;
//    let age = Inputage.value;
//    let user = {
//        name: name,
//        age: age,
//    };
//    addData(user);

// })
// button.addEventListener('click',removeData);

                                        //Session Storage
// let saveData = (usrobj)=>{
//     let usrary = getData();
//     if(usrary == null){
//         usrary = [];
//         usrary.push(usrobj);
//         addData(usrary);
//     }else{
//         let ind = usrary.findIndex(usr =>usr.name == usrobj.name);
//         console.log(ind)
//         if(ind == -1){
//             usrary.push(usrobj);
//             addData(usrary);
//         }else{            
//             alert('User already exists!');
//         }
//     }
// }

// let addData = (aryobj)=>{
//     let data = JSON.stringify(aryobj);
//     sessionStorage.setItem('session',data);
// }
// let getData = ()=>{
//     let str = sessionStorage.getItem('session');
//     let Aryobj = JSON.parse(str);
//     return Aryobj;
// }
// let removeData = ()=>{
//     sessionStorage.removeItem('session');
// }

// let form = document.querySelector('.contain');
// let Inputname = document.querySelector('#name');
// let Inputage = document.querySelector('#age');
// let button = document.querySelector('#btndelete');
// form.addEventListener('submit',(e)=>{
//    e.preventDefault();
//    let name = Inputname.value;
//    let age = Inputage.value;
//    let user = {
//        name: name,
//        age: age,
//    };
//    saveData(user);

// })
// button.addEventListener('click',removeData);          

                                    //OOP Javascript & constructor function(new string(),new number(),nwe function(),new boolean(),new array())

// function Person(name,age){                        //object prototype
//     this.name = name;
//     this.age = new Date(age);                                   //this ka p1 ko pyw tr      
//     this.getage = ()=>{
//         let diff = Date.now() - this.age.getTime();          //date.now ka 1970 ka sa a ku hti //thisagetime ka 1970 ka sa 2000 hti
//         let getage = new Date(diff);                           // 25 1 1991     51-30
//         return getage.getFullYear();
        
//     }
// }
// let p1 = new Person('Mg Mg',23);
// let p2 = new Person('Aung Aung','10-02-2000');
// console.log(p2.getage());


                        //currentobject.prototype / oject prototype
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }               
// Person.prototype.getUserData = function(){                   //Defaultobjpro
//     return this.name + ':' + this.age;
// }     
// let person = new Person('Mg Mg',21);
// console.log(person.getUserData());

                        //currentobjectprototype inherientance

// function Cars(name,speed){
//     this.name = name;
//     this.speed = speed;
// }
// Cars.prototype.getData = function(){
//     return `Name : ${this.name} & Speed : ${this.speed}.`;
// }
// Cars.prototype.getSpeed = function(){
//     return `This is Toyota speed ${this.speed}`;
// }

// function Toyota(name,speed,model){
//     Cars.call(this,name,speed);
//     this.model = model;
// }
// Toyota.prototype = Object.create(Cars.prototype);              //Cars constructor tone poh atwat yay thi
// Toyota.prototype.getSpeed = function(){                        //replace lope thi
//     return `This is overspeed in toya ${this.speed}.`;
// }
// let toya = new Toyota('toyota',180,1990);
// console.log(toya.getData())
// console.log(toya.getSpeed())
// console.log(toya.model)
                                          //Another Prototype form
// const Carpro = {
//     getName : function(){
//         return this.name;
//     },
//     getSpeed : function(){
//         return this.speed;
//     }
// }
// let Car = Object.create(Carpro);
//   Car.name = "Toyata";
//   Car.speed = 340;
             //Or
// let Var = Object.create(Carpro,{
//     name : { value : "Toyota"},
//     speed : { value : 320}
// })
//   console.log(Var)
                         
                             //Ecmas6 Class
// class Person{
//     static name = "Aung Aung";
//     static age = 21;
//     constructor(name,age){
//         this.name = name;                    //Object shi mha a lope lope 
//         this.age = age;
//     }
//     getName(){
//         return `Name is ${this.name}.`
//     }
//     static getNameAge(){                                      //object ma lo static mhr data shi yin ya b
//         return `Name is ${this.name} & Age is ${this.age}.`
//     }
// }                
// // let p = new Person('Mg Mg',23);
// //console.log(p.getName())
// console.log(Person.getNameAge())

                              //Ecmas6 inheritance
// class Car{                          //super class
//     constructor(name,speed){
//         this.name = name;
//         this.speed = speed;
//     }
//     getData(){
//         console.log(`Name is ${this.name} & Speed is ${this.speed}`);
//     }
// }                              
// class Toyota extends Car{               //sub class
//     constructor(name,speed,price){
//         super(name,speed);                //car constructor ko hlan call
//         this.price = price;
//     }
//     getData(){
//         console.log(`This is from sub class ${this.name} & ${this.speed} & ${this.price}`)
//     }
// }
// let toya = new Toyota('Toyota',189,2300);
// toya.getData();
// console.log(toya.price)
                       
                              //asynchronous javascript /onreadystatchange
// let url = "https://jsonplaceholder.typicode.com/posts"
// let xhr = new XMLHttpRequest();
// let pron = document.querySelector('#pro');
//     xhr.open('GET',url);
//     xhr.onreadystatechange = function(){
//         if(this.status == 200 && this.readyState == 4){
//             let rt = this.responseText;
//             let Json = JSON.parse(rt);
//             let str = '';
//             Json.forEach((post) => {
//                 str +=`
//                          <div class="col-md-3">
//                          <div class="card" style="width: 18rem;">
//                              <div class="card-body">
//                                <h5 class="card-title">${post.title}</h5>
//                                ${post.body}
//                                <a href="#" class="btn btn-primary">Go</a>
//                              </div>
//                            </div>
//                          </div>
//                       `
//             });
//             pron.innerHTML = str;
//         }
//     }
//     xhr.onprogress = function(){
//         console.log('Procressing ...');
//     }
//     xhr.onerror = function(err){
//         console.log(err);
//     }
//     xhr.send();
 
                        //Call Back function        //OnLoad XMLHttpRequest   Another type
// let url = "https://jsonplaceholder.typicode.com/posts";
// let pron = document.querySelector('#pro');
 
// function make(res){                                    //call back function
//             let json = JSON.parse(res);
//             let str = '';
//             json.forEach(post =>{
//                 str +=`
//                          <div class="col-md-3">
//                          <div class="card" style="width: 18rem;">
//                              <div class="card-body">
//                                <h5 class="card-title">${post.title}</h5>
//                                ${post.body}
//                                <a href="#" class="btn btn-primary">Go</a>
//                              </div>
//                            </div>
//                          </div>
//                       `
//             });
//             pron.innerHTML = str;
// }
// function loadData(cb){
//     let xhr = new XMLHttpRequest();
    
//     xhr.open('GET',url);
//     xhr.onload = function(){
//         if(this.status == 200){
//             cb(this.responseText);
//         }
//     }    
//     xhr.send(); 

// }        
// loadData(make);    //call back function

                         //Promise
// let url = "https://jsonplaceholder.typicode.com/posts";
// function loadData(){
//     let xhr = new XMLHttpRequest();
//     return new Promise((resolve,reject)=>{
//             xhr.onload = function(){
//                 if(this.status == 200){
//                     resolve(this.responseText);
//                 }else{
//                     reject("Fail");
//                 }
//             }
//             xhr.open('GET',url);
//             xhr.send();
//     })
// }
// loadData()                                //semicoma ma htae yan
//    .then((res)=>console.log(res))     //for resolve
//    .catch((err)=>console.log(err));    //for reject

                 //Fetch api

// let url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url)
//    .then((res)=>{return res.text()})
//    .then((result)=>console.log(result))
//    .catch((err)=>console.log(err));
 
                //Async await
// let url = "https://jsonplaceholder.typicode.com/posts";
// async function loadData(){
//     const data = new Promise((resolve,reject)=>{
//         let xhr = new XMLHttpRequest();
//         xhr.onload = function(){
//             if(this.status == 200){
//                 resolve(this.responseText);
//             }else{
//                 reject("Fail");
//             }
//         }
//         xhr.open('GET',url);
//         xhr.send();
//     })
//     let con = await data;
//     return con;
// }
// loadData()
//   .then((res)=>console.log(res))
//   .catch((err)=>console.log(err));

                    //Fetch &Promise
// let url = "https://jsonplaceholder.typicode.com/posts";
// function loadData(){
//     return new Promise((resolve,reject)=>{
//         fetch(url)
//          .then((res)=>resolve(res.text()))
//          .catch((err)=>reject(err));
//     })
// }   
// loadData()
//   .then((res)=>console.log(res))
//   .catch((err)=>console.log(err));                

// let fname = '';
// try {
//     fname()
//     fname = 'Mg Mg'                //error handling
// } catch (error) {
//     fname = 'Aung Aung'
// }finally{
//     console.log(fname);
// }

                               //Regular Expression(exec,test,match,search)
// let reg = /secret/i;                           //i mean capital or small letter whatever
// let email ='hello i am mega zion secret';
// // let result = reg.exec(email);              //show index number and text
// // let result = reg.test(email);                 //show boolean
// // let result = email.match(reg)                 //show  index number and text
// // let result = email.search(reg)                //show index num
// console.log(result)

// function check(reg,str){
//     if(reg.test(str)){
//         console.log(`${str} is match with ${reg.source}`)
//     }else{
//         console.warn(`${str} is not match with ${reg.source}`)
//     }
// }
// let rg =/hello/;
// let rg =/^hello/;                  //shae sone mhr hello par ya mal
//let rg =/hello$/;                     //nout sone mhr hello par ya mal
// let rg =/^hello$/;                  //sar tan ta tan lone mhr hello ta khu ml par ya ml 
// let rg =/h.llo/;                        //. nay yar mhr br sa lone ma so ta lone kyite tr htae ma htae loz ma ya
//let rg = /h*llo/;                      //* zero or more char
//let rg = /he?a?llo/;                    //e or a 2khu lone ya ma hte lal ya
// let rg = /he?a?llo\?/;                   //check ?
//let rg = /h[e,a]llo/;                    //Bracket[]  => character set   fill ma lope loz ma ya
//let rg = /[^h]ello/;                    //h nat ma sa ya boo /^[h]ello => h nat sa ya mal
//let rg = /[hb]ello/i;                     //h or b br phit phit ya / ma hte loz  ma ya
//let rg = /[a-zA-Z0-9]ello/;                 //a to z br phit phit ya 0 to 9 kaw
//let rg = /[hb]{2}llo/;                       //h or b 2 lone phit ya mal
//let rg = /([hb]e){2}llo/;                    //he or be 2 khr pr ya mal
//let rg = /\w/;                                // word char bal word ma so ya tal(a-zA-Z0-9_)
//let rg = /\W/;                              //non word twy pl ya @#$% space 
//let rg = /\d/;                             //digit pr mha ya ml //D so non digit
//let rg = /\s/;                             //space par ya ml // S so space only ma ya boo
//let rg = /hell\b/;                           // hell so tat word shi ma shi sit 
// let rg = /x(?=y)/;                           //x nout mhr y lite ya ml / x(?!y) x nout mhr y ma lite ya
// let st = 'xy'; 
// check(rg,st);
      
                                //Form validation
// let Name = document.querySelector('#name');                                
// let email = document.querySelector('#email');                                
// let password = document.querySelector('#pwd');  
// let button = document.querySelector('#bttn');  

// let namev = false;
// let emailv = false;
// let passwordv = false;
// Name.addEventListener('keyup', ()=>{
//     let str = Name.value;
//     let reg = /^\w+$/;
//     if(!reg.test(str)){
//         Name.classList.add('is-invalid')
//         namev = false;
//     }else{
//         Name.classList.remove('is-invalid')
//         namev = true;
//     } 
//     setenable();  
// });
// email.addEventListener('keyup',()=>{
//     let str = email.value;
//     let reg = /^([\w\.\-]+)@([a-z]+)\.([a-z]{2,5})$/;
//     if(!reg.test(str)){
//         email.classList.add('is-invalid');
//         emailv = false;
//     }else{
//         email.classList.remove('is-invalid');
//         emailv = true;
//     }
//     setenable();
// });
// password.addEventListener('keyup',()=>{
//     let str = password.value;
//     let reg = /^[\w\W]{6,20}$/;
//     if(!reg.test(str)){
//         password.classList.add('is-invalid');
//         passwordv = false;
//     }else{
//         password.classList.remove('is-invalid');    
//         passwordv = true;
//     }
//     setenable();
// });

// function setenable(){
//     if(namev && emailv && passwordv){
//         button.classList.remove('disabled');
//     }else{
//         button.classList.add('disabled');
//     }
// }

                                       //ECMA script 6 => Iterator <=> Generator
// function personiterator(obj){
//     let personIndex = 0;
//     return{
//         next : ()=>{
//             return personIndex < obj.length ?{value : obj[personIndex++],done : false}:{done : true};
//         }
//     }
// }                                      
       
// let persons = ['Mg Mg','Aung Aung','Su Su'];
// let person = personiterator(persons);
// let result = person.next();
// result = person.next();
// result = person.next();
// if(!result.done){
//     console.log(result.value)
// }

// function* numgen(){
//     let i = 0;
//     while(true){
//         yield i++;
//     }
// }
// let num = numgen();
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
// console.log(num.next())
  
                     //itemgenerator sample
// let users = [
//     {
//         name : 'Ei',
//         age : 21,
//         member_type : 'Gold member',
//         education : 'Graduate',
//         Married : false,
//         image : 'https://randomuser.me/api/portraits/women/90.jpg'
//     },
//     {
//         name : 'Phyo Phyo',
//         age : 25,
//         member_type : 'Diamond member',
//         education : 'Graduate',
//         Married : true,
//         image : 'https://randomuser.me/api/portraits/women/91.jpg'
//     },
//     {
//         name : 'Yu Na',
//         age : 22,
//         member_type : 'Silver member',
//         education : 'Graduate',
//         Married : false,
//         image : 'https://randomuser.me/api/portraits/women/92.jpg'
//     },
//     {
//         name : 'Thandar',
//         age : 24,
//         member_type : 'Bronze member',
//         education : 'Graduate',
//         Married : true,
//         image : 'https://randomuser.me/api/portraits/women/93.jpg'
//     }
// ]                                                      
// function useriterator(aryobj){
//     let userindex = 0;
//     return{
//         next : ()=>{
//             return userindex < aryobj.length? {value : aryobj[userindex++] , done : false}:{done : true}
//         }
//     }
// }
// let person = useriterator(users)
// let button = document.querySelector('#btn');
// let imageDisplay = document.querySelector('.imageDisplay');
// let infoDisplay = document.querySelector('.infoDisplay');
// button.addEventListener('click',auro)
// function auro(){
//     let personk = person.next();
//     if(!personk.done){
//         infoDisplay.innerHTML = `
//         <ul class="list-group">
//             <li class="list-group-item">Name : ${personk.value.name}</li>
//             <li class="list-group-item">Age : ${personk.value.age}</li>
//             <li class="list-group-item">Member Type : ${personk.value.member_type}</li>
//             <li class="list-group-item">Education : ${personk.value.education}</li>
//             <li class="list-group-item">Married : ${personk.value.Married}</li>
//         </ul>
//         `;
//         imageDisplay.innerHTML = `
//         <img src="${personk.value.image}" class="d-block mx-auto" alt="">
//         `;
//     }else{
//         window.location.reload();
//     }
// }
// auro();

// let person = {
//     name : 'kyaw kyaw',
//     age : 12,
//     Township : 'Yangon'
// }
                                          //Ecma script 5
// let name = person.name;
// let age = person.age;
// let township = person.Township;
                                          //Ecma script 6
// let {name,age,Township} = person;
// console.log(name);             
                        
                           //Using Map
// let map = new Map();
// map.set('k1', 'Aung Aung');
// map.set('k2', 'Mg Mg');
// map.set('k3','Soe Soe');
// console.log(map.get('k2'))        //map.size

// for (const [k,v] of map) {
//     console.log(`key ${k} and value ${v}`)            //for of loop
// }

// for(let k of map.keys()){
//     console.log(`key ${k}`)
// }
// for (const v of map.values()) {
//     console.log(`value is ${v}`)
// }
// let ary = Array.from(map.values())                    //map to array change
// console.log(ary)

                             //Using Set
// let tap = new Set(['Mg Mg',20,()=>console.log('hell')]);
// tap.add('Mg Mg');
// tap.add('Mg Aung');
// tap.add(23);
// tap.add(()=>{console.log('bar bar')})                             
// console.log(tap.has('Mg Mg'))               //has shi ma shi may tr
// tap.delete("Mg Aung")                        //delete lope
// console.log(tap)
// for(i of tap){
//     console.log(i)
// }


let ball = document.querySelector('.ball');
// let left = 0;
// setInterval(() => {
//     left += 1
//     if(left > 790) left = 0
//     ball.style.left = `${left}px`
// }, 10);
          //or
let left = 0;
let direction = 'right';
function move(){
    if(direction === 'right'){
        left += 1
        if(left > 790) direction = 'left'
        }else{ left -=1
        if(left < 1) direction = 'right'
        }
        ball.style.left = `${left}px`
}
let interval = setInterval(move, 10); 

function start(){
    return interval = setInterval(move, 10)
}        
function stop(){
    clearInterval(interval)
}