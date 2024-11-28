import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ameer Yousuf Ali Bhatti - Software Engineer & Full-Stack Developer",
  description: "Welcome to the portfolio of Ameer Yousuf Ali Bhatti, a passionate software engineer and full-stack developer specializing in MERN stack solutions. Explore innovative projects, cutting-edge web development services, and creative digital solutions tailored to transform your ideas into reality. Contact now to bring your vision to life with expert craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
