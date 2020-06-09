const cartItems = JSON.parse(localStorage.getItem('teddyCart')) || [];

const buttonDown = document.getElementById('down');

const postUrlAPI = "http://localhost:3000/api/teddies/order";

const totalCartCost = document.getElementById('final_Checkout');

function teddyGet() {   // Fonction principale pour l'affichage du panier

    let title = document.querySelector('#checkout_Title');

    let teddyContainer = document.getElementById('teddy_Container');

    let finalCheckout = 0;

    if(!cartItems.length) { // Si le panier (localStorage) est vide
        // On crée du contenu HTML et on modifie l'affichage de la page
        title.textContent = 'Votre panier est vide, merci de séléctionner un teddy  !';
                document.getElementById('viderPanier').style.display="none";
                document.getElementById('finalPrice').style.display="none";
                document.getElementById('container').style.paddingBottom="0";
                document.getElementById('container').style.minHeight="80vh";
                document.querySelector('#container').style.display="flex";
                document.querySelector('.hiddenOnForm').style.justifySelf="center";
                document.querySelector('.hiddenOnForm').style.margin='auto';

    } else {    // Par contre s'il y a du contenu dans le panier

        title.textContent = 'Votre panier :';

        cartItems.forEach(cartItem => {     // Pour chaque item présent dans le panier
            // On déclare et on calcule le prix total pour chaque item
            let totalPrice = (cartItem.quantity * cartItem.price);

            // Création du contenu HTML du panier
            teddy_Container.innerHTML += `
                <div class="mainContainer">
                <div id="bloc_seven">
                    <div class="teddyImg">
                        <img src="${cartItem.imageURL}" alt="Image de l'ours en peluche ${cartItem.name}"/>
                    </div>
                    <div id="bloc_heigt">
                        <div class="teddyName">
                            <h2 class="teddyNameTitle">
                                ${cartItem.name}
                            </h2>
                        </div>

                        <div class="teddyColor">
                            <p> Couleur : ${cartItem.color} </p>
                        </div>
                        </div>

                        <div class="teddyQuantity">
                            <button
                                type="button"
                                id="up";
                                class="btn-up">
                                <i class="fas fa-angle-up">
                                </i>
                            </button>
                            <p> Quantité : <span class="test">${cartItem.quantity}</span></p>
                            <button
                                type="button"
                                id="down";
                                class="btn-down">
                                <i class="fas fa-angle-down"></i>
                            </button>
                        </div>

                        <div class="teddyPrix">
                            <p class="teddyPrice"> Prix unitaire : ${cartItem.price} € </p>
                        </div>
                    <div class="TeddyTotalPrice">
                        <h3 class="TeddyTotalPrice-Title">Prix total pour cet article</h3>
                        <p><span class="TeddyTotalPrice-Amount">${cartItem.quantity * cartItem.price}</span> €</p>
                    </div>
                </div>
                </div>`;

                // Malheureusement je n'ai pas encore réussi à coder l'incrémentation des quantités du panier
                let buttonsUp = document.querySelectorAll('.btn-up');
                buttonsUp.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Bouton non fonctionnel pour le moment !", "Promis, le développeur y travaille", "error")
                });
             });
             // Donc ça ne fonctionne ni pour + ni pour -
             let buttonsDown = document.querySelectorAll('.btn-down');
                buttonsDown.forEach((button) => {
                    button.addEventListener('click', function() {
                        swal("Bouton non fonctionnel pour le moment !", "Promis, le développeur y travaille", "error")
                });
             });

        });     // récupération des prix totaux de chaque item du panier
                const TeddiesTotalPrice = [...document.getElementsByClassName('TeddyTotalPrice-Amount')];
                // Loop pour chaque prix total dans le panier
                TeddiesTotalPrice.forEach(teddy => {
                    let teddyTotalPrice = parseInt(teddy.innerHTML, 10);
                     // Ceci nous permet de récupérer un "number" au lieu d'un "string"

                    finalCheckout += teddyTotalPrice;
                })

                totalCartCost.innerHTML = finalCheckout + ' €';     // Affichage du prix total du panier
    }
}

/* Petite fonction permettant de vider le panier */
function emptyCart() {
        swal.setActionValue({confirm: false, cancel: true})
        swal({
            title: 'Êtes vous sur ?',
            text: "Vous ne pourrez pas faire machine arrière",
            icon: 'warning',
            buttons: {cancel: true, confirm: "Confirmer"},  // En cliquant sur le bouton "vider le panier" on nous donne 2 options
            dangerMode: true,
        }).then((result) => {
            if (result.false) {     // Si la personne clique sur "annuler"
                swal('Vidage du panier annulé', '', 'success')
        } else {    // Sinon, on vide le localStorage et on recharge la page
                localStorage.clear();
                location.reload();
        }
    })
}

// Fonction qui se déclenche quand on clique sur "confirmer le panier"
function confirmCart() {  // Permet de cacher tout le contenu de la page et d'afficher uniquement le formulaire
    document.getElementById("form").style.display="block";
    document.querySelector(".hiddenOnForm").style.display="none";
    document.querySelector('#container').style.backgroundColor="#f2f2f2";
}

// Fonction qui se déclenche à la fermeture du formulaire
function closeForm() {  // Fait l'inverse de confirmCart()
    document.getElementById("form").style.display="none";
    document.querySelector(".hiddenOnForm").style.display="block";
    document.querySelector('#container').style.backgroundColor="rgb(228, 214, 214)";
  }


let form = document.getElementById('postData'); // Déclaration du formulaire, servira pour la validation

// Fonction qui s'éxécute en cliquant sur "Valider" sur le formulaire
function orderTeddies() {

            let firstName = document.getElementById('firstName').value;
            let lastName = document.getElementById('lastName').value;
            let address = document.getElementById('address').value;
            let city = document.getElementById('city').value;
            let email = document.getElementById('email').value;
            let contact = { firstName, lastName, address, city, email };
            // On récupère tous les inputs du formulaire et on les mets dans un objet "contact"

            // On déclare ensuite notre array products
            const products = [];

            cartItems.forEach(item => { // Pour chaque item présent dans le panier, on ajoute l'id du produit dans l'array products
                products.push(item.id);
            })

            // Déclaration d'une constante pour contacter l'api teddies/order
            const request = new Request(postUrlAPI, {
                method: 'POST',
                body: JSON.stringify({contact, products}),
                // Pour valider la requête on a besoin d'un objet JSON contenant "contact" && "products"
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                })
            });

            // Récupération de la réponse du serveur à la suite de la requête
                fetch(request)
                .then(response => response.json()) // response.json nous donnera l'orderId
                .then( (response) => {
                if (form.checkValidity() === false) {   // On vérifie la validité du formulaire, ici s'il est incomplet ou incorrect
                    swal("Oups ! Quelque chose ne va pas", "Merci de bien vouloir vérifier le formulaire et réessayer", "error");
                } else if (form.checkValidity() ===true) {  // Ici, le formulaire est validé
                    let getOrderId = response.orderId;  // On récupère l'orderId (identifiant de commande)
                    let getTotalCost = totalCartCost.innerHTML; // On récupère le coût total du panier
                    localStorage.clear();   // On vide le localStorage
                    let orderRecap = { getOrderId, getTotalCost };
                    // On crée un objet "orderRecap" contenant l'orderId et le prix du panier
                    localStorage.setItem("orderIsConfirmed", JSON.stringify(orderRecap));
                    // On crée un nouveau localStorage "orderIsConfirmed" et on lui donne les informations de l'objet orderRecap
                    swal("Merci pour votre commande !", "Vous allez être redirigé vers la page de confirmation dans quelques secondes", "success");
                    setTimeout(function() {window.location = 'confirmed-page.html'; }, 3000);
                    // On ajoute une petite fonction setTimeout pour ajouter un délai de 3 secondes entre l'apparition du message swal
                    // Et la redirection de la page vers notre page de confirmation de commande
                }
            })
     }
