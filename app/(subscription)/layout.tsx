"use client";

import Footer from "@/components/FooterSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../globals.css";

export default function Layout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <html>
      <QueryClientProvider client={queryClient}>
        <body className="min-h-screen">
          {children}
          <Footer />
        </body>
      </QueryClientProvider>
    </html>
  );
}
