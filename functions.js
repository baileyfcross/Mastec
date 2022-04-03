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


function fetchMethod() {
  console.log("Executed before get request")
  var myBody = '';

  const userAction = async () => {
  const response = await fetch('https://dev.mastecat.net/test/cooking/pantry/Alex', {
      method: 'GET',
      body: myBody,
      headers: {
      'Content-Type': 'application/json',
      'username' : 'BCross',
      'password' : 'xxYn12~~!1'
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
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("username", "BCross");
  xhttp.setRequestHeader("password", "xxYn12~~!1");
  console.log(xhttp.getAllResponseHeaders())
  xhttp.send();
}

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

function example(){
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest()

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

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
