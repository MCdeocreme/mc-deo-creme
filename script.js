let qty=1;
const price=9.99;
const qtyEl=document.getElementById("qty");
const count=document.getElementById("cartCount");
const total=document.getElementById("total");
const checkoutQty=document.getElementById("checkoutQty");
const checkoutTotal=document.getElementById("checkoutTotal");
function render(){qtyEl.textContent=qty;count.textContent=qty;total.textContent=(qty*price).toFixed(2).replace(".",",")+" €";checkoutQty.textContent=qty;checkoutTotal.textContent=(qty*price).toFixed(2).replace(".",",")+" €";}
document.getElementById("plus").onclick=()=>{qty++;render()};
document.getElementById("minus").onclick=()=>{if(qty>1){qty--;render()}};
document.getElementById("add").onclick=()=>{document.getElementById("acheter").scrollIntoView({behavior:"smooth"});};
document.getElementById("checkout").onclick=(e)=>{if(e.currentTarget.getAttribute("href")==="#STRIPE_PAYMENT_LINK#"){e.preventDefault();alert("Il reste à connecter ton lien de paiement Stripe pour activer les commandes.");}};
render();
