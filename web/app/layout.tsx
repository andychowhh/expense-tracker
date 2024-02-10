import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import { Navbar, Modal } from "@/components";
import ReduxStoreProvider from "../redux/reduxStoreProvider";
import { UserContextProvider } from "../context/UserContext";
import { getCookie } from ".././utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await axios.get("http://backend:3001/auth/me", {
  //   params: {
  //     jwtToken: await getCookie("accessToken"),
  //   },
  // });
  const userProfileRes = await fetch(`${process.env.WEB_URL}/api/auth/me?jwtToken=${await getCookie("accessToken")}`);
  const user = await userProfileRes.json();
  
  return (
    <ReduxStoreProvider>
      <UserContextProvider value={user}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID ?? ""}>
          <html lang="en">
            <body className={inter.className}>
              <Modal />
              <Navbar />
              <main className="px-4">{children}</main>
            </body>
          </html>
        </GoogleOAuthProvider>
      </UserContextProvider>
    </ReduxStoreProvider>
  );
}
