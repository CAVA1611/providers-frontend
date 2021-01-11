import React from 'react';


class NewProvider extends React.Component {
    constructor(props){
    super(props);
    this.state = {cif: '', name:'', addess: '', cp: '', phone:'', email:''};
    this.changeProvider = this.changeProvider.bind(this);
    this.clickAdd = this.clickAdd.bind(this);
    }   

    changeProvider(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }


    clickAdd() {
        this.props.onAddProvider(this.state);
        this.setState({
            cif: '', name:'', addess: '', cp: '', phone:'', email:''
        });

    }

    render() {
        return(
            <tr>
                <td><input className="form-control" name="cif" value={this.state.cif} onChange={this.changeProvider}></input></td>
                <td><input className="form-control" name="name" value={this.state.name} onChange={this.changeProvider}></input></td>
                <td><input className="form-control" name="address" value={this.state.address} onChange={this.changeProvider}></input></td>
                <td><input className="form-control" name="cp" value={this.state.cp} onChange={this.changeProvider}></input></td>
                <td><input className="form-control" name="phone" value={this.state.phone} onChange={this.changeProvider}></input></td>
                <td><input className="form-control" name="email" value={this.state.email} onChange={this.changeProvider}></input></td>
                <td><button className="btn btn-primary" onClick={this.clickAdd}>Add Provider</button></td>
            </tr>
        );
    }
}

export default NewProvider;