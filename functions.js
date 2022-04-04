/*
function submitButton(){
  $(document).ready(() => {

    $.ajax({
       url : 'https://dev.mastecat.net/test/cooking/pantry/Alex',
       method : 'GET',
       beforeSend: function (xhr) {
         xhr.setRequestHeader("Authorization", "Basic QkNyb3NzOnh4WW4xMn5+ITE=");
       },
       success : function(result){
         console.log("Successful AJAX Call")
       },
       error : function(result, statut, error){

       }
    });
  });
}
*/
function test() {
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
/*
function simpAPI(){
  $(document).ready(() => {
    var data;
    $.ajax({
       url : 'https://dev.mastecat.net/test/cooking/pantry/Alex',
       method : 'GET',
       beforeSend: function (xhr) {
         xhr.setRequestHeader("authorization", "Basic QkNyb3NzOnh4WW4xMn5+ITE=");
         xhr.setRequestHeader('Content-Type', 'application/xml');
         xhr.setRequestHeader('Access-Control-Request-Method', 'GET');
       },
       dataType: 'json',
       contentType: 'application/json; charset=utf-8',
       data: JSON.stringify(data),
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

*/
function simpAPI2(){

  $(document).ready(() => {
    var data;
    $.ajax({
       url : 'https://dev.mastecat.net/test/cooking/pantry/Alex',
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
/*
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
/*
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

function simpleAJAX(){
  var authorizationToken = 'QkNyb3NzOnh4WW4xMn5+ITE=';
  $(document).ready(() => {
    $.ajax({
				method: 'GET',
				url: 'https://dev.mastecat.net/test/cooking/recipes/Alex',
        crossorigin: 'anonymous',
        beforeSend: function(request) {
          request.setRequestHeader("Authorization", authorizationToken);
        },
        headers:{
          'Access-Control-Allow-Origin': '*',

        },
        contentType: "JSONP",
				success: function(response) {
					var article = $(response).find('article').first().html();
					$('#ResponseContent h2').html('Response Content - from MasTec');
					$('#ResponseArticle div').html(article);
          console.log(article);
				}
			}).fail(function() {
				alert("failed!");
			});
  });
}

function getJ(){
  $.getJSON('https://dev.mastecat.net/test/cooking/recipes/Alex',function(result){
    console.log(result);
  });
}

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


function callOtherDomain() {
  const invocation = new XMLHttpRequest();
  const url = 'https://dev.mastecat.net/test/cooking/recipes/Alex';
    if (invocation) {
      invocation.open('GET', url, true);
      invocation.withCredentials = true;
      invocation.onreadystatechange = function() {
           if (invocation.readyState == 4 && invocation.status == 200) {
               alert(invocation.responseText);
           };
      invocation.send();
    }
  }
}


function example(){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://dev.mastecat.net/test/cooking/recipes/Alex', true)
  request.setRequestHeader("Authentication", "Basic QkNyb3NzOnh4WW4xMn5+ITE=");
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if(request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title)
    })
    } else {
      console.log('error')
    }
  }

  // Send request
  request.send()
}
*/
