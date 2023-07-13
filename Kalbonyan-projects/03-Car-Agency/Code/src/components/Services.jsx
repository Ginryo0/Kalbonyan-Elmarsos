import SectionWrapper from './SectionWrapper';
import styles from '../assets/styles';
import { services } from '../assets/constants';

const Services = () => {
  return (
    <div
      className="max-w-[1440px] w-full mx-auto p-10
    md:px-[78px] px-[24px]"
    >
      <div className="flex gap-20 flex-col items-center justify-start">
        <div className="mb-20">
          <header className={`${styles.sectionHeader}`}>
            <h3 className={styles.sectionSubHead}>SERVICES</h3>
            <h2 className={`${styles.sectionHeadCenter} text-primary`}>
              Services
            </h2>
          </header>
        </div>
        <div className="flex md:flex-row flex-col xl:gap-20 md:gap-8 gap-20">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="mb-16 h-24 w-24"
              />
              <h3 className="font-bold text-[32px] text-primary mb-8">
                {service.title}
              </h3>
              <p className="text-[20px] text-primary text-center">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServicesSection = SectionWrapper(
  Services,
  'services',
  ' bg-services min-h-screen bg-[#DFDFDF] md:bg-cover md:bg-center bg-top bg-no-repeat '
);

export default ServicesSection;
