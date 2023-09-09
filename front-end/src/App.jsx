import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//Pages
import Home from "./pages/home/Home";
import Checkout from "./pages/checkout/Checkout";
import Payment from "./pages/payments/Payment";
import Login from "./pages/login/Login";
import Orders from "./pages/orders/Orders";

import { Routes, Route, Link } from "react-router-dom";

import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./stateprovider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";

const promise = loadStripe(
	"pk_test_51Nn1nKBEazAh7lNxNO5ifnuZ3iNqCuLVAgYS7bgek8sGzcHVBdGT8LePBO8sPn6WsxAnXMhI5kKD5M3fHRekwwSt00cFzdJxrc"
);

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>

				<Route
					path="/checkout"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
				<Route
					path="/payment"
					element={
						<>
							<Header />
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						</>
					}
				/>
				<Route
					path="/orders"
					element={
						<>
							<Header />
							<Orders />
						</>
					}
				/>

				<Route path="/login" element={<Login />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
