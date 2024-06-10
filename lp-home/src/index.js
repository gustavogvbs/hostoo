class TestimonialUtils {
 constructor() {
  this.testimonialsContainer = document.getElementById(
   "testimonials-container"
  );
  this.testimonialsGradient = document.getElementById("testimonials-gradient");
  this.testimonialsChildren = document.querySelector(
   "#testimonials-container .flex.flex-col.gap-8"
  );
 }

 getHeight() {
  return this.testimonialsChildren.clientHeight;
 }

 toggleVisibilit(e, status) {
  this.testimonialsContainer.style.maxHeight =
   status == "true" ? this.getHeight() + "px" : "756px";

  this.testimonialsContainer.setAttribute(
   "data-view",
   status == "true" ? "visible" : "hidden"
  );
  this.testimonialsGradient.setAttribute(
   "data-status",
   status == "true" ? "hidden" : "visible"
  );

  e.target.setAttribute("data-status", status == "true" ? false : true);
 }
}

const testimonialUtils = new TestimonialUtils();

const viewMoreTestimonials = document.getElementById("view-more-testimonial");

viewMoreTestimonials.addEventListener("click", (e) => {
 testimonialUtils.toggleVisibilit(e, e.target.dataset.status);
});

class ScrollUtils {
 constructor() {
  this.windowYOffset = window.scrollY;
  this.header = document.getElementById("header");

  if (this.windowYOffset > 5) {
   this.scrollDown();
  } else {
   this.scrollUp();
  }
 }
 scrollDown() {
  this.header.setAttribute("data-header", "active");
 }
 scrollUp() {
  this.header.setAttribute("data-header", "disable");
 }
 scroll(i) {
  this.windowYOffset = i;
  if (this.windowYOffset > 5) {
   this.scrollDown();
  } else {
   this.scrollUp();
  }
 }
}

const scrollUtils = new ScrollUtils();

window.addEventListener("scroll", (e) => {
 scrollUtils.scroll(window.scrollY);
});

const headerLinkProduct = document.getElementById("header-link-product");

headerLinkProduct.addEventListener("click", (e) => {
 const status = e.target.dataset.status;
 const menuProductList = document.querySelector(".menu-product-list");

 if (status == "disable") {
  menuProductList.setAttribute("data-product", "active");
  headerLinkProduct.setAttribute("data-status", "active");
 } else {
  menuProductList.setAttribute("data-product", "disable");
  headerLinkProduct.setAttribute("data-status", "disable");
 }
});

const TypeSizes = {
 1: {
  ram: "520 MB",
  cpu: "1 GHz",
  ssd: "15 GB",
 },
 2: {
  ram: "1 GB",
  cpu: "2 GHz",
  ssd: "60 GB",
 },
 3: {
  ram: "2 GB",
  cpu: "4 GHz",
  ssd: "80 GB",
 },
 4: {
  ram: "4 GB",
  cpu: "6 GHz",
  ssd: "120 GB",
 },
 5: {
  ram: "8 GB",
  cpu: "8 GHz",
  ssd: "160 GB",
 },
 6: {
  ram: "16 GB",
  cpu: "12 GHz",
  ssd: "320 GB",
 },
 7: {
  ram: "24 GB",
  cpu: "16 Ghz",
  ssd: "640 GB",
 },
 8: {
  ram: "32 GB",
  cpu: "20 GHz",
  ssd: "1024 GB",
 },
};
const ValuesPlan = {
 1: {
  internacional: [8.9, 44.15],
  nacional: [13.9, 60.9],
 },
 2: {
  internacional: [17.9, 88.59],
  nacional: [23.9, 104.4],
 },
 3: {
  internacional: [31.9, 161.82],
  nacional: [46.9, 208.8],
 },
 4: {
  internacional: [63.9, 323.64],
  nacional: [93.9, 416.4],
 },
 5: {
  internacional: [95.9, 484.46],
  nacional: [140.9, 625.4],
 },
 6: {
  internacional: [191.9, 971.32],
  nacional: [280.9, 1251.6],
 },
 7: {
  internacional: [382.9, 1941.84],
  nacional: [561.6, 2503.6],
 },
 8: {
  internacional: [764.9, 3879.42],
  nacional: [1045.9, 4663.2],
 },
};

const sliderInput = document.getElementById("slider-input");
const sliderBar = document.getElementById("silde-bar-position");

/* sliderInput.addEventListener("change", (e) => {
 const val = e.target.value;

 sliderBar.style.width = `calc(12.5% * ${val - 1} + 9px * ${val})`;
 console.log("ola", sliderBar);

 ChangePlanType("nacional", val);
}); */

const ChangePlanType = (location, size) => {
 const ram = document.getElementById("ram-value");
 const ssd = document.getElementById("ssd-value");
 const cpu = document.getElementById("cpu-value");

 const typesValue = TypeSizes[size];
 const planValue = ValuesPlan[size][location];

 ram.innerText = typesValue.ram;
 ssd.innerText = typesValue.ssd;
 cpu.innerText = typesValue.cpu;
};

const ballSlider = document.getElementById("ball-slider");

ballSlider.addEventListener("click", (e) => {
 console.log(e.timeStamp);
});

const sliderPlan = document.getElementById("slider-plan");

const markPosition = [0, 14.285, 28.57, 42.855, 57.14, 71.425, 85.71, 100];

sliderPlan.addEventListener("click", (e) => setPosition(e));
ballSlider.addEventListener("mousedown", (e) => {
 console.log(e);
});

const setPosition = (e) => {
 const x = (e.offsetX * 100) / e.target.clientWidth;

 console.log(x, e);

 let menorDiferenca = Infinity;
 let numeroMaisProximo = null;

 // Percorra o array
 markPosition.forEach((numero) => {
  const diferenca = Math.abs(numero - x);

  if (diferenca < menorDiferenca) {
   menorDiferenca = diferenca;
   numeroMaisProximo = numero;
  }
 });

 console.log(numeroMaisProximo);

 ballSlider.style.left = numeroMaisProximo + "%";
 sliderBar.style.width = numeroMaisProximo + "%";
};
