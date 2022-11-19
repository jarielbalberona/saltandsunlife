import { FacebookProvider, MessageUs } from "react-facebook";

export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // <FacebookProvider appId="505535121299700">
    <section id="shop-layout">
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
      {/* <MessageUs messengerAppId="123456789" pageId="110343801747276" /> */}
    </section>
    // </FacebookProvider>
  );
}
