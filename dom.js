const result= document.getElementById("para");
result.innerHTML="my self";
document.write("hello World");
const x= document.getElementsByClassName("p1");
console.log(x);
x[0].innerHTML="Aashu";
x[1].innerHTML="Chauhan";
const y= document.getElementsByTagName("p");
y[2].innerHTML="I am a student";
y[1].style.color="blue";
y[1].innerText=" my paragraph";
const t= document.querySelector("ul li:nth-child(3)");
t.style.backgroundColor="green";
t.style.color="green";
const t2= document.querySelectorAll("ul li");
for(x in t2)
{
    t2[x].style.backgroundColor="green";
    t2[x].style.color="blue";
    t2[x].style.margin="10px";  
}
