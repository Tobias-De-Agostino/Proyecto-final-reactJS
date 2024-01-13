import "./App.css";

import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import AppRouter from "./componentes/router/AppRouter";

function App() {

  return (
    <UserProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
