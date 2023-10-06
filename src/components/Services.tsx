import Container from "@/components/shared/Container";
import Title from "@/components/ui/Title";
import Service from "@/components/ui/CardService";
import services from "@/data/serviceDB";
type Props = {};
const Services = (props: Props) => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center mb-10 lg:mb-0"
    >
      <Container>
        <Title title="Fitness Plans &" titlePrimary="Nutritionts" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {services.map((service) => (
            <div key={service.id}>
              <Service
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Services;
