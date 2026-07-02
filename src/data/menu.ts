export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  signature?: boolean;
}

export const menuItems: MenuItem[] = [
  { id: "masala-chai", name: "TeaMax Masala Chai", description: "Traditional spiced tea with our secret blend of aromatic spices", price: "₹100", category: "Tea", image: "images/photo-1541167760496-1628856ab772-0.jpg", signature: true },
  { id: "kahwa", name: "Kashmiri Kahwa", description: "Traditional green tea with saffron, almonds & warming spices", price: "₹180", category: "Tea", image: "images/photo-1571934811356-5cc061b6821f-0.jpg", signature: true },
  { id: "chai-latte", name: "Chai Latte", description: "Creamy spiced tea latte with a hint of honey", price: "₹180", category: "Tea", image: "images/photo-1511920170033-f8396924c348-0.jpg" },
  { id: "oolong", name: "Premium Oolong", description: "High-altitude oolong with floral notes", price: "₹160", category: "Tea", image: "images/photo-1442512595331-e89e73853f31-0.jpg" },
  { id: "green-tea", name: "Jasmine Green Tea", description: "Premium jasmine-infused green tea leaves", price: "₹130", category: "Tea", image: "images/photo-1511920170033-f8396924c348-0.jpg" },
  { id: "iced-tea", name: "Peach Iced Tea", description: "Freshly brewed tea with natural peach essence", price: "₹150", category: "Tea", image: "images/photo-1511920170033-f8396924c348-0.jpg" },
  { id: "cappuccino", name: "Velvet Cappuccino", description: "Silky microfoam atop a double shot of espresso", price: "₹180", category: "Coffee", image: "images/photo-1495474472287-4d71bcdd2085-0.jpg", signature: true },
  { id: "espresso", name: "Classic Espresso", description: "Rich single-origin espresso with a perfect crema layer", price: "₹120", category: "Coffee", image: "images/photo-1495474472287-4d71bcdd2085-0.jpg" },
  { id: "coldbrew", name: "Signature Cold Brew", description: "12-hour steeped cold brew, smooth and bold", price: "₹200", category: "Coffee", image: "images/photo-1495474472287-4d71bcdd2085-0.jpg" },
  { id: "latte", name: "Hazelnut Latte", description: "Velvety latte with house-made hazelnut syrup", price: "₹220", category: "Coffee", image: "images/photo-1495474472287-4d71bcdd2085-0.jpg" },
  { id: "frappe", name: "Caramel Frappé", description: "Blended iced coffee with caramel drizzle", price: "₹250", category: "Cold Beverages", image: "images/photo-1511920170033-f8396924c348-0.jpg", signature: true },
  { id: "milkshake", name: "Oreo Shake", description: "Thick creamy milkshake loaded with Oreo crumble", price: "₹200", category: "Cold Beverages", image: "images/photo-1541783245831-57d6fb0926d3-0.jpg" },
  { id: "smoothie", name: "Berry Blast Smoothie", description: "Fresh mixed berries blended with yogurt", price: "₹220", category: "Cold Beverages", image: "images/photo-1511920170033-f8396924c348-0.jpg" },
  { id: "lemonade", name: "Fresh Lemonade", description: "Hand-squeezed lemons with a hint of mint", price: "₹120", category: "Cold Beverages", image: "images/photo-1511920170033-f8396924c348-0.jpg" },
  { id: "vada-pav", name: "Mumbai Vada Pav", description: "Crispy potato fritter in soft pav with classic chutneys", price: "₹80", category: "Snacks", image: "images/photo-1601050690597-df0568f70950-0.jpg", signature: true },
  { id: "sandwich", name: "Grilled Club Sandwich", description: "Triple-layer sandwich with premium fillings", price: "₹180", category: "Snacks", image: "images/photo-1509365465985-25d11c17e812-0.jpg" },
  { id: "fries", name: "Classic Fries", description: "Crispy golden fries seasoned to perfection", price: "₹120", category: "Snacks", image: "images/photo-1550547660-d9450f859349-0.jpg" },
  { id: "wrap", name: "Chicken Wrap", description: "Spiced chicken with fresh veggies in a warm tortilla", price: "₹200", category: "Snacks", image: "images/photo-1509365465985-25d11c17e812-0.jpg" },
  { id: "nachos", name: "Loaded Nachos", description: "Crispy nachos with cheese sauce and salsa", price: "₹220", category: "Snacks", image: "images/photo-1509365465985-25d11c17e812-0.jpg" },
  { id: "hakka-noodles", name: "Hakka Noodles", description: "Wok-tossed noodles with fresh vegetables and house sauces", price: "₹200", category: "Fast Food", image: "images/photo-1546069901-ba9599a7e63c-0.jpg", signature: true },
  { id: "pizza", name: "Margherita Pizza", description: "Wood-fired thin crust with fresh mozzarella", price: "₹280", category: "Fast Food", image: "images/photo-1509440159596-0249088772ff-0.jpg", signature: true },
  { id: "pasta", name: "Creamy Alfredo Pasta", description: "Fettuccine tossed in rich parmesan cream sauce", price: "₹260", category: "Fast Food", image: "images/photo-1546069901-ba9599a7e63c-0.jpg" },
  { id: "brownie", name: "Chocolate Brownie", description: "Warm fudge brownie with vanilla ice cream", price: "₹180", category: "Desserts", image: "images/photo-1563805042-7684c019e1cb-0.jpg", signature: true },
  { id: "cheesecake", name: "New York Cheesecake", description: "Creamy baked cheesecake on a buttery graham crust", price: "₹220", category: "Desserts", image: "images/photo-1565958011703-44f9829ba187-0.jpg" },
  { id: "waffle", name: "Belgian Waffle", description: "Crispy waffle with fresh fruits and maple drizzle", price: "₹240", category: "Desserts", image: "images/photo-1565958011703-44f9829ba187-0.jpg" },
];

export const categories = ["Tea", "Coffee", "Cold Beverages", "Snacks", "Fast Food", "Desserts"];
