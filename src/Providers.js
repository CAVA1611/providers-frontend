import React from   'react';
import Provider from './Provider.js';
import Alert from './Alert.js';

class Providers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedProvider: null
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
    }

    handleEdit(provider){
        this.setState({
            selectedProvider: provider
        });
    }

    handleCloseError(){
        this.setState({
            selectedProvider: null
        });

    }





    render(){
    
        return(
            <div>
                <Alert message={this.state.selectedProvider} onClose={this.handleCloseError}/>
                <table class="table">
                <thead>
                    <tr>
                    <th>CIF</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>CODIGO POSTAL</th>
                    <th>PHONE</th>
                    <th>E-MAIL</th>
                    </tr>
                </thead>
                    {this.props.providers.map((provider) =>
                    <Provider provider={provider} onEdit={this.handleEdit}/>
                )}



        </table>
        </div>
        );
    }
}

export default Providers;