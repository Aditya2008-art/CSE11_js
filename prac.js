function calRES(){
 let n = document.getElementById("values").value;
 let f = 1;
 let s=0;
 let en=0;
 let on=0;
 let pn=0;
 for(let i=1;i<=n;i++){
 let nu = parseFloat(prompt("Enter value" + i));
 f = f*nu ;
 s+=nu;
 if(nu%2==0)
en++;
else 
on++;
let c=0;
for(let j=1;j<nu;j++)
{
    if(nu%j==0)
        c++;
}
if(c==1)
    pn++;
 }
 let avg = s / n;
 document.getElementById("result").innerHTML =
 "Sum :" + s + "<br>" +
 "Average " + avg+ "<br>" +
 "Factorial:" + f + "<br>" +
 "Count of Even numbers: " + en + "<br>"+"Count of odd numbers:" + on +"<br>"+"Count of Prime numbers: " +pn;
 }
