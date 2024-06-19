class ScrollUtils {
  constructor() {
    this.windowYOffset = window.scrollY;
    this.header = $("#header");

    if (this.windowYOffset > 5) {
      this.scrollDown();
    } else {
      this.scrollUp();
    }
  }
  scrollDown() {
    this.header.attr("data-header", "active");
  }
  scrollUp() {
    this.header.attr("data-header", "disable");
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
//
// --------------- Header --------------- 
//

const headerLinkProduct = $("#header-link-product");
const headerLinkProductMobile = $("#header-link-product-mobile");

const openMenuMobile = $("#open-menu-mobile");
const closeMenuMobile = $("#close-menu-mobile");

headerLinkProduct.on("click", (e) => {
  const status = e.target.dataset.status;
  const menuProductList = $(".menu-product-list");

  if (status == "disable") {
    menuProductList.attr("data-product", "active");
    headerLinkProduct.attr("data-status", "active");
  } else {
    menuProductList.attr("data-product", "disable");
    headerLinkProduct.attr("data-status", "disable");
  }
});
headerLinkProductMobile.on("click", (e) => {
  const status = e.target.dataset.status;
  const productWrapper = $("#header-menu-mobile .menu-product-list");

  if (status == "disable") {
    productWrapper.attr("data-product", "active");
    headerLinkProductMobile.attr("data-status", "active");
  } else {
    productWrapper.attr("data-product", "disable");
    headerLinkProductMobile.attr("data-status", "disable");
  }
});

openMenuMobile.on("click", () => {
  const menu = $("#header-menu-mobile");

  menu.attr("data-status", "open");
});
closeMenuMobile.on("click", () => {
  const menu = $("#header-menu-mobile");

  menu.attr("data-status", "close");
});
//
// --------------- Header Slider --------------- 
//

new Splide(".splide", {
  perPage: 3,
  perMove: 1,
  gap: "1rem",
  focus: "center",
  arrows: false,
  pagination: false,
  trimSpace: false,
}).mount();


$(function() {
  $(".teste-teste").draggable({
    drag: function( event, ui ) {
   
      console.log(ui)
      ui.position.left = Math.min( 100, ui.position.left );
    }
  });
});