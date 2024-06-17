

const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
            <p>
              As a Web developers, I typically work on creating and maintaining
              websites and web applications, focusing on front-end design,
              back-end functionality, and ensuring performance and security. I
              use a variety of tools and technologies like HTML, CSS,
              JavaScript, databases, and frameworks to build responsive, and
              efficient web solutions.
            </p>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
