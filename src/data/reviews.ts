export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  { id: 1, name: "Sandeep Rathore", role: "Local Guide · 697 reviews", avatar: "/images/reviews/avatar-1.jpg", rating: 5, text: "Love the vibe, mild music, cozy atmosphere & smiling faces. Food was fresh and tasty. Love the sandwiches specially. Overall a superb experience." },
  { id: 2, name: "Rajveer Katailiha", role: "Tea Aficionado", avatar: "/images/reviews/avatar-2.jpg", rating: 5, text: "TeaMax Cafe — A Tea Lover's Paradise. Had an amazing time today! As a tea aficionado, I was thoroughly impressed by the variety and quality." },
  { id: 3, name: "Dohit Dhuri", role: "Local Guide · 115 reviews", avatar: "/images/reviews/avatar-3.jpg", rating: 5, text: "TeaMax Cafe offers a delightful experience for tea enthusiasts and casual visitors alike. The ambiance is cozy and inviting, perfect for relaxing with a book or catching up with friends." },
  { id: 4, name: "Manisha Khandekar", role: "Happy Customer", avatar: "/images/reviews/avatar-4.jpg", rating: 5, text: "Best in town specially the Hakka Noodles. I loved it! The food and service both were top notch." },
  { id: 5, name: "Indrajeet Singh", role: "Must Visit", avatar: "/images/reviews/avatar-5.jpg", rating: 5, text: "Tasty food, fast service. Must visit. Highly recommended for anyone looking for a great café experience in Bilaspur." },
  { id: 6, name: "Anjali Gavel", role: "Regular Visitor", avatar: "/images/reviews/avatar-6.jpg", rating: 5, text: "Service, food and its taste were just awesome. Cool and calm environment. Perfect place to unwind and enjoy quality time." },
];
