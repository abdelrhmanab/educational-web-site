
import InstructorImg1 from "../assets/instructor1.jpg"
import InstructorImg2 from "../assets/instructor2.jpg"
import InstructorImg3 from "../assets/instructor3.jpg"
import InstructorImg4 from "../assets/instructor4.jpg"
import InstructorImg5 from "../assets/instructor5.jpg"
import InstructorImg6 from "../assets/instructor6.jpg"
import InstructorImg7 from "../assets/instructor2.jpg"
import InstructorImg8 from "../assets/instructor4.jpg"



const instructorList = [
  {
    id: 1,
    name: "Mugnas Lee",
    job: "Developer",
    img: InstructorImg1,
    phone: "+201001234567",
    email: "mugnas.lee@example.com"
  },
  {
    id: 2,
    name: "Sophia Turner",
    job: "UI/UX Designer",
    img: InstructorImg2,
    phone: "+201002345678",
    email: "sophia.turner@example.com"
  },
  {
    id: 3,
    name: "James Anderson",
    job: "Frontend Developer",
    img: InstructorImg3,
    phone: "+201003456789",
    email: "james.anderson@example.com"
  },
  {
    id: 4,
    name: "Olivia Martin",
    job: "Backend Developer",
    img: InstructorImg4,
    phone: "+201004567890",
    email: "olivia.martin@example.com"
  },
  {
    id: 5,
    name: "William Clark",
    job: "Data Scientist",
    img: InstructorImg5,
    phone: "+201005678901",
    email: "william.clark@example.com"
  },
  {
    id: 6,
    name: "Emma Rodriguez",
    job: "Mobile Developer",
    img: InstructorImg6,
    phone: "+201006789012",
    email: "emma.rodriguez@example.com"
  },
  {
    id: 7,
    name: "Liam Walker",
    job: "DevOps Engineer",
    img: InstructorImg7,
    phone: "+201007890123",
    email: "liam.walker@example.com"
  },
  {
    id: 8,
    name: "Ava Thompson",
    job: "Project Manager",
    img: InstructorImg8,
    phone: "+201008901234",
    email: "ava.thompson@example.com"
  }
];


export const findInstructor = (id:number = 1) =>{
    
  const result =  instructorList.find( i => i.id === id  )
  
  
  return result};


export default instructorList