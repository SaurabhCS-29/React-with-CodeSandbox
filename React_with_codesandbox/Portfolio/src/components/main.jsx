import Nav from "./nav";
import Hero from "./hero";
import About from "./about";

const main = () => {
  return (
    <>
      <div className="bg-gray-900">
        <Nav />
        <Hero />
        <About />
      </div>
    </>
  );
};

export default main;
