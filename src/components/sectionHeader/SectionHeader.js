export default function SectionHeader({ subHeader, mainHeader }) {
  return (
    <div className="text-center">
      <h2 className="text-gray-500 font-semibold uppercase">{subHeader}</h2>
      <h1 className="text-primary font-bold text-4xl italic">
        {mainHeader}
      </h1>
    </div>
  );
}
