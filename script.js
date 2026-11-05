// Set your WhatsApp number here: country code + number, digits only (e.g. 919876543210)
var PHONE = "919887674410";

// Expanded product catalog array
var P = [
  // --- Existing Items ---
  ["Turmeric powder", "Ground", "Deep colour, earthy and warm.", "images/turmeric(10).jpg"],
  ["Red chilli powder", "Ground", "Bright heat for everyday cooking.", "images/Spicy Red Chili Flakes in Rustic Kitchen Setting.jpg"],
  ["Coriander powder", "Ground", "Fresh, citrusy, a base for curries.", "images/Coriander Powder.jpg"],
  ["Cumin seeds", "Whole", "Aromatic seeds for tempering.", "images/Cumin Seeds (Zeera).jpg"],
  ["Black pepper", "Whole", "Sharp, bold heat from whole berries.", "images/black pepper.jpg"],
  ["Green cardamom", "Whole", "Sweet, floral pods for tea and desserts.", "images/Cardamom Background _ Кардамон.jpg"],
  ["Cloves", "Whole", "Strong and warming. A little goes far.", "images/clove (11).jpg"],
  ["Garam masala", "Blend", "A balanced blend to finish a dish.", "images/garam masala.jpg"],
  ["Chaat masala", "Blend", "Tangy blend for fruit, snacks and salads.", "images/Chaat Masala Recipe.jpg"],
  ["Kitchen King masala", "Blend", "All-purpose blend for sabzi and gravies.", "images/download (9).jpg"],

  // --- Whole & Ground Spices ---
  ["Ginger", "Ground", "Warm, zesty spice for curries, teas, and baking.", "images/ginger.png"],
  ["Cinnamon", "Whole", "Sweet, aromatic wood bark for sweet and savory dishes.", "images/cinnamon.png"],
  ["Cassia", "Whole", "Pungent and intense woody bark, ideal for curries.", "images/cassia.png"],
  ["Garlic", "Ground", "Savory, pungent essential base seasoning.", "images/garlic.png"],
  ["Mustard", "Whole", "Nutty, pungent seeds essential for tempering.", "images/mustard.png"],
  ["Nutmeg", "Whole", "Warm, nutty seed with a distinct sweet aroma.", "images/nutmeg.png"],
  ["Mace", "Whole", "Delicate, lace-like aril with a subtle nutmeg flavor.", "images/mace.png"],
  ["All-Spice", "Whole", "Combines notes of cinnamon, nutmeg, and clove.", "images/allspice.png"],
  ["Tamarind", "Whole", "Tangy, sour pulp essential for chutneys and sambar.", "images/Tamarind.png"],

  // --- Seeds & Aromatics ---
  ["Fennel", "Seeds", "Sweet, liquorice-like flavor for digestion and cooking.", "images/fennel.png"],
  ["Fenugreek", "Seeds", "Slightly bitter, aromatic seeds for curries and pickles.", "images/fenugreek.png"],
  ["Celery", "Seeds", "Earthy, concentrated celery flavor for seasoning.", "images/celery.png"],
  ["Aniseed", "Seeds", "Sweet, pungent liquorice aroma for tea and baking.", "images/aniseed.png"],
  ["Bishop's weed (Ajwain)", "Seeds", "Thyme-like intensity, great for digestion and breads.", "images/ajwain.png"],
  ["Caraway", "Seeds", "Earthy, anise-flavored seeds for breads and stews.", "images/caraway.png"],
  ["Dill", "Seeds", "Pungent, tangy flavor for pickles and seafood.", "images/dill.png"],
  ["Star Anise", "Whole", "Beautiful star-shaped pod with deep liquorice flavor.", "images/star anise.png"],
  ["Poppy Seed", "Seeds", "Nutty, tiny seeds for curries, gravies, and baking.", "images/poppy seed.png"],
  ["Juniper Berry", "Whole", "Piney, peppery berries for savory glazes.", "images/juniper berry.png"],

  // --- Herbs & Leaves ---
  ["Curry Leaf", "Herbs", "Aromatic fresh leaves essential for tempering.", "images/curry leaf.png"],
  ["Mint", "Herbs", "Refreshing, cool herb for chutneys and drinks.", "images/mint.png"],
  ["Parsley", "Herbs", "Clean, peppery herbal note for garnishing.", "images/parsley.png"],
  ["Bay leaf", "Herbs", "Subtle herbal aroma for slow-cooked gravies.", "images/bay leaf.png"],
  ["Basil", "Herbs", "Sweet, peppery herb for teas and pestos.", "images/basil.png"],
  ["Rosemary", "Herbs", "Pine-like, woody aromatic herb.", "images/rosemary.png"],
  ["Sage", "Herbs", "Earthy, savory herb with subtle pepper notes.", "images/sage.png"],
  ["Savory", "Herbs", "Peppery, herbal seasoning for soups and stews.", "images/savory.png"],
  ["Thyme", "Herbs", "Earthy, subtle clove-like herbal taste.", "images/thyme.png"],
  ["Oregano", "Herbs", "Pungent, warm herb for sauces and seasoning.", "images/oregano.jpg"],
  ["Marjoram", "Herbs", "Sweet, mild herbal flavor related to oregano.", "images/marjoram.jpg"],
  ["Tarragon", "Herbs", "Anise-like, sweet herbal profile.", "images/tarragon.jpg"],
  ["Hyssop", "Herbs", "Minty, slightly bitter herbal tonic.", "images/hyssop.jpg"],
  ["Lovage", "Herbs", "Intense celery-like flavor for stocks and soups.", "images/lovage.jpg"],
  ["Tejpat", "Herbs", "Indian bay leaf with cinnamon-like aroma.", "images/tejpat.jpg"],

  // --- Roots, Rhizomes & Specialty ---
  ["Sweet Flag", "Specialty", "Bitter, aromatic root used in traditional recipes.", "images/sweet_flag.jpg"],
  ["Greater Galangal", "Roots", "Sharp, citrusy root similar to ginger.", "images/galangal.jpg"],
  ["Horse-radish", "Roots", "Pungent, sharp spicy root.", "images/horseradish.jpg"],
  ["Kokam (Kokum)", "Specialty", "Tangy, sour dried fruit rind for cooling drinks and curries.", "images/kokum.jpg"],
  ["Pomegranate Seed", "Specialty", "Tangy, fruity dried seeds (Anardana) for chaats.", "images/pomegranate_seed.jpg"],
  ["Asafoetida", "Specialty", "Strong savory aroma, essential for digestive tempering (Hing).", "images/asafoetida.jpg"],
  ["Cambodge", "Specialty", "Sour rind used as a souring agent in seafood curries.", "images/cambodge.jpg"],
  ["Caper", "Specialty", "Tangy, salty flower buds for garnishing.", "images/caper.jpg"],
  ["Long Pepper", "Whole", "Complex hot spice with earthy and sweet notes.", "images/long_pepper.jpg"],
  ["Vanilla", "Specialty", "Rich, sweet aroma for desserts and baking.", "images/vanilla.jpg"],
  ["Saffron", "Specialty", "Exquisite, floral spice for rich rice dishes and sweets.", "images/saffron.jpg"]
];

// Highlight current page navigation link
var nav = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach(function (a) { 
  if (a.getAttribute("href") === nav) a.className = "on"; 
});

// Generate HTML structure for an individual spice card
function card(p) {
  return '<div class="card spice-card" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.45)), url(\'' + p[3] + '\');">' +
           '<div class="card-content">' +
             '<h3>' + p[0] + '</h3>' +
             '<p>' + p[2] + '</p>' +
             '<span class="tag">' + p[1] + '</span>' +
           '</div>' +
         '</div>';
}

// Render favorite/featured items on the homepage
var f = document.getElementById("featured");
if (f) {
  f.innerHTML = [0, 1, 3, 7].map(function (i) { return card(P[i]); }).join("");
}

// Render product catalog with dynamic filter buttons
var g = document.getElementById("grid");
if (g) {
  var show = function (t) {
    g.innerHTML = P.filter(function (p) { return t === "All" || p[1] === t; }).map(card).join("");
    document.querySelectorAll(".filters button").forEach(function (b) { 
      b.className = b.textContent === t ? "on" : ""; 
    });
  };
  
  document.querySelectorAll(".filters button").forEach(function (b) { 
    b.onclick = function () { show(b.textContent); }; 
  });
  
  show("All");
}

// WhatsApp order form handler
var s = document.getElementById("send");
if (s) {
  s.onclick = function () {
    var v = function (id) { return document.getElementById(id).value.trim() || "-"; };
    var m = "Hello, I want to order spices.\nName: " + v("name") + "\nSpice: " + v("spice") + "\nQuantity: " + v("qty") + "\nNote: " + v("note");
    window.open("https://wa.me/" + (/^\d{10,15}$/.test(PHONE) ? PHONE : "") + "?text=" + encodeURIComponent(m), "_blank", "noopener");
  };
}

// Automatically update copyright year in footers
document.querySelectorAll(".yr").forEach(function (e) { 
  e.textContent = new Date().getFullYear(); 
});