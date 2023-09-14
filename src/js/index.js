import '../style/style.scss'
import {ProductList} from './ProductLIst.js';
import {domManipulation} from './domManipulation.js'

domManipulation()

const productList = new ProductList()
productList.addProduct('../images/card1.jpg', 'Блендер Sakura', '79.00')
productList.addProduct('../images/card2.jpg', 'Сушилка для овощей и фруктов Normann', '136.00')
productList.addProduct('../images/card3.jpg', 'Газонокосилка Patriot', '1382.00')
productList.addProduct('../images/card4.jpg', 'Кухонный комбайн АМКОДОР-БЕЛВАР', '250.00')
productList.addProduct('../images/card5.jpg', 'Кухонный нож поварской Taller', '49.00')
productList.addProduct('../images/card7.jpg', 'Вертикальный пылесос Deerma DX700 Plus', '124.00')
productList.addProduct('../images/card8.jpg', 'Телевизор LG 50UQ75006LF', '1296.55')
productList.addProduct('../images/card6.jpg', 'Кухонные ножницы Huo Hou', '20.00')
productList.renderList("bestSelling__cards")