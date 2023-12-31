import {cart} from "./Cart.js";
import {clearCart} from "./utils.js";

export function domManipulation() {

    const cartIcon = document.querySelector('.header__shopCart_iconWrap');
    const cartModal = document.querySelector('.modalWindow_wrap');
    const closeCart = document.querySelector('.modalWindow__closeImg_wrap')
    const deleteAllInCart = document.querySelector('.modalWindow__subtotal_btnDelete');
    const btnPay = document.querySelector('.modalWindow__subtotal_btnPay');

    document.addEventListener("DOMContentLoaded", function () {
        let swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    });

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        cart.redrawCart();
    })

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    })

    deleteAllInCart.addEventListener('click', () => {
        cart.deleteAll();
        clearCart()
    })

    btnPay.addEventListener('click', event => {
        const modalCardsList = document.querySelectorAll('.modalWindow__card');
        const allCards = cart.items;
        const allCardsDescription = Object.values(allCards);
        let cardsDescription = '';
        for( let i = 0; i < allCardsDescription.length; i++){
            let description = allCardsDescription[i].product.description;
            let quantity = allCardsDescription[i].quantity;
            cardsDescription += `${description}: ${quantity} шт,\n`;
        }

        if(modalCardsList.length === 0) {
            alert(`Ваша корзина пуста`);
        } else {
            alert(`Ваш заказ:\n${cardsDescription}на сумму ${cart.totalPrice().toFixed(2)} byn принят в обработку. Мы скоро свяжемся с вами (никогда).`);
            cart.deleteAll();
            cartModal.style.display = 'none';
            clearCart()
        }

    })

}
