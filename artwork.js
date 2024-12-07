document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const closePopup = document.querySelector('.close-popup');

   
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            popupImage.src = image.src; 
            popup.classList.add('active'); 
        });
    });

    // Close the popup
    closePopup.addEventListener('click', () => {
        popup.classList.remove('active');
    });


    popup.addEventListener('click', (e) => {
        if (e.target !== popupImage) {
            popup.classList.remove('active');
        }
    });
});
