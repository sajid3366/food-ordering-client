import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 rounded-md py-5 px-8 text-center space-y-2 hover:bg-white hover:shadow-md shadow-black/20 transition-all duration-300">
      <div className="flex justify-center">
        <Image src={"/pizza.png"} alt="pizza" width={150} height={150}></Image>
      </div>
      <h4 className="text-xl font-semibold">Paperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Make sure your Next.js and React packages are up-to-date. You can do
        this by running npm outdated{" "}
      </p>
      <button className="bg-primary px-8 py-2 rounded-full text-white">
        Add to Cart $10
      </button>
    </div>
  );
}
