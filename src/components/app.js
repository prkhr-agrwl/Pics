import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
	state = { images: [] };

	onSearchSubmit = async term => {
		const res = await unsplash.get("/search/photos", {
			params: { query: term }
		});
		// console.log(this);
		this.setState({ images: res.data.results });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
