export type EventDate = {
  day: number;
  month: string;
  year: string;
  opened: string;
};

export type EventType = {
  id: number;
  Category: string;
  data: EventDate;
  title: string;
  location: string;
  TicketPrice: number;
  Instructor: string;
  TotalSlot: number;
  BookedSlot: number;
  Phone: string;
  img: string;
};


