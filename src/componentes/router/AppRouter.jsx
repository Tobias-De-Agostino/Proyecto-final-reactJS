import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CartView from "../CartView/CartView";
import Checkout from "../checkout/checkout";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import LoginScreen from "../LoginScreen/LoginScreen";
import Navbar from "../Navbar/Navbar";

const AppRouter = () => {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Navbar />

      {user.logged ? (
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />


          {/* <Route path="/not-found" element={<h2>Not found</h2>} /> */}
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
