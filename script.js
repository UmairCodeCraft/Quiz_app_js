
    //  var input_tagsign()=;
     const Input_TagSign=(input)=>{
     return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
     }
const quiz=[
    {
        question:"1) HTML stands for -",
        a:"HighText Machine Language",
        b:"HyperText and links Markup Language",
        c:"HyperText Markup Language",
        d:"None of these",
        ans:"c",
    },
    {
        question:"2) The correct sequence of HTML tags for starting a webpage is -",
        a:"Head, Title, HTML, body",
        b:"HTML, Body, Title, Head",
        c:"HTML, Head, Title, Body",
        d:"HTML, Title,Head, Body",
        ans:"c"
    },
    {
        question:"3) Which of the following element is responsible for making the text bold in HTML?",
        a:Input_TagSign("<pre>"),
        b:Input_TagSign('<a>'),
        c:Input_TagSign('<b>'),
        d:Input_TagSign('<br>'),
        ans:"c",
    },
    {
        question:"4) Which of the following tag is used for inserting the largest heading in HTML?",
        a:Input_TagSign("<h3>"),
        b:Input_TagSign("<h1>"),
        c:Input_TagSign("<h5>"),
        d:Input_TagSign("<h6>"),
        ans:"b",
    },
    {
        question:"5) Which of the following tag is used to insert a line-break in HTML?",
        a:Input_TagSign("<br>"),
        b:Input_TagSign("<a>"),
        c:Input_TagSign("<pre>"),
        d:Input_TagSign("<b>"),
        ans:"a",
    },
    {
        question:"6) How to create an unordered list (a list with the list items in bullets) in HTML?",
        a:Input_TagSign("<ul>"),
        b:Input_TagSign("<ol>"),
        c:Input_TagSign("<li>"),
        d:Input_TagSign("<i>"),
        ans:"a",},
    {
        question:"7) Which character is used to represent the closing of a tag in HTML?",
        a:"/",
        b:"!",
        c:"|",
        d:".",
        ans:"a",
    },
    {
        question:"8) How to create a hyperlink in HTML?",
        a:Input_TagSign('<a href = "www.javatpoint.com"> javaTpoint.com </a>'),
        b:Input_TagSign('< url = "www.javatpoint.com"> javaTpoint.com </a>'),
        c:Input_TagSign('< link = "www.javatpoint.com"> javaTpoint.com </a>'),
        d:Input_TagSign('<a> www.javatpoint.com"> javaTpoint.com </a>'),
        ans:"a"
    },
    {
        question:"9) How to create an ordered list (a list with the list items in numbers) in HTML?",
        a:Input_TagSign("<ul>"),
        b:Input_TagSign("<ol>"),
        c:Input_TagSign("<li>"),
        d:Input_TagSign("<i>"),
        ans:"b"
    },
     {
        question:"10) Which of the following element is responsible for making the text italic in HTML?",
        a:Input_TagSign("<i>"),
        b:Input_TagSign("<italic>"),
        c:Input_TagSign("<it>"),
        d:Input_TagSign("<pre>"),
        ans:"a",
    },
    //  {
    //     question:"11) How to insert an image in HTML?",
    //     a:Input_TagSign('<img href = "jtp.png" />'),
    //     b:Input_TagSign('<img src = "jtp.png" />'),
    //     c:Input_TagSign('<img url = "jtp.png" />'),
    //     d:Input_TagSign('<img link = "jtp.png" />'),
    //     ans:"b",
    // },
    //  {
    //     question:"12) How to add a background color in HTML?",
    //     a:Input_TagSign('<marquee bg color: "red">'),
    //     b:Input_TagSign('<marquee bg-color= "red">'),
    //     c:Input_TagSign('<marquee bgcolor= "red">'),
    //     d:Input_TagSign('<marquee color= "red">'),
    //     ans:"c",
    // },
    //  {
    //     // .input_tagsign(/</g, "&lt;").input_tagsign(/>/g, "&gt;")
    //     question:"13) <input> is -".replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    //     a:"a format tag.",
    //     b:"an empty tag.",
    //     c:"All of the above",
    //     d:"None of the above",
    //     ans:"b",
    // },
    //  {
    //     question:"14) Which of the following tag is used to make the underlined text?",
    //     a:Input_TagSign("<i>"),
    //     b:Input_TagSign("<ul>"),
    //     c:Input_TagSign("<u>"),
    //     d:Input_TagSign("<pre>"),
    //     ans:"c",
    // },
    //  {
    //     question:"15) How to create a checkbox in HTML?",
    //     a:Input_TagSign('<input type = "checkbox">'),
    //     b:Input_TagSign('<input type = "button">'),
    //     c:Input_TagSign('<checkbox>'),
    //     d:Input_TagSign('<input type = "check">'),
    //     ans:"a",
    // },
    //  {
    //     question:"16) Which of the following tag is used to define options in a drop-down selection list?",
    //     a:Input_TagSign("<select>"),
    //     b:Input_TagSign("<list>"),
    //     c:Input_TagSign("<dropdown>"),
    //     d:Input_TagSign("<option>"),
    //     ans:"d",
    // }, {
    //     question:"17) HTML tags are enclosed in-",
    //     a:"# and #",
    //     b:"{ and }",
    //     c:"! and ?",
    //     d:Input_TagSign("< and >"),
    //     ans:"d",
    // },
    // {
    //     question:"18) Which HTML tag do we use to display text along with a scrolling effect?",
    //     a:Input_TagSign("<div>"),
    //     b:Input_TagSign("<scroll>"),
    //     c:Input_TagSign("<marquee>"),
    //     d:" None of the above",
    //     ans:"c"
    // },
    // {
    //     question:"19) In HTML, we use the"+Input_TagSign("<hr>")+" tag for ___________",
    //     a:"horizontal ruler",
    //     b:"new line",
    //     c:"new paragraph",
    //     d:"vertical ruler",
    //     ans:"a"
    // },
    // {
    //     question:"20) What is the correct way of sending mail in HTML?",
    //     a:Input_TagSign("<mail ab@b</mail>"),
    //     b:Input_TagSign('<a href = "ab@b">'),
    //     c:Input_TagSign('<a href = "mailto: ab@b">'),
    //     d:"None of the above",
    //     ans:"c"
    // },
    //  {
    //     question:"21) In HTML, the tags are __________.",
    //     a:"in upper case",
    //     b:"case-sensitive",
    //     c:"in lowercase",
    //     d:"not case sensitive",
    //     ans:"d"
    // },
    //  {
    //     question:"22) Which tag is used in HTML5 for the initialization of the document type?",
    //     a:Input_TagSign("<Doctype HTML>"),
    //     b:Input_TagSign("<!DOCTYPE html>"),
    //     c:Input_TagSign("<Doctype>"),
    //     d:Input_TagSign("<\Doctype html>"),
    //     ans:"b"
    // },
    // {
    //     question:"23) What is the correct way in which we can start an ordered list that has the numeric value count of 5?",
    //     a:Input_TagSign('<ol type = "1" start = "5">'),
    //     b:Input_TagSign('<ol type = "1" intial = "5">'),
    //     c:Input_TagSign('<ol type = "1" begin = "5">'),
    //     d:Input_TagSign('<ol type = "1" num = "5">'),
    //     ans:"a"
    // },
    // {
    //     question:"24) Which one is the HTML document’s root tag?",
    //     a:Input_TagSign("<head>"),
    //     b:Input_TagSign("<body>"),
    //     c:Input_TagSign("<html>"),
    //     d:Input_TagSign("<title>"),
    //     ans:"c"
    // },
    // {
    //     question:"25) Which HTML tag do we use for displaying the power in the expression, (x²-y²)?",
    //     a:Input_TagSign("<p>"),
    //     b:Input_TagSign("<sup>"),
    //     c:Input_TagSign("<sub>"),
    //     d:"None of the above",
    //     ans:"b"
    // },
    //  {
    //     question:"26) In HTML, the correct way of commenting out something would be using:",
    //     a:"## a #",
    //     b:Input_TagSign("<!-- and -->"),
    //     c:Input_TagSign("<!/ and -->"),
    //     d:Input_TagSign("<!- and -!>"),
    //     ans:"b"
    // },
    //  {
    //     question:"27) How does the "+Input_TagSign("<bdo>")+" element work?",
    //     a:"changes direction of the ltr text",
    //     b:"override the direction of the rtl text",
    //     c:"stops writing in current direction of text",
    //     d:"override the text direction",
    //     ans:"d"
    // }, {
    //     question:"28) What attribute do we use for data binding?",
    //     a:"datasrc",
    //     b:"mayscript",
    //     c:"name",
    //     d:"dataflt",
    //     ans:"a"
    // }, {
    //     question:"29) The non-ASCII characters would be replaced with ________ by the process of URL encoding.",
    //     a:"+",
    //     b:"&",
    //     c:"%",
    //     d:"*",
    //     ans:"c"
    // }, {
    //     question:"30) Which of these entities is not defined in the XML?",
    //     a:"apos",
    //     b:"quot",
    //     c:"gt",
    //     d:"copy",
    //     ans:"d"
    // },
    // {
    //     question:"<h1>Js question:</h1><br> 31)  Javascript is an _______ language?",
    //     a:"Object-Oriented Language",
    //     b:"Object Based",
    //     c:"Procedural ",
    //     d:"None of the above",
    //     ans:"a",
    // },
    // {
    //    question:"32) Which of the following keywords is used to define a variable in Javascript?", 
    //     a:"Var",
    //     b:"Let",
    //     c:"Both A and B",
    //     d:"None of the above",
    //     ans:"c",
    // },
    // {
    //    question:"33) Which of the following methods is used to access HTML elements using Javascript?", 
    //     a:"document.getElementById('')",
    //     b:"document.getElementsByClassName('')",
    //     c:"Both A and B",
    //     d:"None of these above",
    //     ans:"c",
    // },
    // {
    //    question:"34) Upon encountering empty statements, what does the Javascript Interpreter do?", 
    //     a:"Throws an error",
    //     b:"Ignores the statement",
    //     c:"Gives a warning",
    //     d:"None of these above",
    //     ans:"b",
    // },
    // {
    //    question:"35) How can a datatype be declared to be a constant type?", 
    //     a:"const",
    //     b:"Var",
    //     c:"Let",
    //     d:"constant",
    //     ans:"a",
    // },
    // {
    //    question:"36) What will be the output of the following code snippet?"+Input_TagSign('<script type="text/javascript"> a = 5 + "9"; document.write(a); </script>'), 
    //     a:"Complication Error",
    //     b:14,
    //     c:"Runtime error",
    //     d:59,
    //     ans:"d",
    // },
    // {
    //    question:"37) What will be the output of the following code snippet?"+Input_TagSign('<script type="text/javascript" language="javascript">var a = "Scaler"; var result = a.substring(2, 4); document.write(result); </script>'), 
    //     a:"al",
    //     b:"ale",
    //     c:"cal",
    //     d:"cale",
    //     ans:"a",
    // },
    // {
    //    question:"38) What will be the output of the following code snippet?"+Input_TagSign('<script type="text/javascript" language="javascript">var a = 12; var b=8; var result = evel("a+b"); document.write(result); </script>'), 
    //     a:20,
    //     b:"x+y",
    //     c:128,
    //     d:"None of these above",
    //     ans:"a",
    // },
    // {
    //    question:"39) When the switch statement matches the expression with the given labels, how is the comparison done?", 
    //     a:"Both the datatype and the result of Expression are compared",
    //     b:"Only the datatype of Expression are compared ",
    //     c:"Only the value of Expression are compared",
    //     d:"None of these above",
    //     ans:"a",
    // },
    // {
    //    question:"40) What keyword is used to check whether a given property is valid or not?", 
    //     a:"exist",
    //     b:"in",
    //     c:"is in",
    //     d:"lies",
    //     ans:"b",
    // },
    // {
    //  question:"40) What is the use of the"+Input_TagSign("<noscript>")+" tag in Javascript?", 
    //     a:"The content are displayed by non-js based browsers",
    //     b:"Clears all cookies and cache",
    //     c:"Both A and B",
    //     d:"None of these above",
    //     ans:"a",
    // },
]
let question_section=document.querySelector('.question');
let mcqs_section=document.querySelector('.mcqs');
let Question=document.querySelector('.question');
let mcqs1=document.querySelector('#a1');
let mcqs2=document.querySelector('#b1');
let mcqs3=document.querySelector('#c1');
let mcqs4=document.querySelector('#d1');
let select_option=document.querySelectorAll('.select-btn');
let sub_button=document.querySelector('.sb-btn');
let Reload_btn=document.querySelector("#result");
let Number1=document.querySelector("#nbr");
var index=0;
var nbr=1;
let sum=0;
let answer;
// console.log(select_option.id);
var question_length=0;

const quiz_app=()=>{
// Number1.innerHTML=nbr+")";
// console.log(Number1.innerHTML);
let question_list=quiz[index];
Question.innerHTML=question_list.question;
mcqs1.innerHTML=question_list.a;
mcqs2.innerHTML=question_list.b;
mcqs3.innerHTML=question_list.c;
mcqs4.innerHTML=question_list.d;
}
    
quiz_app();
const check_Option=()=>{
   select_option.forEach((value)=>{
     if(value.checked){
         
        answer=value.id;
        
     }
   });
       return answer;
}
const unchecked=()=>{
    select_option.forEach((value)=>{
        return value.checked=false;
    });
}
sub_button.addEventListener('click',()=>{
    
check_Option();
// console.log(answer);
// console.log(quiz[index].c);
if(answer==quiz[index].ans){
    answer=0;
sum = sum+1;
// console.log(sum);
}
unchecked();

index++;
question_length++;
if(question_length<quiz.length){
    quiz_app();
}
else{
  let avg=Math.round((sum/question_length)*100);
  let per_color=document.getElementById('out_id');
  let number_percentage=document.querySelector('.percentage_number');
  let total_number=document.querySelector('.marks');
  total_number.innerHTML="Obtain Marks: "+sum+"/"+question_length;
  number_percentage.textContent=avg+"%";
  Reload_btn.classList.add('result');
  
//   Reload_btn.innerHTML=`<h2>Obtain Marks: ${sum} / ${quiz.length}</h2>
//   <h2>Average:${avg}%</h2>
//   <button class="sb-btn" >Again</button>`
  
  if(avg>=80){
  per_color.style.background=`conic-gradient(rgb(53, 224, 53) ${avg*3.6}deg,aliceblue 0deg)`

  
  }
  else if(avg>=60){
  per_color.style.background=`conic-gradient(rgb(212, 212, 27) ${avg*3.6}deg,aliceblue 0deg)`
  
  }
  else if(avg>=40){
  per_color.style.background=`conic-gradient(blue ${avg*3.6}deg,aliceblue 0deg)`
  
  }
  else if(avg<40){
  per_color.style.background=`conic-gradient(red ${avg*3.6}deg,aliceblue 0deg)`

  }
  mcqs_section.style.display='none';
  question_section.style.display='none';
//   if(sum>90){
//     Reload_btn.innerHTML=`<h3>Grade : A+</h3>`
//     // grade.innerHTML="A+";
//   }else if(sum>75){
//     Reload_btn.innerHTML=`<h3>Grade : A </h3>`
//     // grade.innerHTML="A+";
//   }
// //   else if(sum>75){
// //     grade.innerHTML="A";
// //   }
//   else if(sum>60){
//     Reload_btn.innerHTML=`<h3>Grade : B</h3>`
//     // grade.innerHTML="B";
//   }else if(sum>50){
//     Reload_btn.innerHTML=`<h3>Grade : C </h3>`
//     // grade.innerHTML="C";
//   }else if(sum>40){
//     Reload_btn.innerHTML=`<h3>Grade : D </h3>`
//     // grade.innerHTML="D";
//   } else if(sum>33){
//     Reload_btn.innerHTML=`<h3>Grade : E </h3>`
//     // grade.innerHTML="E";
//   }
//   else{
//     Reload_btn.innerHTML=`<h3>Grade : Fail </h3>`
//     // grade.innerHTML="Fail";
//   }
}
});
