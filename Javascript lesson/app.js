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
// let tom = mo.split(" ");                                             //foreach loop
// tom.forEach((co,i) =>{
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
//     console.log(ki.age);                                   //mapping array obj
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

// let num = [23,2,1,3,5,8,7,44];

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
//const VAL = 33              //global /no reassign/redeclearable
// console.log(window.noi)

// let sr = 'I can\'t speak english Well';    //escaping
// str.toUpperCase()
// str.toLowerCase()
// str.lastIndexOf(searchValue)
// str.charAt(index)                             //character at
// str.substring(indexStart, indexEnd)           //(0,3)
// str.slice(beginIndex, endIndex)               //(-4,4)pyat htote p pya
// str.replace('english', 'korea')               //replace the word
// str.includes('speak')                         //pr ma pr check true false pya
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

    
  let main = document.querySelector('.lst');
  let element = document.querySelector('ul.lst li:first-child');
  let tag = element.childNodes[0].getAttribute('alt') 

  console.log(tag)