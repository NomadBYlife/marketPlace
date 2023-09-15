const showCartWrap = document.getElementsByClassName('modalWindow_wrap')[0];
const showCart = document.getElementsByClassName('modalWindow')[0];
const showCartContainer = document.getElementsByClassName('modalWindow__container')[0];
const allCards = document.getElementsByClassName('modalWindow__cards')[0];
const deleteAll = document.getElementsByClassName('modalWindow__subtotal_btn')[0];
const subTotalPriceP = document.getElementsByClassName('modalWindow__subtotalPrice')[0];
const storeKey = 'picked_items';

class ShoppingCart {
    /* key = product id, value = count */
    picked_products = {};

    /* key=product id, value = product */
    all_products = {};

    count(){
        let count = 0;
        for(var p in this.picked_products){
            count+=this.picked_products[p];
        }
        return count;
    }

    redrawIcon(){
        const count = this.count();
        let countWrapper = document.getElementsByClassName('header__shopCart_counter')[0];
        let countNumber = document.getElementsByClassName('header__shopcart_count')[0];
        if (count==0){
            countWrapper.style = `display:none`;
        }else{
            countWrapper.style = `display:block`;
            countNumber.innerHTML = count;
        }
        
    }

    saveToStorage(){
        window.localStorage.setItem(storeKey,JSON.stringify(this.picked_products));
    }

    add(productId){

        if (!!this.picked_products[productId]){
            this.picked_products[productId]++;
        }else{
            this.picked_products[productId] = 1;
        }
        this.saveToStorage();
        this.redrawIcon();
    }

    remove(productId){        
        if (!!this.picked_products[productId]){
            this.picked_products[productId]--;
        }else{
            this.picked_products[productId] = 0;
        }
        this.saveToStorage();
        this.redrawIcon();
    }

    registerProduct(product){
        this.all_products[product.id] = product;
    }

    redrawCart(){
        if (this.count()==0){
            allCards.innerHTML = '<p class="modalWindow__emptyCart_text" style="display:inline;">Cart is empty.</p>';
        }else{
            allCards.innerHTML = '';
            for (var k in this.picked_products){
                var kCount = this.picked_products[k];
                var kProduct = this.all_products[k];
                if (!kProduct) continue;
                if (kCount>0){
                    
                    var cardDiv = document.createElement('div');
                    cardDiv.className = 'modalWindow__card';
                    cardDiv.innerHTML = this.getProductHTML(kProduct, kCount);
                    const removeCross = cardDiv.getElementsByClassName('modalWindow__card_closeImgWrap')[0];
                    const currentId = kProduct.id;
                    removeCross.addEventListener('click',(function(){
                        
                        this.remove(currentId);
                        this.redrawCart();
                    }).bind(this));

                    allCards.appendChild(cardDiv);
                }
            }
        }
        subTotalPriceP.innerHTML = this.totalPrice().toFixed(2);
    }

    showCart(){
        showCart.style.display = 'block';
        showCartContainer.style.display = 'block';
        showCartWrap.style.display = 'block';

        this.redrawCart();
    }

    constructor(){
        const cartBtn =document.getElementsByClassName('header__shopCart_iconWrap')[0];
        cartBtn.addEventListener('click', this.showCart.bind(this));

        const closeBtn = document.getElementsByClassName('modalWindow__closeImg_wrap')[0];
        closeBtn.addEventListener('click', this.hiddenCart.bind(this));

        deleteAll.addEventListener('click',this.deleteAll.bind(this));

        let storedItems = window.localStorage.getItem(storeKey);
        if (!!storedItems){
            this.picked_products = JSON.parse(storedItems);
        }
    }

    hiddenCart(){
        showCart.style.display = 'none';
        showCartContainer.style.display = 'none';
        showCartWrap.style.display = 'none';
    }

    getProductHTML(product, quanity){
        return `
        <div class="modalWindow__card_closeImgWrap">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11L1 1M11 1L1 11" stroke="#9797D4" stroke-width="2" stroke-linecap="round"></path>
            </svg>

        </div>
        <div class="modalWindow__card_imgWrap">
            <img class="modalWindow__img" src="${product.pathToImage}" alt="">
        </div>
        <div class="modalWindow__description_flexWrap">
            <div class="modalWindow__description_wrap">
                <p class="modalWindow__description"> ${product.description}</p>
                <p class="modalWindow__description" style="float:  right;">x ${quanity}</p>
            </div>
            <div class="modalWindow__price_wrap">
                <p class="modalWindow__price">${product.price.toFixed(2)}</p>
                <p class="modalWindow__price_currency">byn</p>
            </div>
        </div>`;
    }

    deleteAll(){
        this.picked_products = {};
        this.saveToStorage();
        this.redrawIcon();
        this.redrawCart();
    }

    totalPrice(){
        let total = 0;
        for (var p in this.picked_products){
            if (!this.all_products[p]) continue;
            let quanity = this.picked_products[p];
            let price = this.all_products[p].price;
            total += quanity*price;
        }
        return total;
    }

}

const cart = new ShoppingCart();

export default cart;