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

async function test(){ // créer une fonstion asinchrone
response = await fetch("http://localhost:3000/api/teddies"); // la réponse attent  le retour du serveur
data = await response.json() // data est égale à la réponse en json
return data; // la réponse du data
  }

  test().then(function(data){

    const imgOne = document.querySelector('.img_one');
    data.forEach(function(article) {
    imgOne.setAttribute('"src", "${article.imageUrl}"');




});






 //{
//  let imgOne = document.querySelector('.img_one');
//  imgOne.setAttribute("src", "${article.imageUrl}");


//  console.log(imageUrl)

// }

// let h1 = document.queryselector('.h1');
// src.innerHTML = "<img src=${imageUrl}/>";
// {
//  console.log(h1);
// }
});
