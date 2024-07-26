import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PageWrapper from "./page-wrapper";
import NewSection from "@/components/NewSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <PageWrapper> */}
        {/* <HeroSection /> */}
        <NewSection />
      {/* </PageWrapper> */}
    </div>
  )
}