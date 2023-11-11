"use client";

import Link from "next/link";
import { styled } from "styled-components";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <NavBar>
          <NLink href="/">Home</NLink>
          <NLink href="/movie">Movies</NLink>
          <NLink href="/counter">Counter</NLink>
        </NavBar>
        {children}
      </body>
    </html>
  );
}

const NavBar = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 26px;
  border-bottom: 1px solid darkgrey;
`;

const NLink = styled(Link)`
  margin: 0px 10px;
`;
