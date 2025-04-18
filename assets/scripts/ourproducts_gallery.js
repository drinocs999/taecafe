 const addToCartButtons = document.querySelectorAll('.cartbtn');
 const cartNotification = document.getElementById('cart-notification');
  
  addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {

            cartNotification.style.display = 'block';

           
            setTimeout(() => {
                cartNotification.style.display = 'none';
            }, 2000);
        });
    });
