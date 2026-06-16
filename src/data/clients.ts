import { StaticImageData } from "next/image";

import UserAvatar1 from '../../public/images/clients/user1.webp'
import UserAvatar2 from '../../public/images/clients/user2.webp'
import UserAvatar3 from '../../public/images/clients/user3.webp'
import UserAvatar4 from '../../public/images/clients/user4.webp'
import UserAvatar5 from '../../public/images/clients/user5.webp'


export interface Client {
  id: number;
  image: StaticImageData;
  name: string;
  email: string;
  phone: string;
  country: string;
}


export const clients: Client[] = [
  {
    id: 1,
    image: UserAvatar1,
    name: "Ethan Carter",
    email: "Ethan.Carter@example.com",
    phone: "+1 415-678-9023",
    country: "United States",
  },
  {
    id: 2,
    image: UserAvatar2,
    name: "Sophia Mitchell",
    email: "Sophia.Mitchell@example.com",
    phone: "+44 7911 123456",
    country: "United Kingdom",
  },
  {
    id: 3,
    image: UserAvatar3,
    name: "Liam Harrison",
    email: "Liam.Harrison@example.com",
    phone: "+49 1523 4567890",
    country: "Germany",
  },
  {
    id: 4,
    image: UserAvatar4,
    name: "Ava Bennett",
    email: "Ava.Bennett@example.com",
    phone: "+91 98765 43210",
    country: "India",
  },
  {
    id: 5,
    image: UserAvatar5,
    name: "Noah Reynolds",
    email: "Noah.Reynolds@example.com",
    phone: "+61 412 345 678",
    country: "Australia",
  },
];