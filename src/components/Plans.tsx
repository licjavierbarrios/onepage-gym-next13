import Container from "./shared/Container";
import PlanDetails from "./ui/PlanDetails";
import Title from "./ui/Title";
import plans from "@/data/plansDB";

type Props = {};
const Plans = (props: Props) => {
  return (
    <section
      id="plans"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Subscribe To" titlePrimary="Plans" />
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {
            plans.map((plan) => (
              <PlanDetails
                key={plan.id}
                name={plan.name}
                duration={plan.duration}
                price={plan.price}
                priceMonth={plan.priceMonth}
                active={plan.active}
              />
            ))
          }
         
        </div>
      </Container>
    </section>
  );
};
export default Plans;
