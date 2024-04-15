import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Navbar, SideBar } from "@/components";
import { UserContextProvider } from "../context/UserContext";
import { getCookie } from ".././utils";
import "./globals.css";
import { GuestAlert } from "@/components/GuestAlert";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinTrack - Your Financial Tracker",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = await getCookie("accessToken");

  return (
    <UserContextProvider accessToken={accessToken}>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID ?? ""}>
        <html lang="en">
          <body className={inter.className}>
            {!Boolean(accessToken) && <GuestAlert />}
            <Navbar />
            <div className="flex bg-gray-100">
              <SideBar />
              <main className="flex-1 px-8 py-3 h-full max-w-full">{children}</main>
            </div>
            <SpeedInsights />
          </body>
        </html>
      </GoogleOAuthProvider>
    </UserContextProvider>
  );
}
