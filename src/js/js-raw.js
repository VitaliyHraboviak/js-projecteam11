////////////////////dynamic markup for categories list (small from left)

let id = '';

fetch('https://books-backend.p.goit.global/books/category-list', {
  method: 'GET',
  headers: { accept: 'application/json' },
})
  .then(response => {
    console.log({ response });
    return response.json();
  })
  .then(resData => {
    console.log({ resData });
    const categoriesList = document.querySelector('.categories-list');
    const markup = resData.map(buildCategoriesListMarkup).join('');
    categoriesList.innerHTML = markup;
  });

function buildCategoriesListMarkup({ list_name }) {
  const listName = list_name;
  return `
         <li><a href="" class="categories-item">${listName}</a></li>
    `;
}

// //////////////////////////////////////////////////////////////
////////dynamic markup for bestsellers ???
fetch('https://books-backend.p.goit.global/books/top-books', {
  method: 'GET',
  headers: { accept: 'application/json' },
})
  .then(response => {
    console.log({ response });
    return response.json();
  })
  .then(resData => {
    console.log({ resData });
    const topBooks = document.querySelector('.top-books');
    const markup = resData.map(buildTopBooksMarkup).join('');
    topBooks.innerHTML = markup;
  });

function buildTopBooksMarkup({ books }) {
  const listName = books;
  return `
         <li>${listName}</li>
    `;
}

// /////////////////////////////////////////////////////////////////////////////////////////
///////////////////// dynamic markup for books from choosen category
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
      console.log({ response });
      return response.json();
    })
    .then(resData => {
      console.log({ resData });
      const [topBooks] = document.getElementsByClassName('top-books');
      const markup = resData.map(buildTopBooksMarkup).join('');
      topBooks.innerHTML = markup;
    });

  function buildTopBooksMarkup({ list_name }) {
    const listName = list_name;
    ///////insert markup for books from choosen category///////////////////////
    return `
         <li>${listName}</li>
    `;
  }
}

//////////////////////////////////////////////////////////////////////////
const bookProfile = document.querySelector('.book-profile');
bookProfile.addEventListener('click', openBookProfile);

// fetch('https://books-backend.p.goit.global/books/ bookId', {
function openBookProfile(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'A') {
    return;
  }

  //   const selectedCategory = event.target.textContent;
  fetch(`https://books-backend.p.goit.global/books/${_id}`, {
    method: 'GET',
    headers: { accept: 'application/json' },
  })
    .then(response => {
      console.log({ response });
      return response.json();
    })
    .then(resData => {
      console.log({ resData });
      const [topBooks] = document.getElementsByClassName('top-books');
      const markup = resData.map(buildTopBooksMarkup).join('');
      topBooks.innerHTML = markup;
    });

  function buildTopBooksMarkup({ list_name }) {
    const listName = list_name;
    ///////insert markup for books from choosen category///////////////////////
    return `
         <li>${listName}</li>
    `;
  }
}
