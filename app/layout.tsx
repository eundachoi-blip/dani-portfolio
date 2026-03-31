import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import { EditProvider } from "./providers/edit-provider";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dani — Designer",
  description: "AI, UX, Interaction",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'Pretendard';
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-Regular.min.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Pretendard';
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-Bold.min.woff2') format('woff2');
          }
        ` }} />
        {/* 테마 flash 방지: 첫 렌더 전에 localStorage 값 적용 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <EditProvider>
            {children}
          </EditProvider>
        </ThemeProvider>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </body>
    </html>
  );
}
