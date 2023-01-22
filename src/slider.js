import { Slide, SlideShow, Circle } from "./components";

export class Slider {
  constructor(data, delay = 3000) {
    this.data = data;
    this.delay = delay;
    this.init();
  }

  init() {
    this.slider = new SlideShow();
    const app = document.querySelector("#app");
    app.appendChild(this.slider);
    this.getDomObjects();
    this.initProps();
    this.addSlides();
    this.addEvents();
    this.resetTimer();
  }

  initProps() {
    this.activeSlide = 0;
    this.slides = [];
    this.circles = [];
  }

  getDomObjects() {
    this.slidesDomObject = this.slider.querySelector(".slides");
    this.paginationDomObject = this.slider.querySelector(".pagination");
    this.leftDomObject = this.slider.querySelector(".left");
    this.rightDomObject = this.slider.querySelector(".right");
  }

  addSlides() {
    this.data.forEach((s, index) => {
      this.slides.push(new Slide(s));
      this.circles.push(new Circle(index === this.activeSlide));
      this.slidesDomObject.appendChild(this.slides[index]);
      this.paginationDomObject.appendChild(this.circles[index]);
    });
  }

  addEvents() {
    this.leftDomObject.addEventListener("click", () => {
      this.moveLeft();
      this.resetTimer();
    });
    this.rightDomObject.addEventListener("click", () => {
      this.moveRight();
      this.resetTimer();
    });
    this.circles.forEach((circle, index) => {
      circle.addEventListener("click", () => {
        this.move(index);
        this.resetTimer();
      });
    });
  }

  moveLeft() {
    this.move(
      this.activeSlide > 0 ? this.activeSlide - 1 : this.slides.length - 1
    );
  }

  moveRight() {
    this.move(
      this.activeSlide < this.slides.length - 1 ? this.activeSlide + 1 : 0
    );
  }

  move(index) {
    this.circles[this.activeSlide].className = "circle";
    this.activeSlide = index;
    this.circles[this.activeSlide].className = "circle active";
    this.slidesDomObject.style.left = `${this.activeSlide * -100}vw`;
  }

  timer() {
    this.interval = setInterval(() => {
      this.moveRight();
    }, this.delay);
  }

  resetTimer() {
    clearInterval(this.interval);
    this.timer();
  }
}
