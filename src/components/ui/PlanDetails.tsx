import { cn } from "@/libs/utils";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

type Props = {
  name: string;
  duration: number;
  price: number;
  priceMonth: number;
  active: boolean;
};
const PlanDetails = ({ name, duration, price, priceMonth, active }: Props) => {
  return (
    <div
      className={cn(
        "w-full bg-gray-light/30 p-8 rounded-lg flex flex-col items-center gap-y-10",
        active && "relative border-2 border-primary"
      )}
    >
      {active && (
        <div className="absolute -top-4  bg-primary text-white px-4 py-2 left-1/2 transform -translate-x-1/2">
          <h5>Recommended</h5>
        </div>
      )}
      <h2 className="text-3xl text-white font-medium">{name}</h2>
      <h3>{duration} Month Plan</h3>
      <h1 className="text-5xl font-semibold text-white">${price}</h1>
      <h3>{priceMonth}/Month</h3>
      <ButtonPrimary
        type="button"
        title="Select Plan"
        className="border-2 border-primary bg-transparent hover:bg-transparent w-full"
      />
    </div>
  );
};
export default PlanDetails;
