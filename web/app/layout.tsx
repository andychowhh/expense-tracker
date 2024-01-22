import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import { Navbar, Modal } from "@/components";
import ReduxStoreProvider from "../redux/reduxStoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxStoreProvider>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID ?? ""}>
        <html lang="en">
          <body className={inter.className}>
            <Modal />
            <Navbar />
            <main className="px-4">{children}</main>
          </body>
        </html>
      </GoogleOAuthProvider>
    </ReduxStoreProvider>
  );
}
