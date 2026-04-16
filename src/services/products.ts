import axios from 'axios';
import { IProduct } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  const response = await axios.get<{ data: { products: IProduct[] } }>(
    isProduction ? '/products.json' : '/static/json/products.json'
  );
  return response.data.data.products;
};
