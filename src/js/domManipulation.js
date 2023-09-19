import {cart} from "./Cart.js";

export function domManipulation() {

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

    const cartIcon = document.querySelector('.header__shopCart_iconWrap');
    const cartModal = document.querySelector('.modalWindow_wrap');
    const closeCart = document.querySelector('.modalWindow__closeImg_wrap')
    const deleteAllInCart = document.querySelector('.modalWindow__subtotal_btnDelete');
    const btnPay = document.querySelector('.modalWindow__subtotal_btnPay');

    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        cart.redrawCart();
    })

    closeCart.addEventListener('click', () => {
        cartModal.style.display = 'none';
    })

    deleteAllInCart.addEventListener('click', () => {
        cart.deleteAll();
        const divShopCartWrap = document.querySelectorAll('.card__shopCart_iconWrap')
        divShopCartWrap.forEach((el) => {
            el.style.display = 'flex'
        })
        const divQuantityWrap = document.querySelectorAll('.card__quantity_wrap')
        divQuantityWrap.forEach((el) => {
            el.style.display = 'none'
        })
        const cardQuantities = document.querySelectorAll('.card__quantity')
        cardQuantities.forEach((el) => {
            el.innerHTML = 0
        })
    })

    btnPay.addEventListener('click', event => {
        const modalCardsList = document.querySelectorAll('.modalWindow__card');
        if(modalCardsList.length === 0) {
            alert(`Your cart is empty`);
        } else {
            alert(`Your order in the amount of ${cart.totalPrice()} has been accepted for processing. We will contact you soon (never).`);
            cart.deleteAll();
            cartModal.style.display = 'none';
            const divShopCartWrap = document.querySelectorAll('.card__shopCart_iconWrap')
            divShopCartWrap.forEach((el) => {
                el.style.display = 'flex'
            })
            const divQuantityWrap = document.querySelectorAll('.card__quantity_wrap')
            divQuantityWrap.forEach((el) => {
                el.style.display = 'none'
            })
            const cardQuantities = document.querySelectorAll('.card__quantity')
            cardQuantities.forEach((el) => {
                el.innerHTML = 0
            })
        }

    })

}
