export class Cart {
    constructor() {
        this.storeKey = 'cartItems';

        let storedItems = window.localStorage.getItem(this.storeKey);
        this.items = storedItems ? JSON.parse(storedItems) : {};
        this.updateCountIcon()

    }

    add(product) {
        /** Добавляет продукт в корзину. Если продукт уже есть, увеличивает его количество. **/
        // debugger
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
        return this.items[product.id].quantity
    }


    remove(product) {
        // debugger
        /** Удаляет продукт из корзины. **/
        if (this.items[product.id]) {
            this.items[product.id].quantity--;
            if (this.items[product.id].quantity === 0) {
                delete this.items[product.id];
                this.updateCountIcon();
                this.saveToStorage();
                return 0

            }
        }
        this.updateCountIcon();
        this.saveToStorage();
        return this.items[product.id] ? this.items[product.id].quantity : 0;
    }


    updateCountIcon() {
        /** Обновляет интерфейс корзины. **/
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
}
