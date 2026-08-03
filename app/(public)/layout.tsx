import "./../globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { LanguageProvider } from "./providers/LanguageProvider";
import "highlight.js/styles/github.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <Navbar/>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
