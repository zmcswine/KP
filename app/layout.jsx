import './globals.css';

export const metadata = {
  title: 'KP | Press Photos',
  description: 'Press photos and contact for KP',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
