import "./style.css";

const app = document.getElementById("app");

const container = document.createElement("div");
container.setAttribute("id", "container");

const g1 = document.createElement("img");
g1.setAttribute("src", "/mountain-edge/g1.png");
g1.setAttribute("id", "g1");

const g2 = document.createElement("img");
g2.setAttribute("src", "/mountain-edge/g2.png");
g2.setAttribute("id", "g2");

const g3 = document.createElement("img");
g3.setAttribute("src", "/mountain-edge/g3.png");
g3.setAttribute("id", "g3");

const g4 = document.createElement("img");
g4.setAttribute("src", "/mountain-edge/g4.png");
g4.setAttribute("id", "g4");

const g5 = document.createElement("img");
g5.setAttribute("src", "/mountain-edge/g5.png");
g5.setAttribute("id", "g5");

const g6 = document.createElement("img");
g6.setAttribute("src", "/mountain-edge/g6.png");
g6.setAttribute("id", "g6");

const g7 = document.createElement("img");
g7.setAttribute("src", "/mountain-edge/g7.png");
g7.setAttribute("id", "g7");

const aw1 = document.createElement("img");
aw1.setAttribute("src", "/mountain-edge/aw1.png");
aw1.setAttribute("id", "aw1");

const aw2 = document.createElement("img");
aw2.setAttribute("src", "/mountain-edge/aw2.png");
aw2.setAttribute("id", "aw2");

const sun = document.createElement("img");
sun.setAttribute("src", "/mountain-edge/sun.png");
sun.setAttribute("id", "sun");

const b1 = document.createElement("img");
b1.setAttribute("src", "/mountain-edge/b1.png");
b1.setAttribute("id", "b1");

const b2 = document.createElement("img");
b2.setAttribute("src", "/mountain-edge/b2.png");
b2.setAttribute("id", "b2");

const b3 = document.createElement("img");
b3.setAttribute("src", "/mountain-edge/b3.png");
b3.setAttribute("id", "b3");

container.append(g1, g2, g3, g4, g5, g6, g7, aw1, aw2, sun, b1, b2, b3);

const main = document.createElement("div");
main.innerHTML = `
  <h1>Parallax Scrolling Website</h1>
  <p class="p-content">
  Parallax scrolling is a technique where the background image moves at a different speed from the image in front of it when a web page is scrolled. This creates an interesting and interactive depth effect and can be used to enhance aesthetics and improve the user experience.
  </p>
  <p class="p-content">
  Essentially, the parallax effect is achieved by setting the background image to move slower than the image in front of it when the page is scrolled. This can be done using CSS or JavaScript, and can be applied to static images or videos. Some web pages also use the parallax effect to create interactivity by changing the perspective or size of the image as the page is scrolled.
  </p>
  <p class="p-content">
  The parallax scroll effect can be used for various purposes, including enhancing the aesthetics of a web page, improving the user experience, or conveying a specific message. It's commonly used in landing pages, portfolios, and product promotion websites. However, it should be noted that the parallax scroll effect can cause issues for users with limited mobility or with unsupported devices.
  </p>
  <p class="p-content">
  The parallax scroll effect can also be used in mobile applications by using technologies such as software that can change the background within the app as the device is moved. However, this requires more development and maintenance than using web technologies.
  </p>
  <p class="p-content">
  Overall, parallax scrolling is a technique that can be used to enhance aesthetics and the user experience on web pages. However, it should be noted that this effect can cause issues for some users and should be used judiciously.
  </p>
  <h2>License</h2>
  <p>
    Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_20008380.htm#query=mountain%20wallpaper&position=4&from_view=keyword">Freepik</a>
  </p>
  <h2>Author</h2>
  <p>
    This parallax effect made with ❤️ by <a href="https://github.com/deri-kurniawan">Deri Kurniawan</a>
  </p>

`;
main.setAttribute("id", "main");

const button = document.createElement("button");
button.innerText = "Mountain Landscape";
button.setAttribute("id", "button");

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  if (value < 610) {
    g1.style.top = value * 0.3 + "px";
    g2.style.top = value * 0.3 + "px";
    g3.style.top = value * 0.4 + "px";
    g4.style.top = value * 0.4 + "px";
    g5.style.top = value * 0.9 + "px";
    g6.style.top = value * 1 + "px";
    g7.style.top = value * 1.1 + "px";
    aw1.style.top = value * 1.2 + "px";
    aw2.style.top = value * 1.3 + "px";
    sun.style.top = value * 1.3 + "px";
    b1.style.top = value * 3 + "px";
    b2.style.left = value * 2 + "px";
    b3.style.right = value * 1 + "px";
    b3.style.top = value * 1 + "px";
    button.style.top = value * 3 + "px";
  }
});

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
  g7.style.transform = transform(x(-2), y(-2));
  aw1.style.transform = transform(x(2), y(2));
  aw2.style.transform = transform(x(2), y(-2));
  b1.style.transform = transform(x(2), y(2));
  b2.style.transform = transform(x(-2), y(-2));
  b3.style.transform = transform(x(-2), y(-2));
  sun.style.transform = transform(x(-2), y(-2));
  button.style.transform = transform(x(0), y(4));
});

container.appendChild(button);
app.appendChild(container);
app.appendChild(main);
