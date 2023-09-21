import BestGear from "@/components/feature/BestGear";
import FeatureItems from "@/components/feature/FeatureItems";
import FeaturedProducts from "@/components/feature/FeaturedProducts";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="pt-[120px] pb-[168px] xs:pt-[92px] xs:pb-[120px] sm:pt-[100px] sm:pb-[96px] xs:mx-auto xs:w-[91.75%] sm:w-[91.5%] sm:mx-auto md:w-[91.5%] md:mx-auto lg:w-[91.5%] lg:mx-auto">
        <FeatureItems />
      </div>
      <FeaturedProducts />
      <div className="pt-[200px] pb-[200px] xs:py-[120px] sm:py-[100px] md:py-[100px] xs:mx-auto xs:w-[91.75%] sm:w-[91.5%] sm:mx-auto md:w-[91.5%] md:mx-auto lg:w-[91.5%] lg:mx-auto">
        <BestGear />
      </div>
    </main>
  );
}
