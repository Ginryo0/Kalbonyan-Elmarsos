// import SectionWrapper from './SectionWrapper';
import teslas from '../assets/tesla';

const TeslaSection = () => {
  return (
    <section className="w-full h-screen grid md:grid-cols-3 gap-0">
      <div className="md:flex flex-col gap-0 hidden h-screen">
        {teslas.col1.map((t, idx) => (
          <div key={idx} className="h-1/3">
            <img src={t} alt="tesla" className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0 h-screen">
        {teslas.col2.map((t, idx) => (
          <div key={idx} className="h-1/3 relative">
            <img src={t} alt="tesla" className="w-full h-full " />
            {idx === 1 && (
              <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center">
                <h3 className="font-bold text-[32px] text-white">
                  Tesla Model 3
                </h3>
                <p className="font-medium text-[20px] text-white mb-6">
                  Disruptive, avant-garde, futuristic, innovative.
                </p>
                <a
                  href="#contact"
                  className="inline-block text-center w-[140px] h-[45px] bg-none text-white border-2 border-white rounded-md font-semibold text-[24px]"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="md:flex flex-col gap-0  hidden h-screen">
        {teslas.col3.map((t, idx) => (
          <div key={idx} className="h-1/3">
            <img src={t} alt="tesla" className="w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeslaSection;
