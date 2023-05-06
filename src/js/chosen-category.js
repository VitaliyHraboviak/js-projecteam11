const categoriesBlock = document.querySelector('.div-categories');
categoriesBlock.addEventListener('click', chooseCategory);

function chooseCategory(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'A') {
    return;
  }

  const selectedCategory = event.target.textContent;
  fetch(
    `https://books-backend.p.goit.global/books/category?category=${selectedCategory}`,
    {
      method: 'GET',
      headers: { accept: 'application/json' },
    }
  )
    .then(response => {
      //   console.log({ response });
      return response.json();
    })
    .then(resData => {
      // console.log({ resData });
      console.log(resData);
      console.log({ resData });

      const chosen = document.querySelector('.chosen');
      const markup = resData.map(buildTopBooksMarkup).join('');
      chosen.innerHTML = markup;
    });

  function buildTopBooksMarkup({ list_name, title, author, book_image }) {
    // console.log(books);
    ///////insert markup for books from choosen category///////////////////////
    //   for (let i = 0; i < resData.length; i += 1) {
    // returning HTML markup as JS String
    return `
    <ul> 
  <li>Category: ${list_name}</li>
  <li>Title: ${title}</li>
  <li>Author: ${author}</li>
  <li>Image: <img src="${book_image}" alt="books photo" /></li>
</ul>
    `;
  }
}
