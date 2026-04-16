import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  if (isProduction) {
    const response = await axios.get<IGetProductsResponse>(
      'https://react-shopping-cart-67954.firebaseio.com/products.json'
    );
    return response.data.data.products;
  }

  const data = await import('static/json/products.json');
  return data.default.data.products as any;
};
