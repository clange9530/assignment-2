import React from 'react';

class Search extends React.Component {
	filterUpdate = (e) => {
		e.preventDefault();
		this.props.filterUpdate(e.target.value);
	}
	submit = (e) => {
		e.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.submit}>
				<input type="text" 
				placeholder="Enter building name..." 
				onChange={this.filterUpdate} 
				/>
			</form>
		);
	}
}
export default Search;
