import Axios from "axios";

export default Axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 2ac15341d0a08569fc89aa0924d0499aa7f6c51758900dd0982b5e084e6c8ba6"
	}
});
