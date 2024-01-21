import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="flex items-center justify-between gap-x-5 my-12">
            <div className="max-w-xl">
                <h1 className="text-6xl font-semibold leading-[70px]">You can have <br/> a bite of <span className="text-primary">PIZZZZA</span></h1>
                <p className="my-6 text-gray-500">Like you want PIZZZZA, on step further Like want PIZZZZA, on step further Like you, on step further. Like you want PIZZZZA, on step further. Like you want PIZZZZA, on step further</p>
                <div className="flex gap-5 items-center">
                    <button className="bg-primary px-5 py-2 text-white rounded-full flex gap-2">
                        Order Now
                        <Right />
                    </button>
                    <button className="flex gap-2 text-gray-500 font-semibold ">
                        Learn More
                        <Right />
                    </button>
                </div>
            </div>

            <div className="relative">
                <Image src={"/pizza.png"} width="500" height="500" objectFit="contain" alt="Pizza"></Image>
            </div>
        </section>
    );
}