import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import "./globals.css";

export const metadata = {
  title: "WEEKSAWAY - Travel With Us",
  description: "Treat yourself to a nice vacation!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
