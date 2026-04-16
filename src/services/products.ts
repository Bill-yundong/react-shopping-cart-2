import { IProduct } from 'models';
import productsData from '../static/json/products.json';

export const getProducts = (): Promise<IProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData.data.products as IProduct[]);
    }, 1000);
  });
};
