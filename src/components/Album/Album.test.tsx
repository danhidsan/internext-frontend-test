import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

import usePhotos from './usePhotos';

const queryClient = new QueryClient();
const wrapper: FC<{children: ReactNode}> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

test('usePhotos render', async () => {
  const { result } = renderHook(() => usePhotos(), { wrapper });

  const notEmtpy = result.current.photos.length > 0;

  expect(notEmtpy).toBe(false);
  expect(result.current.isLoading).toBe(true);
})