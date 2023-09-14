import {Product} from "./Product";

export class ProductList {
    constructor() {
        this.productsList = []
    }

    addProduct(pathToImage, description, price) {
        const product = new Product(pathToImage, description, price)
        this.productsList.push(product)
    }

    renderList(insertedElement) {
        const targetElement = document.querySelector(`.${insertedElement}`)
        if (!targetElement) {
            console.log("Target not found")
            return;
        }

        this.productsList.forEach(product => {
                const productElement = product.render();
                targetElement.append(productElement);
            }
        )
    }
}