import BestGear from "@/components/feature/BestGear";
import FeatureItems from "@/components/feature/FeatureItems";
import FeaturedProducts from "@/components/feature/FeaturedProducts";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureItems />
      <FeaturedProducts />
      <div className="pt-[200px] pb-[200px]">
        <BestGear />
      </div>
    </main>
  );
}