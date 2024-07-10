import { useEffect } from 'react';

import { useFetchData } from '@/hooks/useFetchData';
import { fetchThemeProductData } from '@/services/themeProductData';
import { ProductData } from '@/types/productType';

export const useThemeProductData = (themeKey: string) => {
  const {
    data: themeProducts,
    loading,
    error,
    setData,
    setLoading,
    setError,
  } = useFetchData<ProductData[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetchThemeProductData(themeKey);

      if (response.products) setData(response.products);

      if (response.error) setError(response.error);

      setLoading(false);
    };
    fetchData();
  }, [themeKey, setData, setLoading, setError]);

  return { themeProducts, loading, error };
};