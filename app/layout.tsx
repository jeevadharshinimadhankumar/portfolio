import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 antialiased">{children}</body>
    </html>
  );
}
