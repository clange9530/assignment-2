import React from 'react';



class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuildingId } = this.props;
		const selectedBuildingInfo = data[selectedBuildingId];
		const building = {
			code: selectedBuildingInfo.code,
			name: selectedBuildingInfo.name,
			address: selectedBuildingInfo.address,
		}
		const coordinates = selectedBuildingInfo.coordinates;
		let coordRow;
		if(coordinates != null){
			coordRow = <tr>
				<th>Coordinates</th>	
					<td>{coordinates.latitude}, {coordinates.longitude}</td>
			</tr>;
		}
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>Code</th>
							<td>{building.code}</td>
						</tr>
						<tr>
							<th>Building Name</th>
							<td>{building.name}</td>
						</tr>
						<tr>
							<th>Address</th>
							<td>{building.address}</td>
						</tr>
						<coordRow coordinates={coordinates}/>
						{coordRow}
					</tbody>
				</table>
			</div>
		);
	}
}
export default ViewBuilding;
