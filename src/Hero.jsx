import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful cms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            placeat dignissimos repudiandae commodi nihil ex rem error odit,
            quas, aperiam voluptates possimus ducimus temporibus sint cumque
            reprehenderit nobis obcaecati est.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
