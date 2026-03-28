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
    Phone: "+(624) 763 552 420"
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
    Phone: "+(44) 123 456 789"
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
    Phone: "+(49) 987 654 321"
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
    Phone: "+(1) 555 222 333"
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
    Phone: "+(1) 416 123 456"
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
    Phone: "+(61) 555 987 654"
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
    Phone: "+(971) 555 444 333"
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
    Phone: "+(81) 123 456 789"
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
    Phone: "+(33) 555 666 777"
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
    Phone: "+(65) 888 999 000"
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
    Phone: "+(31) 555 222 111"
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
    Phone: "+(20) 100 200 300"
  }
];

export const findEvent = (id:number = 1) =>{
    
  const result =  eventsList.find( i => i.id === id  )
  
  
  return result};


export const popularEvents = eventsList.slice(1,6)
export default eventsList