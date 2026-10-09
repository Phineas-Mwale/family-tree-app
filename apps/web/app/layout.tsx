import './globals.css';

export const metadata = {
  title: 'FamilyConnect',
  description: 'Private family connection app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
