import "css/tailwind.css";
import "pliny/search/algolia.css";
import "css/font.css";
import { Space_Grotesk } from "next/font/google";
import { Analytics, AnalyticsConfig } from "pliny/analytics";
import { SearchProvider, SearchConfig } from "pliny/search";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import Footer from "@/components/Footer";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProviders } from "../theme-providers";
import { Metadata } from "next";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const fluidFont = localFont({
  src: "../liquido-fluid.otf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html
      lang={locale}
      className={`${fluidFont.className} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#11458d" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <body className="pl-[calc(100vw-100%)] text-black antialiased dark:text-white 
    bg-gradient-to-r from-orange-50 to-white dark:from-blue-950 dark:to-indigo-950 scroll-smooth">
        <ThemeProviders>
          <Analytics
            analyticsConfig={siteMetadata.analytics as AnalyticsConfig}
          />
          <div className="z-5 flex h-screen flex-col justify-between font-sans ">
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <div className="fixed left-0 right-0 top-0 z-50 mx-auto px-4 md:px-8 lg:px-16">
                <Header locale={locale} fluidFont={fluidFont} />
              </div>
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
