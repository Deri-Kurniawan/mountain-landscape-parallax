export default class Parallax {
  static init() {
    window.addEventListener("DOMContentLoaded", () => {
      this.mouseMoveEffect();
      this.scrollEffect();
    });
  }

  static mouseMoveEffect() {
    window.addEventListener("mousemove", (event) => {
      const x = (multiply = 2, divider = 90) =>
        (window.innerWidth - event.pageX * multiply) / divider;
      const y = (multiply = 2, divider = 90) =>
        (window.innerWidth - event.pageY * multiply) / divider;
      const transform = (x, y) =>
        `translateX(${x}px) translateY(${y}px) scale(1.05)`;

      g2.style.transform = transform(x(2), y(2));
      g3.style.transform = transform(x(-2), y(-2));
      g4.style.transform = transform(x(2), y(2));
      g5.style.transform = transform(x(-2), y(-2));
      g6.style.transform = transform(x(2), y(2));
      g7.style.transform = transform(x(-1), y(-1));
      aw1.style.transform = transform(x(2), y(2));
      aw2.style.transform = transform(x(2), y(-2));
      b1.style.transform = transform(x(2), y(2));
      b2.style.transform = transform(x(-2), y(-2));
      b3.style.transform = transform(x(-2), y(-2));
      sun.style.transform = transform(x(-2), y(-2));
      button.style.transform = transform(x(0), y(4));
    });
  }

  static scrollEffect() {
    window.addEventListener("scroll", () => {
      const yPos = window.scrollY;

      if (yPos < 610) {
        g1.style.top = `${yPos * 0.3}px`;
        g2.style.top = `${yPos * 0.3}px`;
        g3.style.top = `${yPos * 0.4}px`;
        g4.style.top = `${yPos * 0.4}px`;
        g5.style.top = `${yPos * 0.9}px`;
        g6.style.top = `${yPos * 1}px`;
        g7.style.top = `${yPos * 1.1}px`;
        aw1.style.top = `${yPos * 1.2}px`;
        aw2.style.top = `${yPos * 1.3}px`;
        sun.style.top = `${yPos * 1.3}px`;
        b1.style.top = `${yPos * 3}px`;
        b2.style.left = `${yPos * 2}px`;
        b3.style.right = `${yPos * 1}px`;
        b3.style.top = `${yPos * 1}px`;
        button.style.top = `${yPos * 3}px`;
      }
    });
  }
}
