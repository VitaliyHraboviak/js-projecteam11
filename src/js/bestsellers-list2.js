import axios, { all } from 'axios';
import openBookProfile from './book-profile';
const groupsContainers = document.querySelector('.render-container');

async function fetchingTopBooksArray() {
  console.log('fetching Top Books =>');
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/top-books`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('catch error', error);
  }
}
////////////////////// returns array of objects

export default function renderBestsellersGroups() {
  fetchingTopBooksArray().then(response => {
    createBestsellersBooksGroupsMarkup(response);
    // console.log(createBestsellersBooksMarkup(response.data));
  });
}

function createBestsellersBooksMarkup({ list_name }) {
  console.log(list_name);
  // list_name.forEach(element => {
}
renderBestsellersGroups();

function createBestsellersBooksGroupsMarkup(array) {
  console.log(array);
  //   console.log(array.books[0].title);
  for (let i = 0; i < array.length; i++) {
    let categoryItems = document.createElement('div');
    categoryItems.classList.add('render-container-group-item');
    console.log(array[i].books[0].list_name);
    for (let index = 0; index < array[i].books.length; index++) {
      categoryItems.insertAdjacentHTML(
        'beforeend',
        `<div class="render-container-item">
        <ul>
      <li>${array[i].books[index].list_name}</li>
      <li>${array[i].books[index].title}</li>
      <li>${array[i].books[index].author}</li>
      <li><img src="${array[i].books[index].book_image}" alt="books photo" /></li>
    </ul> 
     </div>`
      );
    }
    groupsContainers.appendChild(categoryItems);
    groupsContainers.insertAdjacentHTML(
      'beforeend',
      `<button class="on-load-more" data-id="${array[i].books[0].list_name}" type="button">on-load-more</button>`
    );
    const allBtns = document.querySelectorAll('on-load-more');
    console.log(allBtns);
  }
}

// const allBtns = document.querySelectorAll('on-load-more');
// console.log(allBtns);
// for (let i = 0; i < allBtns.length; i++) {
//   allBtns[i].addEventListener('click', 'callback');
// }
