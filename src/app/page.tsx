import BestGear from "@/components/feature/BestGear";
import FeatureItems from "@/components/feature/FeatureItems";
import FeaturedProducts from "@/components/feature/FeaturedProducts";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="pt-[120px] pb-[168px]">
        <FeatureItems />
      </div>
      <FeaturedProducts />
      <div className="pt-[200px] pb-[200px]">
        <BestGear />
      </div>
    </main>
  );
}
