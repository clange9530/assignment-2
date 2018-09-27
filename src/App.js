import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddListing from './components/AddListing';

class App extends React.Component {
  state = {
    data: this.props.data,
    filterText: '',
    selectedBuilding: 0
  }

  filterUpdate(value) {
    this.setState({
      filterText: value 
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  deleteListing = (id) => {
		let data = this.state.data.filter(building => {
			return building.id !== id
		});
		this.setState({
			data
		});
  }
  
  addListing = (building) => {
    building.id = Math.random()*10;
    let data = [...this.state.data, building];
    this.setState({
      data
    });
  }



  render() {
    console.log(this.state.filterText);
    return (
      
      <div className="bg">
        <div className="row" class="header">
          <h1>UF Directory App</h1>
        </div>

        <Search 
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Building</th>
                    </tr>
                  </thead>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    deleteListing={this.deleteListing}
                  /> 
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              data={this.props.data}
              selectedBuildingId={this.state.selectedBuilding}
              />
              <AddListing 
              addListing={this.addListing}
              />
            </div>
          </div>
          <Credit class="credit" />
        </main>
      </div>
    );
  }
}

export default App;
