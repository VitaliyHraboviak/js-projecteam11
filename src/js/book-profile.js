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
