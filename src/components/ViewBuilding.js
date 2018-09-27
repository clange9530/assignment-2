import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuildingId } = this.props;
		const selectedBuildingInfo = data[selectedBuildingId];
		const code = selectedBuildingInfo.code;
		const name = selectedBuildingInfo.name;
		const address = selectedBuildingInfo.address;
		const coordinates = selectedBuildingInfo.coordinates;
		
		let codeRow, nameRow, addressRow, coordRow;

		if(code != null){
			codeRow = <tr>
				<th>Code</th>	
					<td>{code}}</td>
			</tr>;
		}

		if(name != null){
			nameRow = <tr>
				<th>Name</th>	
					<td>{name}}</td>
			</tr>;
		}

		if(address != null){
			addressRow = <tr>
				<th>Address</th>
				<td>{address}</td>
			</tr>
		}

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
						<codeRow code={code}/>
						{codeRow}
						<nameRow name={name}/>
						{nameRow}
						<addressRow address={address}/>
						{addressRow}
						<coordRow coordinates={coordinates}/>
						{coordRow}
					</tbody>
				</table>
			</div>
		);
	}
}
export default ViewBuilding;
