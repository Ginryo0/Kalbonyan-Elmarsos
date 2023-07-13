import SectionWrapper from './SectionWrapper';
import styles from '../assets/styles';
import CarSlider from './CarSlider';

const Cars = () => {
  return (
    <div className="flex gap-20 flex-col items-center">
      <header className={styles.sectionHeader}>
        <h3 className={styles.sectionSubHead}>CARS</h3>
        <h2 className={`${styles.sectionHeadCenter} text-secondary`}>Cars</h2>
      </header>
      <CarSlider />
    </div>
  );
};

const CarsSection = SectionWrapper(
  Cars,
  'cars',
  'max-w-[1440px] p-10 w-full mx-auto mx-auto md:p-[78px] px-[24px] flex flex-col items-center justify-center overflow-hidden'
);

export default CarsSection;
