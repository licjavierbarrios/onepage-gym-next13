import Container from "@/components/shared/Container";
import Title from "@/components/ui/Title";
import SectionList from "@/components/about/sections/SectionList";
import SectionImages from "@/components/about/sections/SectionImages";
type Props = {};
const About = (props: Props) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Why Join With" titlePrimary="Us?" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <SectionList />
          <SectionImages />
        </div>
      </Container>
    </section>
  );
};
export default About;
