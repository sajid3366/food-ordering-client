import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "../sectionHeader/SectionHeader";

export default function HomeMenu() {
  return (
    <section className="my-12">
      <div className="absolute w-full left-0 right-0 ">
        <div className="absolute left-0 -top-32">
          <Image
            src={"/sallad1.png"}
            width={"150"}
            height={"150"}
            alt="salad1"
          ></Image>
        </div>
        <div className="absolute right-0 -top-28">
          <Image
            src={"/sallad2.png"}
            width={"150"}
            height={"150"}
            alt="salad1"
          ></Image>
        </div>
      </div>
      <SectionHeader subHeader={"Check out"} mainHeader={"Our Best Seller"}/>
      <div className="grid grid-cols-3 gap-6 mt-14 px-14">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
