import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment" style={{ marginTop: "10px" }}>
				<form
					onSubmit={this.onFormSubmit}
					className="ui form"
					action=""
					method=""
				>
					<div className="ui field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={e => {
								this.setState({ term: e.target.value });
								// console.log(this.state.term);
							}}
							placeholder="Search Keywords"
						/>
					</div>
					<button className="ui primary button">Search</button>
				</form>
			</div>
		);
	}
}

export default SearchBar;
