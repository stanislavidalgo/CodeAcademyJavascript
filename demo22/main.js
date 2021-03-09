document.forms.addbook.addEventListener("submit", (event) => {
    event.preventDefault();

    const image = document.getElementById("image").value.trim();
    const price = Number(document.getElementById("price").value);
    const description = document.getElementById("description").value.trim();
    const city = document.getElementById("city").value;

    createBlock({
      image,
      price,
      description,
      city,
    });
  });

  function createBlock(item) {
    const block = document.createElement("div");
    block.classList.add("column", "is-one-quarter");

    const card = document.createElement("div");
    card.classList.add("card");

    const imageBlock = document.createElement("div");
    imageBlock.classList.add("card-image");

    const imageFigure = document.createElement("figure");
    imageFigure.classList.add("image", "is4by3");

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = "Hello";

    imageFigure.append(image);
    imageBlock.append(imageFigure);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardMedia = document.createElement("div");
    cardMedia.classList.add("media");

    const cardMediaContent = document.createElement("div");
    cardMediaContent.classList.add("media-content");

    const title = document.createElement("p");
    title.classList.add("title", "is-4");
    title.textContent = item.price;

    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle", "is-6");
    subtitle.textContent = item.city;

    cardMediaContent.append(title, subtitle);
    cardMedia.append(cardMediaContent);

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = item.description;

    cardContent.append(cardMedia, content);
    card.append(imageBlock, cardContent);
    block.append(card);
    document.getElementById("properties").append(block);
  }