class TestimonialUtils {
  constructor() {
    this.testimonialsContainer = $("#testimonials-container");
    this.testimonialsGradient = $("#testimonials-gradient");
    this.testimonialsChildren = $(
      "#testimonials-container .flex.flex-col.gap-8"
    );
  }

  getHeight() {
    return this.testimonialsChildren.first().height();
  }

  toggleVisibilit(e, status) {
    const h = status == "true" ? this.getHeight() + "px" : "756px"

    this.testimonialsContainer.css('maxHeight', h);

    this.testimonialsContainer.attr("data-view", status == "true" ? "visible" : "hidden");
    this.testimonialsGradient.attr("data-status", status == "true" ? "hidden" : "visible");

    e.target.setAttribute("data-status", status == "true" ? false : true);
  }
}

const testimonialUtils = new TestimonialUtils();

const viewMoreTestimonials = $("#view-more-testimonial");

viewMoreTestimonials.on("click", (e) => {
  testimonialUtils.toggleVisibilit(e, e.target.dataset.status);
});
