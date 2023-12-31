import {animationIn, animationOut, counterId} from './utils.js';
import {cart} from './Cart.js';


export class Product {
    constructor(pathToImage, description, price) {
        this.id = `card_${counterId()}`
        this.pathToImage = pathToImage;
        this.description = description;
        this.price = price;
        // cart.registerProduct(this);
    }

    render() {
        const divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.setAttribute('id', this.id);
        document.querySelector('.bestSelling__cards').append(divCard);

        const divIncreaseIconWrap = document.createElement('div');
        divIncreaseIconWrap.classList.add('card__increaseIcon_wrap');
        divCard.append(divIncreaseIconWrap);
        divIncreaseIconWrap.addEventListener('click', event => {
            this.increase();
            animationIn();
        })

        const svgIncreaseNS = 'http://www.w3.org/2000/svg';

        const svgIncreaseIcon = document.createElementNS(svgIncreaseNS, 'svg');
        svgIncreaseIcon.setAttribute('width', '24');
        svgIncreaseIcon.setAttribute('height', '24');
        svgIncreaseIcon.setAttribute('viewBox', '0 0 24 24');
        svgIncreaseIcon.setAttribute('fill', 'none');
        svgIncreaseIcon.setAttribute('xmlns', svgIncreaseNS);
        divIncreaseIconWrap.append(svgIncreaseIcon);

        const svgIncreaseIconPath1 = document.createElementNS(svgIncreaseNS, 'path');
        svgIncreaseIconPath1.setAttribute('d', 'M10.77 18.3C9.2807 18.3 7.82485 17.8584 6.58655 17.031C5.34825 16.2036 4.38311 15.0275 3.81318 13.6516C3.24325 12.2757 3.09413 10.7616 3.38468 9.30096C3.67523 7.84029 4.39239 6.49857 5.44548 5.44548C6.49857 4.39239 7.84029 3.67523 9.30096 3.38468C10.7616 3.09413 12.2757 3.24325 13.6516 3.81318C15.0275 4.38311 16.2036 5.34825 17.031 6.58655C17.8584 7.82485 18.3 9.2807 18.3 10.77C18.3 11.7588 18.1052 12.738 17.7268 13.6516C17.3484 14.5652 16.7937 15.3953 16.0945 16.0945C15.3953 16.7937 14.5652 17.3484 13.6516 17.7268C12.738 18.1052 11.7588 18.3 10.77 18.3ZM10.77 4.74999C9.58331 4.74999 8.42327 5.10189 7.43657 5.76118C6.44988 6.42046 5.68084 7.35754 5.22672 8.45389C4.77259 9.55025 4.65377 10.7566 4.88528 11.9205C5.11679 13.0844 5.68824 14.1535 6.52735 14.9926C7.36647 15.8317 8.43556 16.4032 9.59945 16.6347C10.7633 16.8662 11.9697 16.7474 13.0661 16.2933C14.1624 15.8391 15.0995 15.0701 15.7588 14.0834C16.4181 13.0967 16.77 11.9367 16.77 10.75C16.77 9.15869 16.1379 7.63257 15.0126 6.50735C13.8874 5.38213 12.3613 4.74999 10.77 4.74999Z');
        svgIncreaseIconPath1.setAttribute('fill', '#9797D5');
        svgIncreaseIcon.append(svgIncreaseIconPath1);

        const svgIncreaseIconPath2 = document.createElementNS(svgIncreaseNS, 'path');
        svgIncreaseIconPath2.setAttribute('d', 'M20 20.75C19.9015 20.7505 19.8038 20.7312 19.7128 20.6935C19.6218 20.6557 19.5392 20.6001 19.47 20.53L15.34 16.4C15.2075 16.2578 15.1354 16.0698 15.1388 15.8755C15.1423 15.6812 15.221 15.4958 15.3584 15.3584C15.4958 15.221 15.6812 15.1423 15.8755 15.1388C16.0698 15.1354 16.2578 15.2075 16.4 15.34L20.53 19.47C20.6705 19.6106 20.7493 19.8012 20.7493 20C20.7493 20.1988 20.6705 20.3894 20.53 20.53C20.4608 20.6001 20.3782 20.6557 20.2872 20.6935C20.1962 20.7312 20.0985 20.7505 20 20.75ZM10.75 14C10.5519 13.9974 10.3626 13.9176 10.2225 13.7775C10.0824 13.6374 10.0026 13.4481 10 13.25V8.25C10 8.05109 10.079 7.86032 10.2197 7.71967C10.3603 7.57902 10.5511 7.5 10.75 7.5C10.9489 7.5 11.1397 7.57902 11.2803 7.71967C11.421 7.86032 11.5 8.05109 11.5 8.25V13.25C11.4974 13.4481 11.4176 13.6374 11.2775 13.7775C11.1374 13.9176 10.9481 13.9974 10.75 14Z');
        svgIncreaseIconPath2.setAttribute('fill', '#9797D5');
        svgIncreaseIcon.append(svgIncreaseIconPath2);

        const svgIncreaseIconPath3 = document.createElementNS(svgIncreaseNS, 'path');
        svgIncreaseIconPath3.setAttribute('d', 'M13.25 11.5H8.25C8.05109 11.5 7.86032 11.421 7.71967 11.2803C7.57902 11.1397 7.5 10.9489 7.5 10.75C7.5 10.5511 7.57902 10.3603 7.71967 10.2197C7.86032 10.079 8.05109 10 8.25 10H13.25C13.4489 10 13.6397 10.079 13.7803 10.2197C13.921 10.3603 14 10.5511 14 10.75C14 10.9489 13.921 11.1397 13.7803 11.2803C13.6397 11.421 13.4489 11.5 13.25 11.5Z');
        svgIncreaseIconPath3.setAttribute('fill', '#9797D5');
        svgIncreaseIcon.append(svgIncreaseIconPath3);

        const divImgWrap = document.createElement('div');
        divImgWrap.classList.add('card__img_wrap');
        divCard.append(divImgWrap);

        const imgCard = document.createElement('img');
        imgCard.classList.add('card__img');
        imgCard.src = this.pathToImage;
        divImgWrap.append(imgCard);

        const divDesctiptionFlexWrap = document.createElement('div');
        divDesctiptionFlexWrap.classList.add('card__description_flexWrap');
        divCard.append(divDesctiptionFlexWrap);

        const div = document.createElement('div');
        divDesctiptionFlexWrap.append(div);

        const divDescriptionWrap = document.createElement('div');
        divDescriptionWrap.classList.add('card__description_wrap');
        div.append(divDescriptionWrap);

        const pCardDescription = document.createElement('p');
        pCardDescription.classList.add('card__description');
        pCardDescription.innerHTML = this.description;
        divDescriptionWrap.append(pCardDescription);

        const divPriceWrap = document.createElement('div');
        divPriceWrap.classList.add('card__price_wrap');
        div.append(divPriceWrap);

        const pPrice = document.createElement('p');
        pPrice.classList.add('card__price');
        pPrice.innerHTML = this.price.toFixed(2).split('.')[0] + '.'
        divPriceWrap.append(pPrice);

        const spanPrice = document.createElement('span');
        spanPrice.classList.add('card__price_span');
        spanPrice.innerHTML = this.price.toFixed(2).split('.')[1];
        pPrice.append(spanPrice)

        const pPriceCurrency = document.createElement('p');
        pPriceCurrency.classList.add('card__price_currency');
        pPriceCurrency.innerHTML = 'BYN'
        divPriceWrap.append(pPriceCurrency);

        const divShopCartWrapMain = document.createElement('div');
        divShopCartWrapMain.classList.add('card__shopCart_wrap');
        divDesctiptionFlexWrap.append(divShopCartWrapMain);

        const divShopCartWrap = document.createElement('div');
        divShopCartWrap.classList.add('card__shopCart_iconWrap');
        divShopCartWrapMain.append(divShopCartWrap);
        divShopCartWrap.addEventListener('click', () => {
            pQuantity.innerHTML = cart.add(this);
            divShopCartWrap.style.display = 'none'
            divQuantityWrap.style.display = '';
        });

        const svgCartNS = 'http://www.w3.org/2000/svg'
        const svgCart = document.createElementNS(svgCartNS, "svg");
        svgCart.setAttribute('width', '38');
        svgCart.setAttribute('height', '37');
        svgCart.setAttribute('viewBox', '0 0 38 37');
        svgCart.setAttribute('fill', 'none');
        svgCart.setAttribute('xmlns', svgCartNS);
        divShopCartWrap.append(svgCart);

        const svgCartPath = document.createElementNS(svgCartNS, 'path');
        svgCartPath.setAttribute('d', 'M37.7849 9.93962C37.6754 9.78508 37.5302 9.65895 37.3615 9.57185C37.1927 9.48474 37.0054 9.43921 36.8153 9.43909H11.4861L9.56878 2.8672C8.81689 0.279365 7.03022 0 6.29742 0H1.18516C0.529904 0 0 0.527294 0 1.17796C0 1.82862 0.530501 2.35588 1.18512 2.35588H6.29679C6.4585 2.35588 6.95201 2.35588 7.2886 3.51189L13.8844 27.6055C14.0276 28.1138 14.4936 28.4649 15.0253 28.4649H31.136C31.6361 28.4649 32.0825 28.1535 32.2514 27.6855L37.9299 11.0156C38.0606 10.6543 38.0063 10.2522 37.7849 9.93962H37.7849ZM30.302 26.1096H15.9248L12.1522 11.7956H35.1303L30.302 26.1096ZM27.9515 30.8523C26.3033 30.8523 24.9678 32.1797 24.9678 33.818C24.9678 35.4562 26.3033 36.7836 27.9515 36.7836C29.5997 36.7836 30.9352 35.4562 30.9352 33.818C30.9352 32.1797 29.5997 30.8523 27.9515 30.8523ZM17.2102 30.8523C15.562 30.8523 14.2265 32.1797 14.2265 33.818C14.2265 35.4562 15.562 36.7836 17.2102 36.7836C18.8584 36.7836 20.1939 35.4562 20.1939 33.818C20.1939 32.1797 18.8584 30.8523 17.2102 30.8523Z');
        svgCartPath.setAttribute('fill', '#3131A7');
        svgCart.append(svgCartPath);

        const divQuantityWrap = document.createElement('div');
        divQuantityWrap.classList.add('card__quantity_wrap');
        divQuantityWrap.style.display = 'none';
        divShopCartWrapMain.append(divQuantityWrap);

        divQuantityWrap.addEventListener('click', event => {
            if (event.target === btnQuantityPlus) {
                pQuantity.innerHTML = cart.add(this);

            }
            if (event.target === btnQuantityMinus) {
                pQuantity.innerHTML = cart.remove(this);
                if (pQuantity.innerHTML === '0') {
                    divQuantityWrap.style.display = 'none';
                    divShopCartWrap.style.display = '';
                }
            }
        })

        const btnQuantityPlus = document.createElement('btn');
        btnQuantityPlus.classList.add('card__quantity_btnPlus');
        btnQuantityPlus.innerHTML = '+';
        divQuantityWrap.append(btnQuantityPlus);

        const pQuantity = document.createElement('p');
        pQuantity.classList.add('card__quantity');
        pQuantity.innerHTML = '1';
        divQuantityWrap.append(pQuantity);

        const btnQuantityMinus = document.createElement('btn');
        btnQuantityMinus.classList.add('card__quantity_btnMinus')
        btnQuantityMinus.innerHTML = '-';
        divQuantityWrap.append(btnQuantityMinus);

        /** корзинка или кол-во после перезагрузки страницы*/
        let quantity = cart.items[this.id]?.quantity
        if (quantity >0){
            pQuantity.innerHTML = quantity;
            divShopCartWrap.style.display = 'none'
            divQuantityWrap.style.display = '';
        }

        return divCard
    }

    increase() {

        const divIncreaseWrap = document.createElement('div');
        divIncreaseWrap.classList.add('modalWindow__increase_wrap');
        document.querySelector('.modalWindow__increase_block').append(divIncreaseWrap);
        divIncreaseWrap.addEventListener('click', event => {
            if (event.target === divIncreaseWrap) {
                animationOut();
            }
        })

        const divIncrease = document.createElement('div');
        divIncrease.classList.add('modalWindow__increase');
        divIncreaseWrap.append(divIncrease);

        const divIncreaseCloseImgWrap = document.createElement('div');
        divIncreaseCloseImgWrap.classList.add('modalWindow__increase__closeImg_wrap');
        divIncrease.append(divIncreaseCloseImgWrap);
        divIncreaseCloseImgWrap.addEventListener('click', event => {
            animationOut();
        })

        const svgIncreaseCloseNS = "http://www.w3.org/2000/svg";
        const svgIncreaseClose = document.createElementNS(svgIncreaseCloseNS, "svg");
        svgIncreaseClose.setAttribute('width', '22');
        svgIncreaseClose.setAttribute('height', '23');
        svgIncreaseClose.setAttribute('viewBox', '0 0 22 23');
        svgIncreaseClose.setAttribute('fill', 'none');
        svgIncreaseClose.setAttribute('xmlns', svgIncreaseCloseNS);
        divIncreaseCloseImgWrap.append(svgIncreaseClose);

        const svgIncreaseClosePath = document.createElementNS(svgIncreaseCloseNS, 'path');
        svgIncreaseClosePath.setAttribute('d', 'M21 21.8983L1 1.44916M21 1.44916L1 21.8983');
        svgIncreaseClosePath.setAttribute('stroke', '#9797D4');
        svgIncreaseClosePath.setAttribute('stroke-width', '2');
        svgIncreaseClosePath.setAttribute('stroke-linecap', 'round');
        svgIncreaseClose.append(svgIncreaseClosePath);

        const imgIncrease = document.createElement('img');
        imgIncrease.classList.add('modalWindow__increase_img');
        imgIncrease.src = this.pathToImage;
        divIncrease.append(imgIncrease);
    }

}



