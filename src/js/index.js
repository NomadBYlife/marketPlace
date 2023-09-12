import '../style/style.scss'
import { counterId, Product } from './Product.js';


const card1 = new Product('../images/card1.jpg', 'Блендер Sakura', '79.00');

card1.render();

const card2 = new Product('../images/card2.jpg', 'Сушилка для овощей и фруктов Normann', '136.00');
card2.render();

const card3 = new Product('../images/card3.jpg', 'Газонокосилка Patriot', '1382.00');
card3.render();

const card4 = new Product('../images/card4.jpg', 'Кухонный комбайн АМКОДОР-БЕЛВАР', '250.00');
card4.render();

const card5 = new Product('../images/card5.jpg', 'Кухонный нож поварской Taller', '49.00');
card5.render();

const card6 = new Product('../images/card6.jpg', 'Кухонные ножницы Huo Hou', '20.00');
card6.render();

const card7 = new Product('../images/card7.jpg', 'Вертикальный пылесос Deerma DX700 Plus', '124.00');
card7.render();

const card8 = new Product('../images/card8.jpg', 'Телевизор LG 50UQ75006LF', '1296.55');
card8.render();