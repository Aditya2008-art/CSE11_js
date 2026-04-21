// let promise=new promise((resolve,reject))=> {
// let success=false;
// if(success)
//     resolve("data loaded");
// else
//     reject("Error Occured");
// };
// promise.then(result=> console.log(result))
// .catch(error=>console.log(error))


async function getData()
{
    let response =await
fetch("https://www.youtube.com");
let data=await response.json();
console.log(data);
}
getData();

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));


try{
var x=y+10;
}
catch(error)
{
    console.log(error.message);
}


localStorage.setItem("name","John");
var name1=localStorage.getItem("name");
console.log(name1);
localStorage.removeItem("name");
// localStorage.clear();  clear whole storage
var user={name:"John", age:50};
localStorage.setItem("user",JSON.stringify(user));