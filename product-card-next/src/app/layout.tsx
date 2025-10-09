import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Сладкий сундук</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
