const createElement = (name, style) => {
  const c1 = document.createElement(name);
  c1.style.width = style?.width;
  c1.style.height = style?.height;
  c1.style.borderRadius = style?.borderRadius;
  c1.style.background = style?.background;
  c1.style.display = style?.display;
  c1.style.margin = style?.margin;
  c1.style.border = style?.border;
  c1.style.alignItems = style?.alignItems;
  c1.style.justifyContent = style?.justifyContent;
  if (name == "img") {
    c1.src = style?.src;
  }
  return c1;
};

const container = document.getElementById("root");
const style = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  background: "green",
};
// container.appendChild(createElement("div", { ...style, background: "red" }));
// container.appendChild(createElement("div", { ...style, background: "yellow" }));
// container.appendChild(createElement("div", style));

// create user profile

const userCardStyle = {
  width: "300px",
  height: "500px",
  borderRadius: "5px",
  background: "white",
};
const userCardContainer = createElement("div", {
  ...userCardStyle,
  display: "block",
});

// user card main image as bakcground
const heroImage = createElement("img", {
  ...userCardStyle,
  height: "150px",
  src: "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg",
});
userCardContainer.appendChild(heroImage);

// user profle name and image container
const imageNameConatiner = createElement("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  background: "red",
  width: "100%",
});

// user profile  image
const userImage = createElement("img", {
  ...userCardStyle,
  height: "70px",
  width: "70px",
  borderRadius: "50%",
  margin: "-20px 20px auto",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEV1cmRYNcFh_-d-dqVHpxP4MPS4K4WDQ6w&s",
  border: "1px solid black",
});
imageNameConatiner.appendChild(userImage);

// user name
const userName = createElement("div", {
//   background: "yellow",
});
userName.innerText = "Arvind";
imageNameConatiner.appendChild(userName);

userCardContainer.appendChild(imageNameConatiner);

container.appendChild(userCardContainer);

// container.innerHTML = `<div class="image">hellow</div>`;



