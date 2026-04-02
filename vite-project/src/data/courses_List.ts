

import Avatar1 from "../assets/avatacourse1.png";
import Avatar2 from "../assets/avatacourse1.png";
import Avatar3 from "../assets/avatacourse1.png";
import Avatar4 from "../assets/avatacourse1.png";



import Image1 from "../assets/crse1.png";
import Image2 from "../assets/corse2.png";
import Image3 from "../assets/corse3.png";
import Image4 from "../assets/corse4.png";



import CourseImage1 from "../assets/eventImage1.jpg" 
import CourseImage2 from "../assets/eventImage2.jpg" 
import CourseImage3 from "../assets/eventImage3.jpg" 
import CourseImage4 from "../assets/eventImage4.jpg" 
import CourseImage5 from "../assets/eventImage5.jpg" 
import CourseImage6 from "../assets/eventImage6.jpg" 
import CourseImage7 from "../assets/eventImage7.jpg" 
import CourseImage8 from "../assets/eventImage8.jpg" 
import CourseImage9 from "../assets/eventImage9.jpg" 





export const popularCoursesList = [
  {
    id: 1,
    category: "UX Design",
    title: "Dave conservatoire is the Entirely free online",
    lessonsCount: 5,
    studendsCount: 77,
    price: 98,
    img: Image1,
    instructor: "John Smith",
    avatar: Avatar1,
    review: 4.5,
    duration:"2 Weeks"
  },
  {
    id: 2,
    category: "Web Development",
    title: "Complete React Developer in 2026",
    lessonsCount: 12,
    studendsCount: 150,
    price: 120,
    img: Image2,
    instructor: "Ahmed Ali",
    avatar: Avatar2,
    review: 4.7
  },
  {
    id: 3,
    category: "Graphic Design",
    title: "Mastering Photoshop from Beginner to Pro",
    lessonsCount: 8,
    studendsCount: 95,
    price: 85,
    img: Image3,
    instructor: "Sara Mohamed",
    avatar: Avatar3,
    review: 4.6
  },
  {
    id: 4,
    category: "Digital Marketing",
    title: "SEO & Social Media Marketing Course",
    lessonsCount: 10,
    studendsCount: 130,
    price: 99,
    img: Image4,
    instructor: "Omar Hassan",
    avatar: Avatar4,
    review: 4.8
  }
];


const coursesList = [
  {
    id: 1,
    category: "UX Design",
    title: "Intro to UX Design Fundamentals",
    lessonsCount: 5,
    studendsCount: 77,
    price: 98,
    img: CourseImage1,
    instructor: "John Smith",
    avatar: Avatar1, 
    review: 4.5,
    duration: "2 Weeks"
  },
  {
    id: 2,
    category: "Web Development",
    title: "Complete HTML & CSS Bootcamp",
    lessonsCount: 12,
    studendsCount: 120,
    price: 120,
    img: CourseImage2,
    instructor: "Emma Brown",
    avatar: Avatar2, 
    review: 4.7,
    duration: "4 Weeks"
  },
  {
    id: 3,
    category: "JavaScript",
    title: "Modern JavaScript from Scratch",
    lessonsCount: 15,
    studendsCount: 200,
    price: 150,
    img: CourseImage3,
    instructor: "Michael Lee",
    avatar: Avatar2, 
    review: 4.8,
    duration: "5 Weeks"
  },
  {
    id: 4,
    category: "React",
    title: "React JS Complete Guide",
    lessonsCount: 18,
    studendsCount: 300,
    price: 180,
    img: CourseImage4,
    instructor: "David Wilson",
    review: 4.9,
    duration: "6 Weeks"
  },
  {
    id: 5,
    category: "Backend",
    title: "Node.js & Express Masterclass",
    lessonsCount: 14,
    studendsCount: 170,
    price: 140,
    img: CourseImage5,
    instructor: "Sophia Taylor",
    review: 4.6,
    duration: "4 Weeks"
  },
  {
    id: 6,
    category: "Database",
    title: "MongoDB for Beginners",
    lessonsCount: 10,
    studendsCount: 130,
    price: 110,
    img: CourseImage6,
    instructor: "James Anderson",
    review: 4.4,
    duration: "3 Weeks"
  },
  {
    id: 7,
    category: "Full Stack",
    title: "Full Stack Web Development",
    lessonsCount: 20,
    studendsCount: 350,
    price: 220,
    img: CourseImage7,
    instructor: "Olivia Martin",
    review: 4.9,
    duration: "8 Weeks"
  },
  {
    id: 8,
    category: "UI Design",
    title: "Figma UI Design Essentials",
    lessonsCount: 9,
    studendsCount: 95,
    price: 90,
    img: CourseImage8,
    instructor: "William Clark",
    review: 4.3,
    duration: "2 Weeks"
  },
  {
    id: 9,
    category: "Mobile App",
    title: "React Native App Development",
    lessonsCount: 16,
    studendsCount: 210,
    price: 160,
    img: CourseImage9,
    instructor: "Ava Rodriguez",
    review: 4.7,
    duration: "5 Weeks"
  },
  {
    id: 10,
    category: "Python",
    title: "Python for Beginners",
    lessonsCount: 11,
    studendsCount: 180,
    price: 130,
    img: CourseImage1,
    instructor: "Daniel White",
    review: 4.5,
    duration: "3 Weeks"
  },
  {
    id: 11,
    category: "Data Science",
    title: "Data Analysis with Python",
    lessonsCount: 13,
    studendsCount: 160,
    price: 150,
    img: CourseImage2,
    instructor: "Sophia Green",
    review: 4.6,
    duration: "4 Weeks"
  },
  {
    id: 12,
    category: "Cyber Security",
    title: "Intro to Cyber Security",
    lessonsCount: 8,
    studendsCount: 140,
    price: 100,
    img: CourseImage3,
    instructor: "Liam Scott",
    review: 4.4,
    duration: "3 Weeks"
  }
];


export const findCourse = (id:number = 1) =>{
    
  const result =  coursesList.find( i => i.id === id  )
  
  
  return result};

export default coursesList
