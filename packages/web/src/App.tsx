import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Menu from "@/pages/Menu";
import NotFound from "@/pages/Not-Found";
import Orders from "@/pages/Orders";
import Pizza from "@/pages/Pizza";
import Signup from "@/pages/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/pizza/:id" element={<Pizza />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
export default App;
