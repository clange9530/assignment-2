import React from 'react';

class BuildingList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: this.props.data
		}
	}

	handleDelete = (e) => {
		e.preventDefault();
	}

	deleteListing = (id) => {
		let data = this.state.data.filter(building => {
			return building.id !== id
		});
		this.setState({
			data: data
		});
	}


	render() {
		const { filterText, selectedUpdate } = this.props;

		const buildingList = this.state.data.filter(directory =>{
			return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
		}).map(directory => {
			return (
				<tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
					<td>
						<button onClick={() => {this.deleteListing(directory.id)}}>Delete</button>
					</td>
				</tr>
			);
		});

		return <tbody>{buildingList}</tbody>;
	}
}
export default BuildingList;
