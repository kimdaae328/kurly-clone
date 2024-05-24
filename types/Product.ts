import rawData from '../api/product.json';

export interface Product {
    name: string;
    poster: string;
    before: number;
    sales: number;
    price: number;
    review: number;
}  

const productData: Product[] = rawData.map(item => ({
...item,
before: Number(item.before),
sales: Number(item.sales),
price: Number(item.price),
review: Number(item.review),
}));

export default productData;