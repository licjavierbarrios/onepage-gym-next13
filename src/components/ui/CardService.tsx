import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};
const CardService = ({ image: imageSrc, title, description }: Props) => {
  return (
    <div className="space-y-5 flex flex-col items-center">
      <div className="relative w-20 h-20">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-center max-w-sm">{description}</p>
    </div>
  );
};
export default CardService;
