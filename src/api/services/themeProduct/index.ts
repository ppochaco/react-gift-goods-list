import { BACKEND_API } from '@/api/instance';
import { API_ERROR_MESSAGES } from '@/constants/errorMessage';
import { ProductData } from '@/types/productType';

import { GetProductsRequest, GetProductsResponse } from './types';

export const fetchThemeProduct = async (
  themeKey: string,
  pageParam: number
) => {
  try {
    const params: GetProductsRequest = {
      pageToken: pageParam.toString(),
      maxResults: 20,
    };

    const response = await BACKEND_API.get<GetProductsResponse>(
      `/api/v1/themes/${themeKey}/products`,
      { params }
    );

    return response.data.products as ProductData[];
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error(API_ERROR_MESSAGES.UNKNOWN_ERROR);
  }
};
