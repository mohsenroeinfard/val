import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= "bg-sky-500 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
