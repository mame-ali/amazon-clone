require("dotenv").config();
const port = 8100;
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SKEY);

const app = express();
app.use(cors());
app.use(express.json());
//again
app.get("/", (req, res) => res.send("its working"));

app.post("/payments/create", async (req, res) => {
	console.log("object");
	try {
		const total = req.query.total;
		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total),
			currency: "usd",
		});
		console.log(paymentIntent.client_secret);
		res.send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
		res.status(500).send("server error");
	}
});

app.listen(port, () => {
	console.log(`server is listening to ${port}`);
});
