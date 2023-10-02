import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import MainMenu from "@/components/shared/MainMenu";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 w-full p-5 z-40">
      <Container className="flex items-center justify-between">
        <section>
          <Logo />
        </section>
        <section>
          <MainMenu />
        </section>
      </Container>
    </header>
  );
};
export default Header;
