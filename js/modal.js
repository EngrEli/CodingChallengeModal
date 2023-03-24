document.addEventListener("DOMContentLoaded", function(event) { 
    const modalContainer = document.getElementById('modal');
    const cancelBtn = document.querySelector('.container__cancel-btn');
    const noModalBtn = document.querySelector('.modal-btn__common--no-btn');
    const yesBtn = document.querySelector('.modal-btn__common--yes-btn');
    
    const showModal = () => {
        modalContainer.classList.add('modal--show');
    }

    const hideModal = () => {
        modalContainer.classList.remove('modal--show');
    }

    const cancelConfirm = () => {
        const modalContent = document.querySelector('.modal__content');
        modalContent.innerHTML = '<p>Subscription successfully cancelled!</p>';
        setTimeout(() => {
          hideModal();
          cancelBtn.innerHTML = 'cancelled';
          cancelBtn.disabled = true;
        }, 2000);
    }

    /*
    * Shows the modal when the cancel button is clicked
    */
    cancelBtn.addEventListener('click', showModal);

    /*
    * Hides the modal when the no button inside the modal is clicked
    */
    noModalBtn.addEventListener('click', hideModal);

    /*
    * Changes the modal text content to a "Subscription successfully cancelled!" message
    * Closes the modal after 2 seconds
    * Changes the cancel button text into "cancelled"
    * Disables the button but retains the button styles - the purpose of this is just to prevent the user 
    *  from clicking the button again
    */
    yesBtn.addEventListener('click', cancelConfirm);
});

