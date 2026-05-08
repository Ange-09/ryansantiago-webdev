import Nav from "./a-components/nav/Nav";
import Footer from "./a-components/footer/Footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <Nav />
  {children}
  <Footer />
  </>;
}