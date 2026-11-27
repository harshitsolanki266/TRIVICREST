// Set your WhatsApp number here: country code + number, digits only (e.g. 919876543210)
var PHONE = "919887674410";

// Product catalog array: [Name, Category, Description, ImagePath]
var P = [
  ["Turmeric powder", "Ground", "Deep colour, earthy and warm.", "images/turmeric(10).jpg"],
  ["Red chilli powder", "Ground", "Bright heat for everyday cooking.", "images/Spicy Red Chili Flakes in Rustic Kitchen Setting.jpg"],
  ["Coriander powder", "Ground", "Fresh, citrusy, a base for curries.", "images/Coriander Powder.jpg"],
  ["Cumin seeds", "Whole", "Aromatic seeds for tempering.", "images/Cumin Seeds (Zeera).jpg"],
  ["Black pepper", "Whole", "Sharp, bold heat from whole berries.", "images/black pepper.jpg"],
  ["Green cardamom", "Whole", "Sweet, floral pods for tea and desserts.", "images/Cardamom Background _ Кардамон.jpg"],
  ["Cloves", "Whole", "Strong and warming. A little goes far.", "images/clove (11).jpg"],

  ["Ginger", "Ground", "Warm, zesty spice for curries, teas, and baking.", "images/ginger.png"],
  ["Cinnamon", "Whole", "Sweet, aromatic wood bark for sweet and savory dishes.", "images/cinnamon.png"],
  ["Cassia", "Whole", "Pungent and intense woody bark, ideal for curries.", "images/cassia.png"],
  ["Garlic", "Ground", "Savory, pungent essential base seasoning.", "images/garlic.png"],
  ["Mustard", "Whole", "Nutty, pungent seeds essential for tempering.", "images/mustard.png"],
  ["Nutmeg", "Whole", "Warm, nutty seed with a distinct sweet aroma.", "images/nutmeg.png"],
  ["Mace", "Whole", "Delicate, lace-like aril with a subtle nutmeg flavor.", "images/mace.png"],
  ["All-Spice", "Whole", "Combines notes of cinnamon, nutmeg, and clove.", "images/allspice.png"],
  ["Tamarind", "Whole", "Tangy, sour pulp essential for chutneys and sambar.", "images/tamarind.png"],

  ["Fennel", "Seeds", "Sweet, liquorice-like flavor for digestion and cooking.", "images/fennel.png"],
  ["Fenugreek", "Seeds", "Slightly bitter, aromatic seeds for curries and pickles.", "images/fenugreek.png"],
  ["Aniseed", "Seeds", "Sweet, pungent liquorice aroma for tea and baking.", "images/aniseed.png"],
  ["Bishop's weed (Ajwain)", "Seeds", "Thyme-like intensity, great for digestion and breads.", "images/ajwain.png"],
  ["Caraway", "Seeds", "Earthy, anise-flavored seeds for breads and stews.", "images/caraway.png"],
  ["Dill", "Seeds", "Pungent, tangy flavor for pickles and seafood.", "images/dill.png"],
  ["Star Anise", "Whole", "Beautiful star-shaped pod with deep liquorice flavor.", "images/star-anise.png"],
  ["Poppy Seed", "Seeds", "Nutty, tiny seeds for curries, gravies, and baking.", "images/poppy seed.png"],
  ["Juniper Berry", "Whole", "Piney, peppery berries for savory glazes.", "images/juniper berry.png"],

  ["Curry Leaf", "Herbs", "Aromatic fresh leaves essential for tempering.", "images/curry leaf.png"],
  ["Mint", "Herbs", "Refreshing, cool herb for chutneys and drinks.", "images/mint.png"],
  ["Parsley", "Herbs", "Clean, peppery herbal note for garnishing.", "images/parsley.png"],
  ["Basil", "Herbs", "Sweet, peppery herb for teas and pestos.", "images/basil.png"],
  ["Rosemary", "Herbs", "Pine-like, woody aromatic herb.", "images/rosemary.png"],
  ["Sage", "Herbs", "Earthy, savory herb with subtle pepper notes.", "images/sage.png"],
  ["Thyme", "Herbs", "Earthy, subtle clove-like herbal taste.", "images/thyme.png"],
  ["Oregano", "Herbs", "Pungent, warm herb for sauces and seasoning.", "images/oregano.png"],

  ["Kokam (Kokum)", "Specialty", "Tangy, sour dried fruit rind for cooling drinks and curries.", "images/kokum.png"],
  ["Pomegranate Seed", "Specialty", "Tangy, fruity dried seeds (Anardana) for chaats.", "images/pomegranate_seed.png"],
  ["Vanilla", "Specialty", "Rich, sweet aroma for desserts and baking.", "images/vanilla.png"],
  ["Saffron", "Specialty", "Exquisite, floral spice for rich rice dishes and sweets.", "images/saffron.png"]
];

document.addEventListener("DOMContentLoaded", function () {
  // Mobile burger menu toggle
  var burger = document.querySelector(".burger");
  var navMenu = document.querySelector(".nav-menu");

  if (burger && navMenu) {
    burger.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight current page navigation link
  var nav = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (a) {
    if (a.getAttribute("href") === nav) a.classList.add("on");
  });

  // Generate HTML structure for an individual spice card
  function card(p) {
    var safeImg = encodeURI(p[3]);
    return '<div class="card spice-card" style="background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.45)), url(\'' + safeImg + '\');">' +
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
        b.classList.toggle("on", b.textContent === t);
      });
    };

    document.querySelectorAll(".filters button").forEach(function (b) {
      b.addEventListener("click", function () { show(b.textContent); });
    });

    show("All");
  }

  // WhatsApp quote/order form handler
  var s = document.getElementById("send");
  if (s) {
    s.addEventListener("click", function () {
      var v = function (id) {
        var el = document.getElementById(id);
        return (el && el.value.trim()) ? el.value.trim() : "-";
      };
      var m = "Hello, I want to request a quote / order spices.\n" +
              "Company: " + v("company") + "\n" +
              "Country: " + v("country") + "\n" +
              "Email: " + v("email") + "\n" +
              "Product: " + v("spice") + "\n" +
              "Quantity: " + v("qty") + "\n" +
              "Note: " + v("note");
      window.open("https://wa.me/" + (/^\d{10,15}$/.test(PHONE) ? PHONE : "") + "?text=" + encodeURIComponent(m), "_blank", "noopener");
    });
  }

  // Automatically update copyright year in footers
  document.querySelectorAll(".yr").forEach(function (e) {
    e.textContent = new Date().getFullYear();
  });
});