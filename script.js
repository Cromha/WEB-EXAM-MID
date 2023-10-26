document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.faq-container');
    const newCardInput = document.getElementById('newCardInput');
    const createNewCardButton = document.getElementById('createNewCard');

    createNewCardButton.addEventListener('click', function () {
        const cardText = newCardInput.value;
        if (cardText.trim() !== '') {
            createCard(cardText);
            newCardInput.value = '';
        }
    });
    function createCard(text) {
        const card = document.createElement('div');
        card.classList.add('faq', 'active');
        card.innerHTML = `
        <h3 class="faq-title">${text}</h3>
        <p class="faq-text">${text}</p>
        <button class="faq-toggle">
          <i class="fas fa-chevron-down"></i>
          <i class="fas fa-times"></i>
        </button>
      `;

        card.addEventListener('click', function () {
            if (!card.classList.contains('deleted')) {
                changeCardColor(card); // Change the card's background color
                const answer = card.querySelector('.faq-text');
                answer.style.display = 'block';
            }
        });

        const deleteButton = card.querySelector('.faq-toggle i.fa-times');
        deleteButton.addEventListener('click', function () {
            card.classList.add('deleted');
            card.style.display = 'none';
        });

        faqContainer.appendChild(card);
    }
    const defaultCards = document.querySelectorAll('.faq');
    defaultCards.forEach(function (defaultCard) {
        defaultCard.addEventListener('click', function () {
            if (!defaultCard.classList.contains('deleted')) {
                changeCardColor(defaultCard);
                const answer = defaultCard.querySelector('.faq-text');
                answer.style.display = 'block';
            }
        });

        const defaultDeleteButton = defaultCard.querySelector('.faq-toggle i.fa-times');
        defaultDeleteButton.addEventListener('click', function () {
            defaultCard.classList.add('deleted');
            defaultCard.style.display = 'none';
        });
    });

    function changeCardColor(card) {
        const colors = ['#ffcccb', '#ffb6c1', '#ff9eb5', '#ff85a1', '#ff6b8c'];
        const currentColor = card.style.backgroundColor || 'white';
        const currentIndex = colors.indexOf(currentColor);
        if (currentIndex < colors.length - 1) {
            card.style.backgroundColor = colors[currentIndex + 1];
        } else {
            card.style.backgroundColor = colors[0];
        }
    }
});
