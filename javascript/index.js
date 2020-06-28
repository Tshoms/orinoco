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
const teddyAppend = document.getElementById("mainPage"); // important pour le l'ID du main !!!

async function getTeddies(){ // créer une fonction asinchrone
response = await fetch("http://localhost:3000/api/teddies"); // la réponse attent  le retour du serveur
data = await response.json() // data est égale à la réponse en json
return data; // la réponse du data
  }
  getTeddies().then(function(data){
  data.forEach((teddy) => {
  const { name, _id, colors, price, description, imageUrl } = teddy      // Déclaration de teddy comme objet
  teddyAppend.innerHTML +=

  `<div class="${name}">
                <img src="${imageUrl}" alt="Photo de ${name}" class="teddyPhoto"></img>
                <div class="teddyInfo">
                <h3 class="teddyName">${name}</h3>
                <p id="price">Prix: ${price/100}€</p>
                </div>
                <button onclick='location.href="produit.html?id=${_id}"' type="button" id="btnCustom">Personnaliser mon teddy</button>
            </div>`;     // Inportant !!! récuperer les ID pour la page d'apres.

  //console.log(imageUrl);

  });

});
