const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


// Fake "database"
let users = [
  {
    id: 1,
    nom: 'Leanne Graham',
    NomRespo: 'Jean Dupont',
    teleRespo: '0601020304',
    ville: 'Paris',
    image: 'uploads/7.png',
    adresseComplet: '10 rue de Paris, 75001 Paris',
    logo: 'uploads/logo1.avif',
    status:'active',
    createdAt: '2023-05-01'
  },
  {
    id: 2,
    nom: 'Ervin Howell',
    NomRespo: 'Sophie Martin',
    teleRespo: '0605060708',
    ville: 'Lyon',
    image: 'uploads/7.png',
    adresseComplet: '20 avenue de Lyon, 69000 Lyon',
    logo: 'uploads/logo1.avif',
    status:'pending',
    createdAt: '2023-05-01',
  },
  {
    id: 3,
    nom: 'Clementine Bauch',
    NomRespo: 'Paul Morel',
    teleRespo: '0610101112',
    ville: 'Marseille',
    image: 'uploads/7.png',
    adresseComplet: '5 boulevard de la Mer, 13000 Marseille',
    logo: 'uploads/logo1.avif',
    status:'active',
    createdAt: '2023-05-01',

  },
  {
    id: 4,
    nom: 'Patricia Lebsack',
    NomRespo: 'Laura Bernard',
    teleRespo: '0613141516',
    ville: 'Toulouse',
    image: 'uploads/7.png',
    adresseComplet: '15 place du Capitole, 31000 Toulouse',
    logo: 'uploads/logo1.avif',
    status:'pending',
    createdAt: '2023-05-01',

  },
  {
    id: 5,
    nom: 'Chelsey Dietrich',
    NomRespo: 'Michel Lefevre',
    teleRespo: '0617181920',
    ville: 'Nice',
    image: 'uploads/7.png',
    adresseComplet: '25 promenade des Anglais, 06000 Nice',
    logo: 'uploads/logo1.avif',
    status:'active',
    createdAt: '2023-05-01',

  },
  {
    id: 6,
    nom: 'Mrs. Dennis Schulist',
    NomRespo: 'Caroline Petit',
    teleRespo: '0621222324',
    ville: 'Nantes',
    image: 'uploads/7.png',
    adresseComplet: '30 rue de Nantes, 44000 Nantes',
    logo: 'uploads/logo1.avif',
    status:'inactive',
    createdAt: '2023-05-01',

  },
  {
    id: 7,
    nom: 'Kurtis Weissnat',
    NomRespo: 'Julien Roux',
    teleRespo: '0625262728',
    ville: 'Bordeaux',
    image: 'uploads/7.png',
    adresseComplet: '12 cours de l\'Intendance, 33000 Bordeaux',
    logo: 'uploads/logo1.avif',
    status:'active',
    createdAt: '2023-05-01',
  },
];

const products = [
  {
    id: 1,
    title: "Margherita Pizza",
    image: 'uploads/tiramisu.jpg', 
    price: 12.99,
    category: "Pizza",
    status: "in stock",
    description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil."

  },
  {
    id: 2,
    title: "Cheeseburger",
    image: 'uploads/tiramisu.jpg', 
    price: 9.99,
    category: "Burger",
    status: "low stock",
    description: "Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and special sauce."

  },
  {
    id: 3,
    title: "Spaghetti Carbonara",
    image: 'uploads/tiramisu.jpg', 
    price: 13.5,
    category: "Pasta",
    status: "in stock",
    description: "Creamy spaghetti with pancetta, parmesan cheese, and black pepper."

  },
  {
    id: 4,
    title: "Caesar Salad",
    image: 'uploads/tiramisu.jpg', 
    price: 8.5,
    category: "Salad",
    status: "in stock",
    description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan cheese."

  },
  {
    id: 5,
    title: "Grilled Chicken Sandwich",
    image: 'uploads/tiramisu.jpg',
    price: 11.0,
    category: "Sandwich",
    status: "low stock",
    description: "Grilled chicken breast with lettuce, tomato, and honey mustard sauce in a soft bun."

  },
  {
    id: 6,
    title: "Tiramisu",
    image: 'uploads/tiramisu.jpg', 
    price: 6.5,
    category: "Dessert",
    status: "in stock",
    description: "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."

  },
  {
    id: 7,
    title: "French Fries",
    image: 'uploads/tiramisu.jpg', 
    price: 4.0,
    category: "Sides",
    status: "out of stock",
    description: "Crispy golden potato fries seasoned with salt."

  },
  {
    id: 8,
    title: "Sushi Platter",
    image: 'uploads/tiramisu.jpg', 
    price: 22.0,
    category: "Sushi",
    status: "in stock",
    description: "Assorted sushi platter with fresh nigiri, maki rolls, and sashimi."

  },
];



  
  

// Routes

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const index = users.findIndex(user => user.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Mise à jour de l'utilisateur
  users[index] = { ...users[index], ...updatedUser };

  res.json(users[index]);
});




// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  const index = products.findIndex(product => product.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Mise à jour de l'utilisateur
  products[index] = { ...products[index], ...updatedProduct };

  res.json(products[index]);
});


app.listen(port, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${port}`);
  });