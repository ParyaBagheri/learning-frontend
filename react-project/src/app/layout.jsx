export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <head>
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
          <title>react-project</title>
        </head>
        <body>
          <div id="root">{children}</div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>
  );
}