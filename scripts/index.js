// Шаблон карточки, который будет использоваться для создания карточек
const Template = document.querySelector('#card-template').content;

// DOM узел, куда будут добавляться карточки
const cardPlace = document.querySelector('.places__list');

// Функция создания карточки
function createCard(img, title) {
  // Создаем копию шаблона карточки
  const card = Template.querySelector('.places__item').cloneNode(true);
  
  // Устанавливаем путь к изображению и alt текст
  card.querySelector('.card__image').src = img;
  card.querySelector('.card__image').alt = `Картинка с изображением ${title}`;
  
  // Устанавливаем текст заголовка карточки
  card.querySelector('.card__title').textContent = title;
  
  // Добавляем обработчик события клика на кнопку удаления карточки
  card.querySelector(".card__delete-button").addEventListener('click', deleteCard);
  
  // Возвращаем готовую карточку
  return card;
}

// Функция удаления карточки
function deleteCard(event) {
  // Находим карточку, на которую был кликнут delete button
  const cardForDelete = event.target.closest('.places__item');
  
  // Удаляем карточку
  cardForDelete.remove();
}

// Вывести карточки на страницу
// initialCards - это массив карточек, которые были определены в файле cards.js
initialCards.forEach((card) => {
  // Создаем карточку с помощью функции createCard
  // и добавляем ее на страницу
  cardPlace.append(createCard(card.link, card.name));
});

