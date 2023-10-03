import Container from "./shared/Container";
import Title from "@/components/ui/Title";
import Service from "@/components/ui/CardService";
import data from "@/data/serviceDB";
type Props = {};
const Services = (props: Props) => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Fitness Plans &" titlePrimary="Nutritionts" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {data.map((item) => (
            <div key={item.id}>
              <Service
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Services;
