import { aboutCar } from '../assets';
import SectionWrapper from './SectionWrapper';
import styles from '../assets/styles';

const About = () => {
  return (
    <div className="flex gap-20  min-h-screen py-32 items-center">
      <div className="max-w-[700px]">
        <header className={styles.sectionHeader}>
          <h3 className={styles.sectionSubHead}>ABOUT US </h3>
          <h2 className={styles.sectionHead}>About</h2>
        </header>
        <article className="max-w-[640px] ml-4 xl:text-[20px] md:text-[17px] text-[13px]">
          <p className="mb-4">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
          </p>
          <p>
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </article>
      </div>
      <div className="max-w-1/2 w-[500px] lg:block hidden">
        <img src={aboutCar} alt="" className="w-full" />
      </div>
    </div>
  );
};

const AboutSection = SectionWrapper(
  About,
  'about',
  'max-w-[1440px] min-h-screen mx-auto md:px-[78px] px-[24px] flex flex-col items-center'
);
export default AboutSection;
