import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Header />
    </main>
  );
}
