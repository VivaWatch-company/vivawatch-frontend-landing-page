"use client";

import Footer from "@/components/FooterSection";

export default function SubscriptionLayout(props: {
  children: React.ReactNode;
}) {
  const { children } = props;
  return (
    <html>
      <body className="min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
