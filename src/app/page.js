import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/sectionHeader/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section>
        <SectionHeader subHeader={"story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto space-y-2 mt-5 text-center">
          <p>
            Make sure your Next.js and React packages are up-to-date. You can do
            this by running npm outdated. Make sure your Next.js and React
            packages are up-to-date. You can do this by running npm outdated
          </p>
          <p>
            Make sure your Next.js and React packages are up-to-date. You can do
            this by running npm outdated. Make sure your Next.js and React
            packages are up-to-date. You can do this by running npm outdated
          </p>
          <p>
            Make sure your Next.js and React packages are up-to-date. You can do
            this by running npm outdated.
          </p>
        </div>
      </section>
    </>
  );
}
