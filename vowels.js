function vowelcheck()
{
let s=prompt("Enter a string:");
s=s.toLowerCase();
let c=0;
for(let i=0;i<s.length;i++)
{
    if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u')
        c++;
}
console.log("No of vowels in the string are: ", c);
}
vowelcheck();