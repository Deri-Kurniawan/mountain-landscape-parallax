import "./style.css";
import Deact, { createElement } from "./Deact";
import parallax from "./parallax";

parallax.init();

const prefixAssets = "/mountain-edge";

const app = document.getElementById("app");
const main = createElement("div", { id: "main" });
const landscapeVectorContainer = createElement("div", {
  id: "landscapeVectorContainer",
});
const g1 = createElement("img", { src: `${prefixAssets}/g1.png`, id: "g1" });
const g2 = createElement("img", { src: `${prefixAssets}/g2.png`, id: "g2" });
const g3 = createElement("img", { src: `${prefixAssets}/g3.png`, id: "g3" });
const g4 = createElement("img", { src: `${prefixAssets}/g4.png`, id: "g4" });
const g5 = createElement("img", { src: `${prefixAssets}/g5.png`, id: "g5" });
const g6 = createElement("img", { src: `${prefixAssets}/g6.png`, id: "g6" });
const g7 = createElement("img", { src: `${prefixAssets}/g7.png`, id: "g7" });
const aw1 = createElement("img", { src: `${prefixAssets}/aw1.png`, id: "aw1" });
const aw2 = createElement("img", { src: `${prefixAssets}/aw2.png`, id: "aw2" });
const sun = createElement("img", { src: `${prefixAssets}/sun.png`, id: "sun" });
const b1 = createElement("img", { src: `${prefixAssets}/b1.png`, id: "b1" });
const b2 = createElement("img", { src: `${prefixAssets}/b2.png`, id: "b2" });
const b3 = createElement("img", { src: `${prefixAssets}/b3.png`, id: "b3" });
const button = createElement("button", { id: "button" }, "Mountain Landscape");

Deact.render(
  [g1, g2, g3, g4, g5, g6, g7, aw1, aw2, sun, b1, b2, b3, button],
  landscapeVectorContainer
);

Deact.render(
  [
    createElement("h1", null, "Parallax Scrolling Website"),
    createElement(
      "p",
      { class: "p-content" },
      "Parallax scrolling is a technique where the background image moves at a different speed from the image in front of it when a web page is scrolled. This creates an interesting and interactive depth effect and can be used to enhance aesthetics and improve the user experience."
    ),
    createElement(
      "p",
      { class: "p-content" },
      "Essentially, the parallax effect is achieved by setting the background image to move slower than the image in front of it when the page is scrolled. This can be done using CSS or JavaScript, and can be applied to static images or videos. Some web pages also use the parallax effect to create interactivity by changing the perspective or size of the image as the page is scrolled."
    ),
    createElement(
      "p",
      { class: "p-content" },
      "The parallax scroll effect can be used for various purposes, including enhancing the aesthetics of a web page, improving the user experience, or conveying a specific message. It's commonly used in landing pages, portfolios, and product promotion websites. However, it should be noted that the parallax scroll effect can cause issues for users with limited mobility or with unsupported devices."
    ),
    createElement(
      "p",
      { class: "p-content" },
      "The parallax scroll effect can also be used in mobile applications by using technologies such as software that can change the background within the app as the device is moved. However, this requires more development and maintenance than using web technologies."
    ),
    createElement(
      "p",
      { class: "p-content" },
      "Overall, parallax scrolling is a technique that can be used to enhance aesthetics and the user experience on web pages. However, it should be noted that this effect can cause issues for some users and should be used judiciously."
    ),
    createElement("h2", null, "License"),
    createElement(
      "p",
      null,
      "Image by ",
      createElement(
        "a",
        {
          href: "https://www.freepik.com/free-vector/hand-drawn-flat-design-mountain-landscape_20008380.htm#query=mountain%20wallpaper&position=4&from_view=keyword",
          target: "_blank",
        },
        "Freepik"
      )
    ),
    createElement("h2", null, "Author"),
    createElement(
      "p",
      null,
      "This parallax effect made with ❤️ by ",
      createElement(
        "a",
        {
          href: "https://github.com/deri-kurniawan",
          target: "_blank",
        },
        "Deri Kurniawan"
      )
    ),
  ],
  main
);

Deact.render([landscapeVectorContainer, main], app);
