import Image from "next/image";
import Container from "@/components/shared/Container";
import ButtonPrimary from "@/components/ui/ButtonPrimary";

const Hero = () => {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <Image
          src="/images/hero.png"
          alt="hero"
          fill
          className="object-cover"
        />
        <Container>
          <div className="absolute bg-gradient-to-tr from-black to-transparent left-0 top-0 w-full h-full"></div>
          <div className="absolute top-1/2 -translate-y-1/2 space-y-10">
            <h1 className="text-white text-6xl font-semibold">
              Your body <br /> Will transform{" "}
            </h1>
            <p className="text-gray-500">
              We are commited to helping you transform your life <br />
              as part of commitmentto you.
            </p>
            <div className="flex items-center gap-4">
              <ButtonPrimary type="button" title="Get started" />
              <ButtonPrimary
                type="button"
                title="Watch reviews"
                className="border-2 border-primary bg-transparent hover:bg-transparent"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
