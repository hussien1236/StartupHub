import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import 'easymde/dist/easymde.min.css'
import { Toaster } from "@/components/ui/sonner";

const workSans = localFont({
  src:[
    {
      path: './Fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-Thin.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './Fonts/WorkSans-ExtraLight.ttf',
      weight: '100',
      style: 'normal'
    }
  ],
   variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
        <Toaster theme="light"/>
      </body>
    </html>
  );
}
