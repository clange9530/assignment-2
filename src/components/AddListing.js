import React, { Component } from 'react';

class AddListing extends Component {
    state = {
        code: '',
        building: '',
        address: ''
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addListing(this.state);
        this.setState({
            code: '',
            name: '',
            address: ''
        })
    }
    render() {
        return(
           <div>
               <h3>Add A New Entry</h3>
               <form onSubmit={this.handleSubmit}>
                    <label>Code: </label>
                    <input type="text" name="code" onChange={this.handleChange} />
                    <label>Building Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <label>Address:</label>
                    <input type="text" name="address" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Add Building To Directory</button>
               </form>
           </div> 
        )
    }
}
export default AddListing;