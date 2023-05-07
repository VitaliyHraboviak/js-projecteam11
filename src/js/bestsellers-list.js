
// import { makeCategoriesListArray } from './categories-list';
// import { categoriesArrayq } from './categories-list';
// const topBooks = document.querySelector('.top-books');
// console.log(categoriesArrayq);

// function renderBestsellers() {
//   fetch('https://books-backend.p.goit.global/books/top-books', {
//     method: 'GET',
//     headers: { accept: 'application/json' },
//   })
//     .then(response => {
//       console.log({ response });
//       return response.json();
//     })
//     .then(resData => {
//       console.dir(resData);

//       //   console.log(topBooks);

//       let markup = resData.map(buildTopBooksMarkup).join('');

//       topBooks.insertAdjacentHTML('beforeend', markup);
//       // console.log(topBooks);
//       // console.log(topBooks.innerHTML);
//       const ulBestsellers = document.querySelector('.ul-bestsellers');
//       // console.log(ulBestsellers);
//       //////// ulBestsellers - all books li items together in one list
//       const booksProfileArray = document.querySelectorAll('.ul-bestsellers');
//       // const nodesList = document.querySelectorAll('.ul-bestsellers');
//       // const galleryListRef = nodesList[nodesList.length - 1];
//       // console.log(galleryListRef);
//     })
//     .then(response => {
//       comsole.log(response);
//       let serviceArray = response;

//       // console.dir(serviceArray.length);
//       //   for (let data of resData) {
//       // console.log(categoriesArrayq);
//       const makeCategoriesListArraylength = makeCategoriesListArray().length;
//       // async function console() {
//       //   await console.log(makeCategoriesListArraylength);

//       // for (let index = 0; index < makeCategoriesListArraylength; index += 1) {
//       let array = [];
//       for (let i = 0; i < serviceArray.length; i += 1) {
//         booksProfileArray.insertAdjacentHTML(
//           'afterbegin',
//           `<h3 class="books-category">${resData[i].list_name}</h3>`
//         );
//         console.log(galleryListRef);
//         booksProfileArray.insertAdjacentHTML(
//           'afterbegin',
//           `<img src="${resData[i].books[i].book_image}" alt="books photo" /> `
//         );
//         booksProfileArray.insertAdjacentHTML(
//           'afterbegin',
//           `<li>Title: ${resData[i].books[i].title}</li> `
//         );
//         booksProfileArray.insertAdjacentHTML(
//           'afterbegin',
//           `<button class="gallery-see-more-btn" data-category="${resData[i].books[i].list_name}">See more</button>`
//         );
//         // }

//         console.log(booksProfileArray);
//         ////// booksProfileArray - array of all list
//         console.log(booksProfileArray);
//       }
//     });
//   // }
//   // console().then(response => )

//   // function renderGallery(data) {}

//   // function buildTopBooksMarkup({ books }) {
//   //   console.log(books);
//   //   return `
//   //     <ul>
//   //   <li></li>
//   //   <li>${books[0].list_name}</li>
//   //   <li>${books[0].title}</li>
//   //   <li>${books[0].author}</li>
//   //   <li><img src="${books[0].book_image}" alt="books photo" /></li>
//   // </ul>
//   //     `;
//   // }

//   // ///////////////////////////////////////////////////////////////////

//   function buildTopBooksMarkup({ books }) {
//     // console.log(books);
//     for (let i = 0; i < books.length; i += 1) {
//       // returning HTML markup as JS String
//       //    let bookMarkUp2nd = '';
//       return `
//     <ul class="ul-bestsellers"></ul>
=======
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
//     }
//   }
// }

// function createCategoriesGroups() {
//   resData().
// }


// renderBestsellers();

// // async function fetchingTopBooks() {
// //   console.log('fetching Top Books =>');
// //   try {
// //     const response = await axios.get(
// //       `https://books-backend.p.goit.global/books/top-books`
// //     );

// //     console.log(response.data);
// //     return response.data;
// //   } catch (error) {
// //     console.log('catch error', error);
// //   }
// // }
// fetchingTopBooks();
=======
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
      target="_blank" class="see-more-btn">SEE MORE</a>
     </li>
     
    `;
  
  }
};


  

  

