// Récupération du localStorage
const checkoutItems = JSON.parse(localStorage.getItem('orderIsConfirmed')) || [];

let textZone = document.getElementById('confirmationInfo');

// Création du contenu HTML && intégration du contenu du localStorage
textZone.innerHTML +=
`
<h2> Merci beaucoup pour votre commande !</h2>
<h3 class="recap"> Voici le récapitulatif</h3>
<h3>Identifiant de commande : <br /><span class="importedInfo">${checkoutItems.getOrderId}</span></h3>
<h3>Prix total de la commande : <br /><span class="importedInfo">${checkoutItems.getTotalCost}</span></h3>
<p>Vous recevrez également un email récapitulant votre commande.</p>
<p>Orinoco vous remercie et vous souhaîte une bonne journée.</p>
`;
