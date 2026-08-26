import "./globals.css";
import Header from "@/components/Header.jsx";
import { ViewTransition } from 'react';
import { ThemeProvider } from "next-themes";

export const metadata = {
  title : 'portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider>
          <Header />
          <ViewTransition>
            <main> {children}. </main>
          </ViewTransition>
        </ThemeProvider>

      </body>
    </html>
  );
}
