import axios from 'axios';
import { IGetProductsResponse } from 'models';

const isProduction = process.env.NODE_ENV === 'production';

export const getProducts = async () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Failed to load product data'));
    }, 1000);
  }) as Promise<any>;
};
