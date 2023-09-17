class Cart {
    constructor() {
        this.storeKey = 'cartItems';
        let storedItems = window.localStorage.getItem(this.storeKey);
        this.items = storedItems ? JSON.parse(storedItems) : {};
        this.updateCountIcon()
    }

    add(product) {
        /** Добавляет продукт в корзину. Если продукт уже есть, увеличивает его количество. **/
        if (this.items[product.id]) {
            this.items[product.id].quantity++;
        } else {
            this.items[product.id] = {
                product: product,
                quantity: 1
            };
        }
        this.updateCountIcon();
        this.saveToStorage();
        this.redrawCart()
        return this.items[product.id].quantity
    }

    remove(product) {
        /** Удаляет продукт из корзины. **/
        if (this.items[product.id]) {
            this.items[product.id].quantity--;
            if (this.items[product.id].quantity === 0) {
                delete this.items[product.id];
                this.updateCountIcon();
                this.saveToStorage();
                this.redrawCart()
                return 0

            }
        }
        this.updateCountIcon();
        this.saveToStorage();
        this.redrawCart()
        return this.items[product.id] ? this.items[product.id].quantity : 0;
    }

    updateCountIcon() {
        /** Обновляет иконку корзины(цифру). **/
        let totalCount = 0;

        for (let itemKey in this.items) {
            totalCount += this.items[itemKey].quantity;
        }

        let countWrapper = document.querySelector('.header__shopCart_counter');
        let countNumber = document.querySelector('.header__shopcart_count');

        if (totalCount === 0) {
            countWrapper.style.display = 'none';
        } else {
            countWrapper.style.display = 'block';
            countNumber.textContent = totalCount;
        }
    }

    saveToStorage() {
        /** Сохраняет в ЛокалСтор*/
        window.localStorage.setItem(this.storeKey, JSON.stringify(this.items));
    }

    redrawCart() {
        /** Отрисовать карточки в корзине */
        const allCards = document.querySelector('.modalWindow__cards')
        const subTotalPrice = document.querySelector('.modalWindow__subtotalPrice');
        if (Object.keys(this.items).length === 0) {
            allCards.innerHTML = '<p class="modalWindow__emptyCart_text" style="display:inline;">Cart is empty.</p>';
        } else {
            allCards.innerHTML = '';
            for (let item in this.items) {
                let product = this.items[item];
                let cardForCart = this.buildHtmlTag(product)
                allCards.append(cardForCart)
            }
        }
        const productsPrice = this.totalPrice().toFixed(2);
        const parts = productsPrice.split(".");
        const integerPart = parseInt(parts[0], 10);
        const fractionalPart = parts[1] ? parts[1].padStart(2, '0') : '00';
        subTotalPrice.innerHTML = `${integerPart}.<span class="modalWindow__subtotalPrice_span">${fractionalPart}</span>`
    }

    totalPrice() {
        /** Посчитать общую сумму в корзине */
        let total = 0;
        for (let product in this.items) {
            if (!this.items[product]) continue;
            let quantity = this.items[product]['quantity'];
            let price = this.items[product]['product'].price;
            total += quantity * price;
        }
        return total;
    }

    deleteAll() {
        /** Удалить все карточки в корзине */
        this.items = {};
        this.saveToStorage();
        this.updateCountIcon();
        this.redrawCart();

    }

    buildHtmlTag(product) {
        const card = document.createElement('div');
        card.classList.add('modalWindow__card');

        const flexWrap = document.createElement('div');
        flexWrap.classList.add('modalWindow__flexWrap');
        card.append(flexWrap);

        const imgWrap = document.createElement('div');
        imgWrap.classList.add('modalWindow__card_imgWrap');
        const img = document.createElement('img');
        img.classList.add('modalWindow__img');
        img.setAttribute('src', product['product'].pathToImage);
        img.setAttribute('alt', '');
        imgWrap.append(img);
        flexWrap.append(imgWrap);

        const descriptionFlexWrap = document.createElement('div');
        descriptionFlexWrap.classList.add('modalWindow__description_flexWrap');

        const descriptionWrap = document.createElement('div');
        descriptionWrap.classList.add('modalWindow__description_wrap');
        const descriptionText = document.createElement('p');
        descriptionText.classList.add('modalWindow__description');
        descriptionText.textContent = product['product'].description;
        descriptionWrap.append(descriptionText);

        const priceWrap = document.createElement('div');
        priceWrap.classList.add('modalWindow__price_wrap');
        const price = document.createElement('p');
        price.classList.add('modalWindow__price');
        const productPrice = product['product'].price * product['quantity']
        const parts = productPrice.toFixed(2).split(".");
        const integerPart = parseInt(parts[0], 10);
        const fractionalPart = parts[1] ? parts[1].padStart(2, '0') : '00';
        price.innerHTML = `${integerPart}.<span class="modalWindow__price_span">${fractionalPart}</span>`;
        const currency = document.createElement('p');
        currency.classList.add('modalWindow__price_currency');
        currency.textContent = 'BYN';
        priceWrap.append(price, currency);

        descriptionFlexWrap.append(descriptionWrap, priceWrap);
        flexWrap.append(descriptionFlexWrap);

        const quantityWrap = document.createElement('div');
        quantityWrap.classList.add('modalWindow__quantity_wrap');
        quantityWrap.setAttribute('data-id', product['product'].id);
        const btnPlus = document.createElement('button');
        btnPlus.classList.add('modalWindow__quantity_btnPlus');
        btnPlus.textContent = '+';
        const quantity = document.createElement('p');
        quantity.classList.add('modalWindow__quantity');
        quantity.textContent = product['quantity'];
        const btnMinus = document.createElement('button');
        btnMinus.classList.add('modalWindow__quantity_btnMinus');
        btnMinus.textContent = '-';

        quantityWrap.addEventListener('click', event => {
            const productId = event.currentTarget.getAttribute('data-id');
            const productObj = this.items[productId];
            if (!productObj) return;
            if (event.target === btnPlus) {
                quantity.innerHTML = this.add(productObj.product);
                //
            }
            if (event.target === btnMinus) {
                quantity.innerHTML = this.remove(productObj.product);
            }
        })

        quantityWrap.append(btnPlus, quantity, btnMinus);
        card.append(quantityWrap);
        return card
    }

}

export const cart = new Cart()