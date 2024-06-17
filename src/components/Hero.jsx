
import hero from "../assets/images/hero1.png";

const Hero = () => {
  const social_media = [
    {
      name: "GitHub",
      url: "https://github.com/memedjjebri",
      icon: "logo-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/feed/",
      icon: "logo-linkedin",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="m-12 lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
        <img
          src={hero}
          alt=""
          className="w-full object-cover bg-cyan-600 rounded-xl"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>JEBRI Mohamed</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media.map((item) => (
              <a
                key={item.icon}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
