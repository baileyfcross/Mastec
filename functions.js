
/*
  A Majority of these functions are just test functions for the api call.

  I wanted to leave them in the code in order to show what I tried and how close I might have been to solving the problem.
 */

/*
  This section is for filling in the html once I get the data from the get requests
*/

function computeRecipes(name){

}
 // This is an example of a function that I would use once I got the data from the GET request
 function populateFields(name,resData,pantData) {

     //Recipes JSON data
     const resObj = JSON.parse(resData);

     //Pantry JSON data
     const pantObj = JSON.parse(pantData);


     var recipes = resObj.recipes;
     var ingredients = resObj.ingredients;
     var pantry = pantObj.pantry;

     for (var i = 0; i < recipes.length; i++) {
       for (var j = 0; j < ingredients.length; j++) {
         // Subtract the ingredident requirements from the pantry and keep doing that until one of the
         // ingredident requirements can't be met.
       }
     }
     $(`#${name}`).html(function(){

     });
 }

// This function uses jquery ajax call.
// I tried the beforeSend function in order to send a preflight request because this function would always
// Send as an OPTIONS request
function submitButton(name){
  var data = {};
  $(document).ready(() => {
    $.ajax({
       url : `https://dev.mastecat.net/test/cooking/recipes/${name}`,
       method : 'GET',
       data: data,
       headers: {
         'Authorization': 'Basic ' + btoa('BCross:xxYn12~~!1'),
       },
       success : function(result){
         populateFields(name,data)
       },
       error : function(result, statut, error){
         console.log(error);
         console.log(statut);
         console.log(result);
       }
    });
  });
}

// This function is the main for putting the data in the html and calling the get and post functions
function putDataInHTML(){
  var nameArray = ['alex','victor','brian','mark','leigh','steve'];
  for (var i = 0; i < nameArray.length; i++) {
    submitButton(nameArray[i]);
  }
}


/* EVERYTHING UNDER THIS IS JUST EXAMPLES OF WHAT I TRIED */
// This is the function that was suggested by Shane. It didn't end up working (probably because I'm not using nodejs)
async function suggestion(){
  let resp = await fetch('https://dev.mastecat.net/test/health', {
    method: 'get',
    headers: {
        'Authorization': 'Basic ' + btoa('BCross:xxYn12~~!1'),
    },
  });

  const body = await resp.text();

  console.log(body);

}

// This was my attempt at deleting my progress and retrying from the start
function basic(){
  $.ajax({
  type: "GET",
  url: "https://dev.mastecat.net/test/cooking/recipes/Alex",
  dataType: 'jsonp',
  headers: {
    "Authorization": "Basic QkNyb3NzOnh4WW4xMn5+ITE="
  },
  success: function (result){
      console.log(result)
  }
  });
}


// This is another way of getting an xml request across js.
function xmlClassic() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function(e) {
  var response = e.target.responseText;
  console.log(response);
  });
  xhr.addEventListener('error', function(e) {
  console.error('Request error with status', e.target.status);
  });
  xhr.open('GET', 'https://dev.mastecat.net/test/cooking/recipes/Alex');
  xhr.setRequestHeader('Authorization','Basic QkNyb3NzOnh4WW4xMn5+ITE=');
  xhr.send();

}

// These next two functions are one of my first attempts at using more headers in an options call
function reworkAPI(){
  $(document).ready(() => {
    var createRequestObject = new Object();
    $.ajax({
       url : 'https://dev.mastecat.net/test/cooking/recipes/Alex',
       method : 'GET',
       beforeSend: function(xhr) {
         xhr.setRequestHeader("Authorization",'Basic QkNyb3NzOnh4WW4xMn5+ITE=');
       },
       dataType: "JSONP",
       data: "json=" + escape(JSON.stringify(createRequestObject)),
       success : function(result){
         console.log("Successful AJAX Call")
       },
       error : function(result, statut, error){
         console.log("Unsuccessful AJAX Call")
         console.log(error);
       }
    });
  });
}


function reworkAPI2(){
  $(document).ready(() => {
    var data;
    $.ajax({
       url : 'https://dev.mastecat.net/test/cooking/recipes/Alex',
       xhrFields: {
        withCredentials: true
      },
       beforeSend: function (xhr) {
         xhr.setRequestHeader("Access-Control-Request-Method", "GET");
         xhr.setRequestHeader("Access-Control-Request-Headers", "Authorization");
         //xhr.setRequestHeader('Content-Type', 'application/xml');
         //xhr.setRequestHeader("Authorization", "Basic QkNyb3NzOnh4WW4xMn5+ITE=");
       },
       headers: function (xh) {
         xh.setRequestHeader("Authorization", "Basic QkNyb3NzOnh4WW4xMn5+ITE=");
       },
       crossDomain: true,
       success : function(result){
         console.log("Successful AJAX Call")
       },
       error : function(result, statut, error){
         console.log("Unsuccessful AJAX Call")
         console.log(error);
       }
    });
  });
}


// This was my attempt at using promises in an ansync function
// While this doesn't return any errors, it also doesn't return any JSON
function fetchMethod() {
  console.log("Executed before get request")
  var myBody = '';

  const userAction = async () => {
  const response = await fetch('https://dev.mastecat.net/test/cooking/pantry/Alex', {
      method: 'GET',
      body: myBody,
      headers: {
        "Authentication": "Basic QkNyb3NzOnh4WW4xMn5+ITE="
    },
    mode: 'no-cors'
  });
  const myJson = await response.json();
  console.log(myJson);
  console.log("Executed After")
  }
}


function oldXML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           alert(this.responseText);
       }
  };

  xhttp.open("GET", "https://dev.mastecat.net/test/cooking/pantry/Alex", true);
  xhttp.setRequestHeader("Authentication", "Basic QkNyb3NzOnh4WW4xMn5+ITE=");
  console.log(xhttp.getAllResponseHeaders())
  xhttp.send();
}

// This was my attempt at using jquery's built in get function
function simpleGet()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://dev.mastecat.net/test/cooking/pantry/Alex', true );
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
}

function getMethod() {
  $.get('https://dev.mastecat.net/test/cooking/pantry/Alex', function(data,status){
    console.log(`${data}`)
  })
}

// My attempt at using the getJSON function in jquery
function getJ(){
  $.getJSON('https://dev.mastecat.net/test/cooking/recipes/Alex',function(result){
    console.log(result);
  });
}

// With Credentials parameter
function wCred() {
  $.ajax({
    xhrFields: {
        withCredentials: true
    },
    type: "GET",
    url: "https://dev.mastecat.net/test/cooking/recipes/Alex",
    crossorigin: 'anonymous'
  }).done(function (data) {
    console.log(data);
  });
}
