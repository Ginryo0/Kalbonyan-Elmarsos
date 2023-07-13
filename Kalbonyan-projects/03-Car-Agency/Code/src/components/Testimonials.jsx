import SectionWrapper from './SectionWrapper';
import styles from '../assets/styles';
import TestiomonialsSliders from './TestiomonialsSliders';
import { cars } from '../assets/constants';

const Testimonials = () => {
  return (
    <div
      className="max-w-[1440px] w-full mx-auto lg:pt-20 md:pt-10 pt-20
    md:p-[78px] px-[24px]"
    >
      <header className={styles.sectionHeader}>
        <h3 className={`${styles.sectionSubHead} opacity-5 text-center`}>
          Testimonials
        </h3>
        <h2 className={`${styles.sectionHeadCenter} text-white`}>
          Testimonials
        </h2>
      </header>
      <div className="xl:px-36 sm:px-12 relative mx-auto">
        <TestiomonialsSliders />
        <img
          src={cars[3].image}
          alt="blue car"
          className="absolute xl:-right-4  md:-right-24 md:-bottom-12 sm:-right-8 sm:-bottom-8 md:w-[340px] sm:w-[250px] bottom-6 -right-7 w-[120px]"
        />
      </div>
    </div>
  );
};
const TestimonialsSection = SectionWrapper(
  Testimonials,
  'Testimonials',
  ' bg-primary my-0 sm:min-h-screen min-h-[600px]  overflow-hidden'
);
export default TestimonialsSection;
