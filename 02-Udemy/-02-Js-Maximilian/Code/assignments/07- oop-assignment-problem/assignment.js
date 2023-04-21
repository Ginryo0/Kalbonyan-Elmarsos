class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

const jsCourse = new Course('JS - Guide', 10, 52);
const reactCourse = new Course('React - Guide', 10, 36);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(reactCourse.calculateValue());

jsCourse.printSummary();
reactCourse.printSummary();

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, price, length);
    this.numOfExercises = exercisesCount;
  }
}

const angularCourse = new PracticalCourse(
  'Angular - The Complete Guide',
  26,
  40,
  7
);

console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...');
  }
}

const flutterCourse = new TheoreticalCourse(
  'Flutter - Build iOS and Android Apps',
  30,
  28
);

flutterCourse.price = 5000;
// flutterCourse.#price = 100; -> error

flutterCourse.printSummary();
flutterCourse.publish();

// Mine
// class Course {
//   #price = 0; //private properties must be declared first

//   set price(val) {
//     if (val > 0) {
//       this.#price = val;
//     } else {
//       throw 'Invalid value!';
//     }
//   }

//   get price() {
//     return '$' + this.#price;
//   }
//   constructor(title, length, price) {
//     this.title = title;
//     this.length = length;
//     this.price = price; // add _ to use it with get/set
//   }

//   calc() {
//     return this.length / this.#price;
//   }

//   summary() {
//     return `course name: ${this.title} takes: ${this.length}hours costs: ${this.price}$`;
//   }
// }

// const course1 = new Course('c1', 2, 30);
// const course2 = new Course('c2', 5, 60);

// console.log(course1);
// console.log(course1.calc());
// console.log(course1.summary());

// class PracticalCourse extends Course {
//   constructor(t, l, p, n) {
//     super(t, l, p);
//     this.numOfExercises = n;
//   }
// }

// class TheoreticalCourse extends Course {
//   // constructor(t, l, c) {
//   //   super(t, l, c);
//   // } -> not needed
//   publish() {
//     console.log('Theoretical publishing');
//   }
// }

// const p1 = new PracticalCourse('p1', 5, 20, 7);
// // p1.numOfExercises = 7;
// for (const key in p1) {
//   console.log(`${key}: ${p1[key]}`);
// }

// const t1 = new TheoreticalCourse('t1', 9, 30);

// t1.publish();
// console.log(t1.summary());

// const t2 = new TheoreticalCourse('t2', 30, 28);
// t2.price = 5000;
// // t2.#price;
// console.log(t2.price);
