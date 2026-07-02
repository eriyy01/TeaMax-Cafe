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
  { id: "masala-chai", name: "TeaMax Masala Chai", description: "Traditional spiced tea with our secret blend of aromatic spices", price: "₹100", category: "Tea", image: "images/menu/masala-chai.jpg", signature: true },
  { id: "kahwa", name: "Kashmiri Kahwa", description: "Traditional green tea with saffron, almonds & warming spices", price: "₹180", category: "Tea", image: "images/menu/kahwa.jpg", signature: true },
  { id: "chai-latte", name: "Chai Latte", description: "Creamy spiced tea latte with a hint of honey", price: "₹180", category: "Tea", image: "images/menu/chai-latte.jpg" },
  { id: "oolong", name: "Premium Oolong", description: "High-altitude oolong with floral notes", price: "₹160", category: "Tea", image: "images/menu/oolong.jpg" },
  { id: "green-tea", name: "Jasmine Green Tea", description: "Premium jasmine-infused green tea leaves", price: "₹130", category: "Tea", image: "images/menu/green-tea.jpg" },
  { id: "iced-tea", name: "Peach Iced Tea", description: "Freshly brewed tea with natural peach essence", price: "₹150", category: "Tea", image: "images/menu/iced-tea.jpg" },
  { id: "cappuccino", name: "Velvet Cappuccino", description: "Silky microfoam atop a double shot of espresso", price: "₹180", category: "Coffee", image: "images/menu/cappuccino.jpg", signature: true },
  { id: "espresso", name: "Classic Espresso", description: "Rich single-origin espresso with a perfect crema layer", price: "₹120", category: "Coffee", image: "images/menu/espresso.jpg" },
  { id: "coldbrew", name: "Signature Cold Brew", description: "12-hour steeped cold brew, smooth and bold", price: "₹200", category: "Coffee", image: "images/menu/coldbrew.jpg" },
  { id: "latte", name: "Hazelnut Latte", description: "Velvety latte with house-made hazelnut syrup", price: "₹220", category: "Coffee", image: "images/menu/latte.jpg" },
  { id: "frappe", name: "Caramel Frappé", description: "Blended iced coffee with caramel drizzle", price: "₹250", category: "Cold Beverages", image: "images/menu/frappe.jpg", signature: true },
  { id: "milkshake", name: "Oreo Shake", description: "Thick creamy milkshake loaded with Oreo crumble", price: "₹200", category: "Cold Beverages", image: "images/menu/milkshake.jpg" },
  { id: "smoothie", name: "Berry Blast Smoothie", description: "Fresh mixed berries blended with yogurt", price: "₹220", category: "Cold Beverages", image: "images/menu/smoothie.jpg" },
  { id: "lemonade", name: "Fresh Lemonade", description: "Hand-squeezed lemons with a hint of mint", price: "₹120", category: "Cold Beverages", image: "images/menu/lemonade.jpg" },
  { id: "vada-pav", name: "Mumbai Vada Pav", description: "Crispy potato fritter in soft pav with classic chutneys", price: "₹80", category: "Snacks", image: "images/menu/vada-pav.jpg", signature: true },
  { id: "sandwich", name: "Grilled Club Sandwich", description: "Triple-layer sandwich with premium fillings", price: "₹180", category: "Snacks", image: "images/menu/sandwich.jpg" },
  { id: "fries", name: "Classic Fries", description: "Crispy golden fries seasoned to perfection", price: "₹120", category: "Snacks", image: "images/menu/fries.jpg" },
  { id: "wrap", name: "Chicken Wrap", description: "Spiced chicken with fresh veggies in a warm tortilla", price: "₹200", category: "Snacks", image: "images/menu/wrap.jpg" },
  { id: "nachos", name: "Loaded Nachos", description: "Crispy nachos with cheese sauce and salsa", price: "₹220", category: "Snacks", image: "images/menu/nachos.jpg" },
  { id: "hakka-noodles", name: "Hakka Noodles", description: "Wok-tossed noodles with fresh vegetables and house sauces", price: "₹200", category: "Fast Food", image: "images/menu/hakka-noodles.jpg", signature: true },
  { id: "pizza", name: "Margherita Pizza", description: "Wood-fired thin crust with fresh mozzarella", price: "₹280", category: "Fast Food", image: "images/menu/pizza.jpg", signature: true },
  { id: "pasta", name: "Creamy Alfredo Pasta", description: "Fettuccine tossed in rich parmesan cream sauce", price: "₹260", category: "Fast Food", image: "images/menu/pasta.jpg" },
  { id: "brownie", name: "Chocolate Brownie", description: "Warm fudge brownie with vanilla ice cream", price: "₹180", category: "Desserts", image: "images/menu/brownie.jpg", signature: true },
  { id: "cheesecake", name: "New York Cheesecake", description: "Creamy baked cheesecake on a buttery graham crust", price: "₹220", category: "Desserts", image: "images/menu/cheesecake.jpg" },
  { id: "waffle", name: "Belgian Waffle", description: "Crispy waffle with fresh fruits and maple drizzle", price: "₹240", category: "Desserts", image: "images/menu/waffle.jpg" },
];

export const categories = ["Tea", "Coffee", "Cold Beverages", "Snacks", "Fast Food", "Desserts"];
