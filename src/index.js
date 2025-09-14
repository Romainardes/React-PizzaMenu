import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    filterName: "",
  },
  {
    name: "Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    filterName: "",
  },
  {
    name: "Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    filterName: "",
  },
  {
    name: "Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    filterName: "",
  },
  {
    name: "Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    filterName: "",
  },
  {
    name: "Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    filterName: "",
  },
  {
    name: "Quattro Formaggi",
    ingredients: "Mozzarella, gorgonzola, fontina, and parmigiano-reggiano",
    price: 20,
    photoName: "pizzas/4f.jpg",
    soldOut: false,
    filterName: "",
  },
  {
    name: "Toscana",
    ingredients: "Mozzarella, oregano, basil, cherry tomato, tomato sauce",
    price: 16,
    photoName: "pizzas/toscana.jpg",
    soldOut: false,
    filterName: "",
  },
];

const pizzas = pizzaData;
const numPizzas = pizzas.length;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>RMDev Pizza Co.</h1>
    </header>
  );
}

function Pizza(pizzaObj) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>${pizzaObj.price}</span>
        )}
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p style={{ width: "33%" }}>
            Authentic Italian cousine. 8 creative dishes to choose from. All
            from our stone over, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu, please come back later.</p>
      )}
    </main>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const currentTime = hours * 60 + minutes;
  console.log(currentTime);
  const openHour = 11;
  const closeHour = 14;
  const openTime = openHour * 60;
  const closeTime = closeHour * 60;
  const isOpen = currentTime >= openTime && currentTime <= closeTime;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}h
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
