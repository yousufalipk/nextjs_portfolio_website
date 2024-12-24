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
  description: "Welcome to the official website of Ameer Yousuf Ali Bhatti, a skilled web developer and software engineer based in Pakistan. With years of experience in creating innovative, user-friendly web applications, Ameer is dedicated to delivering high-quality digital solutions. His expertise spans various technologies, including the MERN stack, Vue.js, and full-stack development, ensuring comprehensive, efficient solutions for clients. For any web development or software engineering projects, contact Ameer Yousuf at ameeryousuf.pk@gmail.com or reach out via phone at 03021223335. Whether you're looking to build a dynamic website or enhance your existing systems, Ameer’s technical prowess and commitment to excellence will help bring your ideas to life.",
  keywords: "Ameer Yousuf, Ameer Yousuf Ali Bhatti, Yousuf Bhatti, Web Developer, Software Engineer, Full-Stack Developer, MERN Stack, Vue.js, Contact Ameer Yousuf Ali Bhatti",
  openGraph: {
    title: "Ameer Yousuf Ali Bhatti - Software Engineer & Full-Stack Developer",
    description: "Welcome to the official website of Ameer Yousuf Ali Bhatti, a skilled web developer and software engineer based in Pakistan. Explore innovative, user-friendly solutions.",
    url: "https://ameeryousuf.com", // Replace with your actual URL
    siteName: "Ameer Yousuf Ali Bhatti",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yousufalipk", // Replace with your Twitter handle
    title: "Ameer Yousuf Ali Bhatti - Software Engineer & Full-Stack Developer",
    description: "Welcome to the official website of Ameer Yousuf Ali Bhatti, a skilled web developer and software engineer based in Pakistan.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
