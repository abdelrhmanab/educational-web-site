import eventImage1 from "../assets/eventImage1.jpg"
import eventImage2 from "../assets/eventImage2.jpg"
import eventImage3 from "../assets/eventImage3.jpg"
import eventImage4 from "../assets/eventImage4.jpg"
import eventImage5 from "../assets/eventImage5.jpg"
import eventImage6 from "../assets/eventImage6.jpg"
import eventImage7 from "../assets/eventImage7.jpg"
import eventImage8 from "../assets/eventImage8.jpg"
import eventImage9 from "../assets/eventImage9.jpg"






const eventsList = [
  {
    id: 1,
    Category: "education",
    data: { day: 3, month: "March", year: "2026", opened: "09:00AM-10:30AM" },
    title: "Interactive Learning Techniques",
    location: "New York, USA",
    TicketPrice: 74,
    Instructor: "Penny Tool",
    TotalSlot: 250,
    BookedSlot: 50,
    Phone: "+(624) 763 552 420",
    img: eventImage1
  },
  {
    id: 2,
    Category: "education",
    data: { day: 5, month: "March", year: "2026", opened: "11:00AM-12:30PM" },
    title: "Modern Web Development",
    location: "London, UK",
    TicketPrice: 90,
    Instructor: "John Smith",
    TotalSlot: 200,
    BookedSlot: 120,
    Phone: "+(44) 123 456 789",
    img: eventImage2
  },
  {
    id: 3,
    Category: "education",
    data: { day: 8, month: "March", year: "2026", opened: "01:00PM-03:00PM" },
    title: "UI/UX Design Masterclass",
    location: "Berlin, Germany",
    TicketPrice: 65,
    Instructor: "Anna Muller",
    TotalSlot: 180,
    BookedSlot: 90,
    Phone: "+(49) 987 654 321",
    img: eventImage3
  },
  {
    id: 4,
    Category: "education",
    data: { day: 10, month: "March", year: "2026", opened: "10:00AM-12:00PM" },
    title: "React Advanced Patterns",
    location: "San Francisco, USA",
    TicketPrice: 120,
    Instructor: "David Lee",
    TotalSlot: 300,
    BookedSlot: 200,
    Phone: "+(1) 555 222 333",
    img: eventImage4
  },
  {
    id: 5,
    Category: "education",
    data: { day: 12, month: "March", year: "2026", opened: "02:00PM-04:00PM" },
    title: "Backend with Node.js",
    location: "Toronto, Canada",
    TicketPrice: 85,
    Instructor: "Michael Brown",
    TotalSlot: 220,
    BookedSlot: 150,
    Phone: "+(1) 416 123 456",
    img: eventImage5
  },
  {
    id: 6,
    Category: "education",
    data: { day: 15, month: "March", year: "2026", opened: "09:30AM-11:30AM" },
    title: "Database Design Essentials",
    location: "Sydney, Australia",
    TicketPrice: 70,
    Instructor: "Olivia Wilson",
    TotalSlot: 160,
    BookedSlot: 80,
    Phone: "+(61) 555 987 654",
    img: eventImage6
  },
  {
    id: 7,
    Category: "education",
    data: { day: 18, month: "March", year: "2026", opened: "12:00PM-02:00PM" },
    title: "Cybersecurity Basics",
    location: "Dubai, UAE",
    TicketPrice: 95,
    Instructor: "Ahmed Khan",
    TotalSlot: 210,
    BookedSlot: 130,
    Phone: "+(971) 555 444 333",
    img: eventImage7
  },
  {
    id: 8,
    Category: "education",
    data: { day: 20, month: "March", year: "2026", opened: "03:00PM-05:00PM" },
    title: "AI & Machine Learning Intro",
    location: "Tokyo, Japan",
    TicketPrice: 110,
    Instructor: "Yuki Tanaka",
    TotalSlot: 260,
    BookedSlot: 180,
    Phone: "+(81) 123 456 789",
    img: eventImage8
  },
  {
    id: 9,
    Category: "education",
    data: { day: 22, month: "March", year: "2026", opened: "10:00AM-12:00PM" },
    title: "Mobile App Development",
    location: "Paris, France",
    TicketPrice: 88,
    Instructor: "Claire Dubois",
    TotalSlot: 190,
    BookedSlot: 100,
    Phone: "+(33) 555 666 777",
    img: eventImage9
  },
  {
    id: 10,
    Category: "education",
    data: { day: 25, month: "March", year: "2026", opened: "01:00PM-03:00PM" },
    title: "Cloud Computing Fundamentals",
    location: "Singapore",
    TicketPrice: 105,
    Instructor: "Liam Chen",
    TotalSlot: 240,
    BookedSlot: 160,
    Phone: "+(65) 888 999 000",
    img: eventImage1
  },
  {
    id: 11,
    Category: "education",
    data: { day: 27, month: "March", year: "2026", opened: "09:00AM-11:00AM" },
    title: "DevOps Best Practices",
    location: "Amsterdam, Netherlands",
    TicketPrice: 99,
    Instructor: "Emma Van Dijk",
    TotalSlot: 230,
    BookedSlot: 170,
    Phone: "+(31) 555 222 111",
    img: eventImage2
  },
  {
    id: 12,
    Category: "education",
    data: { day: 30, month: "March", year: "2026", opened: "02:00PM-04:00PM" },
    title: "Full Stack Bootcamp",
    location: "Cairo, Egypt",
    TicketPrice: 75,
    Instructor: "Mohamed Ali",
    TotalSlot: 300,
    BookedSlot: 220,
    Phone: "+(20) 100 200 300",
    img: eventImage3
  }
];
export const findEvent = (id:number = 1) =>{
    
  const result =  eventsList.find( i => i.id === id  )
  
  
  return result};


export const popularEvents = eventsList.slice(1,6)
export default eventsList