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
