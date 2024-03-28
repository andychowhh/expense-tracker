import { cookies } from "next/headers";

export const isGuest = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  return accessToken === undefined || accessToken?.value === "";
};
