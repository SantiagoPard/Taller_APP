let productos = [];
const productsList = document.getElementById("productsList");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    productos = data;
    mostrarProdcutos();
  });

const mostrarProdcutos = () => {
  productos.forEach((producto) => {
    const article = document.createElement('article');
    article.classList.add('card')

    const h2 = document.createElement('h2');
    h2.textContent = producto.title;
    h2.classList.add('card__title')

    const img = document.createElement('img');
    img.setAttribute('src',producto.image);
    img.setAttribute('alt',producto.title);
    img.classList.add('card__img')

    const label = document.createElement('label');
    label.textContent = `Precio $${producto.price}`
    label.classList.add('card__price');

    const p = document.createElement('p');
    p.textContent = producto.description
    p.classList.add('card__description')

    article.appendChild(h2);
    article.appendChild(img);
    article.appendChild(label);
    article.appendChild(p);
    
    productsList.appendChild(article);
  });
};
