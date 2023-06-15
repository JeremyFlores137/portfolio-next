import useSWR, { SWRConfiguration } from 'swr';
import useSWRMutation from 'swr/mutation'

const fetcher = (...args: [key: string]) =>
  fetch(...args).then((res) => res.json());

export const usePrompt = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR(`${url}`, fetcher, config);

  return {
    result: data,
    isLoading: !error && !data,
    isError: error,
  };
};
