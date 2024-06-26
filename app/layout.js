import AuthProvider from "./components/AuthProvider";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-gray-100">
          <Navigation></Navigation>
          <main className="m-2">{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
