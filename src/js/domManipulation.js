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
        console.log(cart.items)

        /** тут обработать cart.items  */

        if(modalCardsList.length === 0) {
            alert(`Your cart is empty`);
        } else {
            alert(`Your order in the amount of ${cart.totalPrice()} has been accepted for processing. We will contact you soon (never).`);
            cart.deleteAll();
            cartModal.style.display = 'none';
            clearCart()
        }

    })

}
