import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="my-12">
            <div className="absolute w-full left-0 right-0">
                <div className="absolute left-0 -top-10">
                    <Image src={'/sallad1.png'} width={'150'} height={'150'} alt="salad1"></Image>

                </div>
                <div className="absolute right-0 -top-20">
                    <Image src={'/sallad2.png'} width={'150'} height={'150'} alt="salad1"></Image>

                </div>
            </div>
            <div className="text-center">
                <h2 className="text-gray-500 font-semibold uppercase">Check Out</h2>
                <h1 className="text-primary font-bold text-4xl italic">Our Best Sellers</h1>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-14 px-14">
                <div className="bg-gray-300 rounded-sm py-5 px-8">
                    <Image alt="pizza"></Image>
                    <p>Make sure your Next.js and React packages are up-to-date. You can do this by running npm outdated </p>
                </div>
            </div>
        </section>
    );
}