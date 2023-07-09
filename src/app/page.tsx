import SectionOne from "./components/landing/sectionOne/SectionOne";
import Navbar from "./components/layout/navbar/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <SectionOne />
    </main>
  );
}
