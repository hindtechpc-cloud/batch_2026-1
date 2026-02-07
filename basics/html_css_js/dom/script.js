const handleDownloadClick = (e, userCardContainer) => {
  userCardContainer.setAttribute("class", "print-card ");
  window.print(userCardContainer);
};
let cards = 0;
const MAX = 1;

const createElement = (name, style) => {
  const c1 = document.createElement(name);
  c1.style.width = style?.width;
  c1.style.height = style?.height;
  c1.style.borderRadius = style?.borderRadius;
  c1.style.background = style?.background;
  c1.style.display = style?.display;
  c1.style.margin = style?.margin;
  c1.style.padding = style?.padding;
  c1.style.border = style?.border;
  c1.style.alignItems = style?.alignItems;
  c1.style.justifyContent = style?.justifyContent;
  c1.style.color = style?.color;
  c1.style.textWrap = style?.textWrap;
  c1.style.overflowY = style?.overflowY;
  c1.style.overflow = style?.overFlow;
  c1.style.position = style?.position;
  c1.style.right = style?.right;
  c1.style.top = style?.top;
  c1.style.fontSize = style?.fontSize;
  c1.style.cursor = style?.cursor;

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

// create users profile card

const createUsersCard = (user) => {
  const userCardStyle = {
    width: "300px",
    height: "400px",
    borderRadius: "5px",
    background: "rgba(247, 247, 251, 1)",
    border: "1px solid gray",
  };
  const userCardContainer = createElement("div", {
    ...userCardStyle,
    display: "block",
    position: "relative",
    overflow: "hidden",
  });

  // user card main image as bakcground
  const heroImage = createElement("img", {
    ...userCardStyle,
    height: "160px",
    src:
      user.heroImage ||
      "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg",
  });
  userCardContainer.appendChild(heroImage);

  // user profle name and image container
  const imageNameConatiner = createElement("div", {
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    background: "rgba(247, 247, 251, 1)",
    width: "100%",
  });

  // user profile  image
  const userImage = createElement("img", {
    ...userCardStyle,
    height: "70px",
    width: "70px",
    borderRadius: "50%",
    margin: "-40px 20px ",
    src:
      user.image ||
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEV1cmRYNcFh_-d-dqVHpxP4MPS4K4WDQ6w&s",
    border: "1px solid black",
  });
  imageNameConatiner.appendChild(userImage);

  // user name
  const userName = createElement("b", {
    color: "black",
    margin: "5px 10px",
  });
  userName.innerText = user.name;

  // user dob
  const userDOB = createElement("div", {
    color: "black",
    margin: "5px 10px",
  });

  userDOB.innerText = user.dob;
  const userNameWithDob = createElement("div", {});
  userNameWithDob.appendChild(userName);
  userNameWithDob.appendChild(userDOB);
  imageNameConatiner.appendChild(userNameWithDob);
  userCardContainer.appendChild(imageNameConatiner);

  // about user
  const aboutUser = createElement("article", {
    padding: "2px 10px 5px 10px",
    textWrap: "wrap",
    overflowY: "scroll",
    height: "180px",
  });

  aboutUser.innerText = user.about;
  userCardContainer.appendChild(aboutUser);

  downloadBtn = createElement("button", {
    background: "white",
    padding: "3px 20px",
    borderRadius: "5px",
    color: "black",
    fontSize: "25px",
    top: "10px",
    right: "10px",
    position: "absolute",
    cursor: "pointer",
  });
  downloadBtn.innerHTML = `<i class="fa-solid fa-download" style="inline-size:20px"></i>`;
  downloadBtn.setAttribute("class", "print-card visible");
  userCardContainer.appendChild(downloadBtn);
  downloadBtn.addEventListener("click", (e) =>
    handleDownloadClick(e, userCardContainer, user.name),
  );

  container.appendChild(userCardContainer);
};
// createUsersCard({
//   name: "Arvind",
//   dob: "00/00/0000",
//   about: `
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus laudantium recusandae dolorem reprehenderit consequatur fugit, ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
//   `,
// });

// createUsersCard({
//   name: "Raj",
//   dob: "01/01/0001",
//   about: `
// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus laudantium recusandae dolorem reprehenderit consequatur fugit, ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
//   `,
// });
// const users = [
//   {
//     name: "RAM",
//     dob: "00/00/0000",
//     about: `Lorem ipsum dolor sit, amet consectetur adipisicing
//      elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus
//       laudantium recusandae dolorem reprehenderit consequatur fugit,
//       ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
// `,
//   },
//   {
//     name: "Raj",
//     dob: "01/01/0001",
//     about: `Lorem ipsum dolor sit, amet consectetur adipisicing
//      elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus
//       laudantium recusandae dolorem reprehenderit consequatur fugit,
//       ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
// `,
//   },
//   {
//     name: "456878798y",
//     dob: "02/02/0002",
//     about: `Lorem ipsum dolor sit, amet consectetur adipisicing
//      elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus
//       laudantium recusandae dolorem reprehenderit consequatur fugit,
//       ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
// `,
//   },
//   {
//     name: "Anam",
//     dob: "03/03/0003",
//     about: `Lorem ipsum dolor sit, amet consectetur adipisicing
//      elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus
//       laudantium recusandae dolorem reprehenderit consequatur fugit,
//       ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
// `,
//   },
//   {
//     name: "Anokhi",
//     dob: "04/04/0004",
//     about: `Lorem ipsum dolor sit, amet consectetur adipisicing
//      elit. Delectus incidunt nam dicta, ipsum minus fugiat doloribus
//       laudantium recusandae dolorem reprehenderit consequatur fugit,
//       ducimus quo necessitatibus debitis voluptas? Reiciendis, at repellat.
// `,
//   },
// ];

// users.forEach((element) => {
//   createUsersCard(element);
// });

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  cards++;
  e.preventDefault();

  if (cards <=MAX) {
    createUsersCard({
      name: userName.value,
      dob: userDOB.value,
      about: aboutUser.value,
      heroImage: heroImage.value,
      image: userPrfile.value,
    });
  } else {
    alert("your limit exseeded");
  }
  userName.value = "";
  userDOB.value = "";
  aboutUser.value = "";
  heroImage.value = "";
  userPrfile.value = "";
});
