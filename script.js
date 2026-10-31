// Set your WhatsApp number here: country code + number, digits only (e.g. 919876543210)
var PHONE = "919887674410";
var P = [
  ["Turmeric powder", "Ground", "Deep colour, earthy and warm.", "turmeric(10).jpg"],
  ["Red chilli powder", "Ground", "Bright heat for everyday cooking.", "Spicy Red Chili Flakes in Rustic Kitchen Setting.jpg"],
  ["Coriander powder", "Ground", "Fresh, citrusy, a base for curries.", "Coriander Powder.jpg"],
  ["Cumin seeds", "Whole", "Aromatic seeds for tempering.", "Cumin Seeds (Zeera).jpg"],
  ["Black pepper", "Whole", "Sharp, bold heat from whole berries.", "black pepper.jpg"],
  ["Green cardamom", "Whole", "Sweet, floral pods for tea and desserts.", "Cardamom Background _ Кардамон.jpg"],
  ["Cloves", "Whole", "Strong and warming. A little goes far.", "clove (11).jpg"],
  ["Garam masala", "Blend", "A balanced blend to finish a dish.", "garam masala.jpg"],
  ["Chaat masala", "Blend", "Tangy blend for fruit, snacks and salads.", "Chaat Masala Recipe.jpg"],
  ["Kitchen King masala", "Blend", "All-purpose blend for sabzi and gravies.", "download (9).jpg"]
];
var nav = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(function (a) { if (a.getAttribute("href") === nav) a.className = "on"; });
function card(p) {
  return '<div class="card spice-card" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.45)), url(\'' + p[3] + '\');">' +
           '<div class="card-content">' +
             '<h3>' + p[0] + '</h3>' +
             '<p>' + p[2] + '</p>' +
             '<span class="tag">' + p[1] + '</span>' +
           '</div>' +
         '</div>';
}
var f = document.getElementById("featured");
if (f) f.innerHTML = [0, 1, 3, 7].map(function (i) { return card(P[i]); }).join("");
var g = document.getElementById("grid");
if (g) {
  var show = function (t) {
    g.innerHTML = P.filter(function (p) { return t === "All" || p[1] === t; }).map(card).join("");
    document.querySelectorAll(".filters button").forEach(function (b) { b.className = b.textContent === t ? "on" : ""; });
  };
  document.querySelectorAll(".filters button").forEach(function (b) { b.onclick = function () { show(b.textContent); }; });
  show("All");
}
var s = document.getElementById("send");
if (s) s.onclick = function () {
  var v = function (id) { return document.getElementById(id).value.trim() || "-"; };
  var m = "Hello, I want to order spices.\nName: " + v("name") + "\nSpice: " + v("spice") + "\nQuantity: " + v("qty") + "\nNote: " + v("note");
  window.open("https://wa.me/" + (/^\d{10,15}$/.test(PHONE) ? PHONE : "") + "?text=" + encodeURIComponent(m), "_blank", "noopener");
};
document.querySelectorAll(".yr").forEach(function (e) { e.textContent = new Date().getFullYear(); });


