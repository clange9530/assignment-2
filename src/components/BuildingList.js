import React from 'react';

	const BuildingList = ({deleteListing, filterText, selectedUpdate, data }) => {

	const buildingList = data.filter(directory =>{
		return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
	}).map(directory => {
		return (
			<tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
				<td>{directory.code} </td>
				<td> {directory.name} </td>
				<td>
					<button onClick={() => {deleteListing(directory.id)}}>Delete</button>
				</td>
			</tr>
		);
	});

	return <tbody>{buildingList}</tbody>;
	}

export default BuildingList;
