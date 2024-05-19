// // XML-HTTP request
// // They are used to interact with the server via api

// // step 1 :
// // create a XHR object

// var request = new XMLHttpRequest();
// // step 2:
// // opening a request
// request.open("GET", "https://restcountries.com/v3.1/all");

// //step 3:
// // kickstart the HTTP opertion
// request.send();

// //step 4:
// // once the data has beed successfully received from the server
// // if the status code of the server is 200
// // then we need to process the data
// // here the json.parse string to array
// request.onload = function () {
//   //here the conversion of string to objects
//   var res = JSON.parse(request.response);
//   console.log(res);
//   for (var i = 0; i < res.length; i++) {
//     console.log(res[i].region);
//   }
//   var casia = res.filter((ele) => ele.region == "Asia");
//   var cpopu = casia.reduce((acc, cv) => acc + cv.population, 0);
//   console.log(cpopu);
// };

// var ele = document.createElement('div');
// ele.innerHTML=`<div class='container'>
// <div class='row'>
// <div class='col'>this a col</div>
// </div>
// </div>
// `

// document.body.append(ele)
function foo() {
  var first_name = document.getElementById("First_name").value;
  var Middle_name = document.getElementById("Middle_name").value;
  var Last_name = document.getElementById("Last_name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(`first name:${first_name},Middle name:${Middle_name},Last name:${Last_name},Email:${email},password:${password}`);
}
