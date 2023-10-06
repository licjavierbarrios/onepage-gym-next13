import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import Section from "@/components/footer/components/section";
import Tags from "@/components/footer/components/Tags";
type Props = {};
const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-light/20">
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10 px-5 py-10 lg:px-8 lg:py-20">
        <Logo />

        <Section title="Company" list={["About", "Carrers", "Blog"]} />
        <Section title="Company" list={["Help / FAQ", "Press"]} />
        <Section title="Company" list={["Program", "Plan", "Method"]} />
        <section>
          <h5 className="text-2xl font-semibold text-white mb-5">
            Popular tags
          </h5>
          <div className="flex items-center gap-2 flex-wrap">
            <Tags title="Abs" />
            <Tags title="Workout" />
            <Tags title="Nutrition" />
            <Tags title="Boxing" />
            <Tags title="Gym" />
            <Tags title="Facilities" active />
            <Tags title="Plans" />
            <Tags title="Trainers" />
          </div>
        </section>
      </Container>
      <div className="bg-primary text-white p-5 text-center">
        <h5>&copy; 2023 All Rights Reserved</h5>
      </div>
    </footer>
  );
};
export default Footer;
