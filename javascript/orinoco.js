///  start javascript ///

///--------------------------------- AJAX --------------------------

//const url = 'http://localhost:3000/api/teddies'; /// créer une requète --
//let requete = new XMLHttpRequest(); // créer un objet --
//requete.open('GET', url); // GET ou POST , deuxième param: l'url --
//requete.responseType = 'json'; // nous attendons du json --
//requete.send(); // nous envoyons nottre requete --

// des qu'on reçoit une réponse , cette fonction est éxecuter
//requete.onload = function() { --
//if (requete.readyState === XMLHttpRequest.DONE) { --
//  if (requete.status === 200) { --
    //let reponse = requete.response; // on stock la réponse --

    //for (const imageUrl of reponse){ --
      //console.log(imageUrl); --
      //} --

    // console.log(reponse[1].imageUrl);
     //} --
   //} --
 //} --

///----------------------------- async await ----------------------

async function test(){
response = await fetch("http://localhost:3000/api/teddies");
data = await response.json()
return data;
  }

  test().then(function(data){
for (article of data)
 {
  console.log(article.imageUrl)
 }

})
