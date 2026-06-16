export interface Order {
  id: number;
  orderId: string;
  client: string;
  total: number;
  status: 'Delivered' | 'Pending' | 'Canceled';
  date: string;
  country: string;
}

export const orders: Order[] = [
  {
    id: 1,
    orderId: '#A7B9D31',
    client: 'Ethan Carter',
    total: 174.5,
    status: 'Delivered',
    date: 'Jan 30, 2025',
    country: 'United States',
  },
  {
    id: 2,
    orderId: '#X4Y2Z85',
    client: 'Sophia Mitchell',
    total: 632,
    status: 'Pending',
    date: 'Feb 23, 2025',
    country: 'United Kingdom',
  },
  {
    id: 3,
    orderId: '#M6N3P74',
    client: 'Liam Harrison',
    total: 202.5,
    status: 'Delivered',
    date: 'Dec 25, 2024',
    country: 'Germany',
  },
  {
    id: 4,
    orderId: '#K9L8T62',
    client: 'Ava Bennett',
    total: 330,
    status: 'Canceled',
    date: 'Mar 22, 2025',
    country: 'India',
  },
  {
    id: 5,
    orderId: '#Q5R7W30',
    client: 'Noah Reynolds',
    total: 595.5,
    status: 'Delivered',
    date: 'Mar 5, 2025',
    country: 'Australia',
  },
];