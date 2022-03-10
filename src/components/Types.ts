export interface Reservation {
    _id: string;
    name: string;
    phone: string;
    numberOfPeople: number;
    smoking: boolean;
    dateTime: string;
    specialRequests: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface Dish {
  id: number
  name: string
  image: string
  category: string
  label: string
  price: string
  description: string
  comments: Comment[]
}
export interface Comment {
    id: number
    rating: number
    comment: string
    author: string
    date: string
  }
  
