import "./globals.css";
import type { Metadata } from 'next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <h1>My Nav bar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
