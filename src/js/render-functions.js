// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// Функція для створення розмітки галереї
export function renderImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    if (images.length === 0) {
      showErrorMessage();
      return;
    }
  
    images.forEach(image => {
        const cardHTML = `
      <div class="card">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </div>
    `;

    // Додаємо картку зображення до контейнера галереї
    gallery.insertAdjacentHTML('beforeend', cardHTML);
  });
       
    // Після додавання нових елементів до галереї, викликаємо метод refresh
    const lightbox = new SimpleLightbox('#gallery a');
    lightbox.refresh();
  }
  

// Допоміжна функція для відображення повідомлення про помилку
function showErrorMessage() {
  iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
  });
}



  