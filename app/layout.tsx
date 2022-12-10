import React from "react";
import Header from "../components/app/Header";
import "../styles/globals.css";
import "antd/dist/reset.css";
import Footer from "../components/app/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
