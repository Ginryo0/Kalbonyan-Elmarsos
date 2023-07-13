import { carsales, carselling, carsrental } from '.';
import car1 from './cars/car1.png';
import car2 from './cars/car2.png';
import car3 from './cars/car3.png';
import car4 from './cars/car4.png';
import car5 from './cars/car5.png';
import car6 from './cars/car6.png';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'services',
    title: 'Services',
  },
  {
    id: 'cars',
    title: 'Cars',
  },
  {
    id: 'contact',
    title: 'Contact us',
  },
];

export const services = [
  {
    title: 'Car sales',
    icon: carsales,
    text: "At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.",
  },
  {
    title: 'Car rental',
    icon: carsrental,
    text: "If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience.",
  },
  {
    title: 'Car selling',
    icon: carselling,

    text: "At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort.",
  },
];

export const cars = [
  {
    name: 'Porsche 911',
    type: 'Sports Car',
    description:
      "The Porsche 911 is a true icon in the sports car world, known for its sleek design, impressive performance, and superior handling. It's a two-door, two-seat coupe that's perfect for those who love to feel the wind in their hair and the road beneath their wheels.",
    seats: 2,
    luggage: 2,
    image: car1,
  },
  {
    name: 'BMW 7 Series',
    type: 'Luxury Car',
    description:
      'The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology. With its sleek exterior and spacious interior, this four-door sedan is perfect for those who demand the very best in automotive design and performance.',
    seats: 5,
    luggage: 3,
    image: car2,
  },
  {
    name: 'Range Rover Sport',
    type: 'SUV',
    description:
      "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    seats: 7,
    luggage: 4,
    image: car3,
  },
  {
    name: 'Mercedes-Benz S-Class',
    type: 'Luxury Car',
    description:
      "The Mercedes-Benz S-Class is the epitome of luxury and style, with its sleek lines and advanced technology. It's a four-door sedan that's perfect for those who demand the very best in automotive design and performance.",
    seats: 5,
    luggage: 2,
    image: car4,
  },
  {
    name: 'Tesla Model S',
    type: 'Electric Car',
    description:
      "The Tesla Model S is a high-performance electric car that's perfect for those who want to combine luxury with sustainability. With its sleek design and advanced technology, this four-door sedan offers a smooth and quiet ride. It also has plenty of space for passengers and luggage.",
    seats: 5,
    luggage: 2,
    image: car5,
  },
  {
    name: 'Bentley Bentayga',
    type: 'Luxury SUV',
    description:
      "The Bentley Bentayga is the ultimate luxury SUV, offering unparalleled comfort, style, and performance. With its powerful engine and advanced technology, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
    seats: 7,
    luggage: 4,
    image: car6,
  },
];

export const testimonials = [
  {
    name: 'John Moo',
    description:
      'I recently bought a car through YourCar and I was blown away by their exceptional service. The staff were friendly and knowledgeable, and they helped me find the perfect car for my needs. I highly recommend YourCar to anyone looking for a luxury car buying experience.',
    city: 'London',
  },
  {
    name: 'Sarah Ahmed',
    description:
      'YourCar made selling my car a breeze. They handled all the paperwork and negotiations, and I received a fair price for my vehicle. I would definitely use their services again in the future.',
    city: 'Cairo',
  },
  {
    name: 'Michael Khalil',
    description:
      'I had a wonderful experience renting a car from YourCar. The car was in excellent condition and the pickup and drop-off process was seamless. I highly recommend them for anyone in need of a luxury car rental.',
    city: 'Toronto',
  },
  {
    name: 'Emily Han',
    description:
      "YourCar exceeded my expectations in every way. From the moment I walked in, I felt like a valued customer. The staff went above and beyond to ensure that I found the car of my dreams. I couldn't be happier with my purchase and I highly recommend YourCar to anyone in the market for a luxury vehicle.",
    city: 'New York',
  },
];
