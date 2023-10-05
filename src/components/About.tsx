import Container from "@/components/shared/Container";
import Title from "@/components/ui/Title";
import ButtonPrimary from "./ui/ButtonPrimary";
import Image from "next/image";
type Props = {};
const About = (props: Props) => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Why Join With" titlePrimary="Us?" />
        <div className="flex items-center justify-between">
          <article className="flex-1 flex flex-col items-center gap-8">
            <ul className="list-disc marker:text-primary space-y-4 text-xl">
              <li>Best Gym</li>
              <li>Experts Coach</li>
              <li>Flexible Workout Time</li>
              <li>Good Workout Facilities</li>
              <li>Consultation With Experts</li>
            </ul>
            <ButtonPrimary type="button" title="See More Benifits" />
          </article>
          <article className="flex-1 relative">
            <div className="absolute -top-40 left-8">
              <div className="relative w-48 h-72">
                <Image
                  src="/images/trainer-1.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute top-0 right-8">
              <div className="relative w-48 h-72">
                <Image
                  src="/images/trainer-2.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute top-20 left-40">
              <div className="relative w-72 h-48">
                <Image
                  src="/images/trainer-3.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
export default About;
