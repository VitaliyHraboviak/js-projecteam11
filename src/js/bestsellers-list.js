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
    const galleryBook = document.querySelector('.book-gallery')
    // let topBooks = document.querySelector('.top-books');
    let markup = resData.map(buildTopBooksMarkup).join('');
    // let additionalLink = `<button type="button">affasfs</button>`;
    // markup += additionalLink;
    galleryBook.innerHTML = markup;
    console.log(markup);
    console.log(galleryBook.innerHTML);
  });

// function buildTopBooksMarkup({ books }) {
//   console.log(books);
//   return `
//     <ul>
//   <li></li>
//   <li>${books[0].list_name}</li>
//   <li>${books[0].title}</li>
//   <li>${books[0].author}</li>
//   <li><img src="${books[0].book_image}" alt="books photo" /></li>
// </ul>
//     `;
// }

// ///////////////////////////////////////////////////////////////////

// function createBestsellers(data) {
//   // getting container div element
//   const [container] = document.getElementsByClassName('container');
//   // preparing HTML markup
//   const markup = data.reduce((accumulator, dataItem) => {
//     const dataItemMarkup = buildProductMarkup(dataItem);
//     return (accumulator += dataItemMarkup);
//   }, ''); // <div>...<span>ELEMENT INFORMATION</span>...</div>
//   // adding HTML into the container
//   container.innerHTML = markup;
// }

function buildTopBooksMarkup({ books }) {
  console.log(books);
  for (let i = 0; i < books.length; i += 1) {
    // returning HTML markup as JS String
    //    let bookMarkUp2nd = '';
    return `
    
    <li class="img-card">
    <h2 class="type-of-books">Combined Print and E-Book Fiction</h2>
    <img class="img-font-page" src="${books[i].book_image}" alt="books font page" />
    <div class="book-info">
      <h3 class="book-name" <i>${books[i].title}</i></h3>
      <p class="book-author" <i>${books[i].author}</i></p>
     </div>
      <a href="${'https://books-backend.p.goit.global/books/top-books'}" 
      target="_blank" class="see-more-btn">See more</a>
     </li>
     
    `;
  
  }
};


  

  
