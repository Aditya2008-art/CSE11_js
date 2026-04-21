// let age;
// let price=10.5;
// let name="John";
// let age_=null;
// let age$=undefined;
// console.log("age");
// console.log("name");
// console.log("price");
// console.log("age_");
// console.log("age$");
// const age=24;
// age=25;

// const product={
//     name:"Parker Jotter Standard CT Ball Pen",price:270, color:'Black'
// }
// console.log(product);



// let ch=prompt("Enter 1 for if else and 2 for ternary operator:");
// if(ch==1){
// let num=prompt("Enter a number: ");
// if(num%5==0)
// {
//     console.log(num, "is a multiple of 5");
// }
// else{
//     console.log(num, "is not a multiple of 5");
// }
// }
// else
// {
//     let num=prompt("Enter a number: ");
//     num%5==0 ? console.log(num, "is a multiple of 5") : console.log(num, "is not a multiple of 5");
// }



// let m=prompt("Enter marks:");
// let grade;
// if(m>=80)
// {
//     grade="A";
// }
//     else if(m>=70)
//     {
//         grade="B";
//     }
// else if(m>=60)
// {
//     grade="C";
// }
//     else if(m>=50)
//     {
//         grade="D";
//     }
// else
//     grade="F";
// console.log("Your Grade is: ",grade);

function str(s)
{
    let c=0;
    s=s.toLowerCase();
    for(let i=0;i<s.length;i++)
    {
        if(s[i]==='a'||s[i]==='e'||s[i]==='i'||s[i]==='o'||s[i]==='u')
            c++;
    }
    return c;
console.log(c);
}

const strc=(s) => {
    let c=0;
    s=s.toLowerCase();
    for(let ch in s)
    {
        if(s[ch]==='a'||s[ch]==='e'||s[ch]==='i'||s[ch]==='o'||s[ch]==='u')
            c++;
    }
    return c;
}