////////////////////////////////////////////////////////////////////////Heart//////////////////////////////////////////////////////////////////
const heart = document.querySelector(".heart");
const animationHeart = document.querySelector(".animation-heart");

let storage = [];

heart.addEventListener("click", () => {
  animationHeart.classList.add("animation");
  heart.classList.add("fill-color");
});

animationHeart.addEventListener("click", () => {
  animationHeart.classList.remove("animation");
  heart.classList.remove("fill-color");
});

const heartd = document.querySelector(".heartd");
const animationHeartd = document.querySelector(".animation-heartd");

heartd.addEventListener("click", () => {
  animationHeartd.classList.add("animationd");
  heartd.classList.add("fill-colord");
});

animationHeartd.addEventListener("click", () => {
  animationHeartd.classList.remove("animationd");
  heartd.classList.remove("fill-colord");
});

const heartt = document.querySelector(".heartt");
const animationHeartt = document.querySelector(".animation-heartt");

heartt.addEventListener("click", () => {
  animationHeartt.classList.add("animationt");
  heartd.classList.add("fill-colort");
});

animationHeartt.addEventListener("click", () => {
  animationHeartt.classList.remove("animationt");
  heartt.classList.remove("fill-colort");
});
////////////////////////////////////////////////////////////////////////Heart//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Favoris//////////////////////////////////////////////////////////////////
function favoris() {}
////////////////////////////////////////////////////////////////////////Favoris//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////+&&-//////////////////////////////////////////////////////////////////
let adda = document.getElementById("incrementa");
let inta = document.getElementById("numbera");
let quantity1 = document.getElementById("quantity1");
let totale1 = document.getElementById("totale1");
let integera = 0;
let removea = document.getElementById("decrementa");

let add2 = document.getElementById("increment2");
let int2 = document.getElementById("number2");
let quantity2 = document.getElementById("quantity2");
let totale2 = document.getElementById("totale2");
let integer2 = 0;
let remove2 = document.getElementById("decrement2");

let add3 = document.getElementById("increment3");
let int3 = document.getElementById("number3");
let quantity3 = document.getElementById("quantity3");
let totale3 = document.getElementById("totale3");
let integer3 = 0;
let remove3 = document.getElementById("decrement3");
let mimi = document.getElementById("mimi");

var cart = document.getElementById("cart");
var cartopen = document.getElementById("cart-open");
var h1cart = document.getElementById("h1-cart");
var topofthepage = document.getElementById("topOfThePage");
var h1favoris = document.getElementById("h1-favoris");
var favorisopen = document.getElementById("favoris-open");

cart.style.display = "none";
cartopen.style.marginTop = "-18px";
h1cart.style.display = "block";
h1cart.style.marginTop = "-4px";
h1cart.style.marginLeft = "40px";

var cartsacados = document.getElementById("cart-sacados");
var cartcasquette = document.getElementById("cart-casquette");
var cartcapuche = document.getElementById("cart-capuche");
var totale = document.getElementById("totale");
var shoppingcart1 = document.getElementById("shpping-cart1");
var shoppingcart2 = document.getElementById("shpping-cart2");
var shoppingcart3 = document.getElementById("shpping-cart3");

totale.style.display = "none";
cartsacados.style.display = "none";
cartcasquette.style.display = "none";
cartcapuche.style.display = "none";

adda.addEventListener("click", () => {
  integera += 1;
  if (integera > 10) {
    integera -= 1;
  }
  inta.innerHTML = integera;
  quantity1.innerHTML = integera;
  totale1.innerHTML = integera * 50 + "$";
  tot1 = integera * 50;
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
});
removea.addEventListener("click", () => {
  integera -= 1;
  if (integera < 0) {
    integera += 1;
  }
  inta.innerHTML = integera;
  quantity1.innerHTML = integera;
  totale1.innerHTML = integera * 50 + "$";
  tot1 = integera * 50;
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
});
add2.addEventListener("click", () => {
  integer2 += 1;
  if (integer2 > 10) {
    integer2 -= 1;
  }
  int2.innerHTML = integer2;
  quantity2.innerHTML = integer2;
  totale2.innerHTML = integer2 * 25 + "$";
  tot2 = integer2 * 25;
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
});

remove2.addEventListener("click", () => {
  integer2 -= 1;
  if (integer2 < 0) {
    integer2 += 1;
  }
  int2.innerHTML = integer2;
  quantity2.innerHTML = integer2;
  tot2 = integer2 * 25;
  totale2.innerHTML = tot2 + "$";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
});

add3.addEventListener("click", () => {
  integer3 += 1;
  if (integer3 > 10) {
    integer3 -= 1;
  }
  int3.innerHTML = integer3;
  quantity3.innerHTML = integer3;
  totale3.innerHTML = integer3 * 60 + "$";
  tot3 = integer3 * 60;
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
});

remove3.addEventListener("click", () => {
  integer3 -= 1;
  if (integer3 < 0) {
    integer3 += 1;
  }
  int3.innerHTML = integer3;
  quantity3.innerHTML = integer3;
  totale3.innerHTML = integer3 * 60 + "$";
  tot3 = integer3 * 60;
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
});

////////////////////////////////////////////////////////////////////////+&&-//////////////////////////////////////////////////////////////////

function Cart() {
  if (cart.style.display === "none") {
    cart.style.display = "flex";
    cartopen.style.marginTop = "500px";
    topofthepage.style.display = "none";
    h1favoris.style.display = "none";
    favorisopen.style.left = "1200px";
    h1cart.style.marginLeft = "500px";
    h1cart.style.marginTop = "-50px";
  } else {
    cart.style.display = "none";
    cartopen.style.marginTop = "-18px";
    h1cart.style.display = "block";
    h1favoris.style.display = "block";
    h1cart.style.marginTop = "-4px";
    h1cart.style.marginLeft = "40px";
    favorisopen.style.left = "1165px";
    topofthepage.style.display = "block";
  }
}

function cart1add() {
  if (cartsacados.style.display === "flex") {
    alert("product already in cart");
  }
  cartsacados.style.display = "flex";
  totale.style.display = "flex";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
}
function cart2add() {
  if (cartcasquette.style.display === "flex") {
    alert("product already in cart");
  }
  cartcasquette.style.display = "flex";
  totale.style.display = "flex";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
}
function cart3add() {
  if (cartcapuche.style.display === "flex") {
    alert("product already in cart");
  }
  cartcapuche.style.display = "flex";
  totale.style.display = "flex";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
}

function cart1remove() {
  cartsacados.style.display = "none";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
  if (
    cartcapuche.style.display === "none" &&
    cartcasquette.style.display === "none"
  ) {
    totale.style.display = "none";
  }
}
function cart2remove() {
  cartcasquette.style.display = "none";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
  if (
    cartcapuche.style.display === "none" &&
    cartsacados.style.display === "none"
  ) {
    totale.style.display = "none";
  }
}
function cart3remove() {
  cartcapuche.style.display = "none";
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 0 + integer2 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 0 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + integer2 * 25 + integer3 * 0 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display != "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = integera * 50 + 0 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display != "none" &&
    cartcapuche.style.display === "none"
  ) {
    mimi.innerHTML = 0 * 50 + integer2 * 25 + 0 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none" &&
    cartcapuche.style.display != "none"
  ) {
    mimi.innerHTML = 0 * 50 + 0 * 25 + integer3 * 60 + "$";
  }
  if (
    cartsacados.style.display === "none" &&
    cartcasquette.style.display === "none"
  ) {
    totale.style.display = "none";
  }
}

function buy() {
  if (integer2===0 && integer3===0 && integera===0) {
    alert("empty cart");
  } else {
    alert("purchase validated");
    setTimeout("location.reload(true);", 500);
  }
}
