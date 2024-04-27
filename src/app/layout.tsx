'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";

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
      <body>
        <Provider store={store} >
        {children}
        </Provider>
        </body>
    </html>
  );
}
