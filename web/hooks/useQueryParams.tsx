import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const useQueryParams = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return {
    getQueryParam: (key: string) => {
      return searchParams.get(key);
    },
    updateQueryParams: (key: string, value: string) => {
      push(pathname + "?" + createQueryString(key, value));
    },
  };
};
