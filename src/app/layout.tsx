'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
    });

    return () => unsubscribe(); // Cleanup subscription on app unmount
  }, []);
  return (
    <html lang="en">
      <body className=" bg-[#f1f0fa]" >
        <Provider store={store} >
          <div>
            <Navbar/>
          {children}
          </div>
        </Provider>
        </body>
    </html>
  );
}
