import {Product} from "./Product";

export class ProductList {
    // Create a new product list.
    constructor() {
        this.productsList = []
    }

    addProduct(pathToImage, description, price) {
        // Add a new product to the list.
        const product = new Product(pathToImage, description, price)
        this.productsList.push(product)
    }

    renderList(insertedElement) {
        // Displaying a list of products on the page
        const targetElement = document.querySelector(`.${insertedElement}`)
        if (!targetElement) {
            console.log("Target not found")
            return;
        }
        this.#displayProduct(this.productsList, targetElement)
    }

    search() {
        // Searching by productsList
        const input = document.querySelector('.header__searchInput')
        if (!input) {
            console.log("Search input not found");
            return;
        }
        const targetElement = document.querySelector('.bestSelling__cards');
        if (!targetElement) {
            console.log("Target element for products not found");
            return;
        }
        input.addEventListener('input', () => {
            const query = input.value.toLowerCase();
            const filteredProduct = this.productsList.filter(product => product.description.toLowerCase().includes(query));
            console.log(filteredProduct)

            targetElement.innerHTML = ""
            this.#displayProduct(filteredProduct, targetElement)
        })

    }

    #displayProduct(list, targetElement) {
        list.forEach(product => {
            const productElement = product.render();
            targetElement.append(productElement)
        })
    }
}
