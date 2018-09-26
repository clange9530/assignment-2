import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
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
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  /> 
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
              data={this.props.data}
              selectedBuildingId={this.state.selectedBuilding}
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
