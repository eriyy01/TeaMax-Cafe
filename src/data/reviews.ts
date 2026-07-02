export interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  { id: 1, name: "Sandeep Rathore", role: "Local Guide · 697 reviews", avatar: "images/photo-1517248135467-4c7edcad34c4-0.jpg", rating: 5, text: "Love the vibe, mild music, cozy atmosphere & smiling faces. Food was fresh and tasty. Love the sandwiches specially. Overall a superb experience." },
  { id: 2, name: "Rajveer Katailiha", role: "Tea Aficionado", avatar: "images/photo-1442512595331-e89e73853f31-0.jpg", rating: 5, text: "TeaMax Cafe — A Tea Lover's Paradise. Had an amazing time today! As a tea aficionado, I was thoroughly impressed by the variety and quality." },
  { id: 3, name: "Dohit Dhuri", role: "Local Guide · 115 reviews", avatar: "images/photo-1511920170033-f8396924c348-0.jpg", rating: 5, text: "TeaMax Cafe offers a delightful experience for tea enthusiasts and casual visitors alike. The ambiance is cozy and inviting, perfect for relaxing with a book or catching up with friends." },
  { id: 4, name: "Manisha Khandekar", role: "Happy Customer", avatar: "images/photo-1495474472287-4d71bcdd2085-0.jpg", rating: 5, text: "Best in town specially the Hakka Noodles. I loved it! The food and service both were top notch." },
  { id: 5, name: "Indrajeet Singh", role: "Must Visit", avatar: "images/photo-1554118811-1e0d58224f24-0.jpg", rating: 5, text: "Tasty food, fast service. Must visit. Highly recommended for anyone looking for a great café experience in Bilaspur." },
  { id: 6, name: "Anjali Gavel", role: "Regular Visitor", avatar: "images/photo-1541167760496-1628856ab772-0.jpg", rating: 5, text: "Service, food and its taste were just awesome. Cool and calm environment. Perfect place to unwind and enjoy quality time." },
];
