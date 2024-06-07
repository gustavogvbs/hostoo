class TestimonialUtils {
  constructor() {
    this.testimonialsContainer = document.getElementById("testimonials-container");
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

    this.testimonialsContainer.setAttribute("data-view", status == "true" ? "visible" : "hidden");
    this.testimonialsGradient.setAttribute("data-status", status == "true" ? "hidden" : "visible");

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
