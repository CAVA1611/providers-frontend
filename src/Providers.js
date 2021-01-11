import React from   'react';
import Provider from './Provider.js';
import Alert from './Alert.js';
import NewProvider from './NewProvider.js';
import EditProvider from './EditProvider.js';


class Providers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errorInfo: null,
            providers: this.props.providers,
            isEditing: {}
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseError = this.handleCloseError.bind(this);
        this.addProvider = this.addProvider.bind(this);
    }

    handleEdit(provider){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [provider.name]: provider}
        }));
    }

    handleDelete(provider){
        this.setState(prevState => {
            providers: prevState.providers.filter((c) => c.name !== provider.name)
        })

    }

    handleCancel(name, provider) {
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[name];
            return{
                isEditing: isEditing
            }
        })
    }

    handleChange(name, provider){
        this.setState(prevState => ({
            isEditing: {...prevState.isEditing, [name]: provider}
        }))
    }

    handleSave(name, provider){
        this.setState(prevState => {
            const isEditing = Object.assign({}, prevState.isEditing);
            delete isEditing[name];

            if(name === provider.name) {
                const providers = prevState.providers;
                const pos = providers.findIndex(c => c.name === provider.name);
                return{
                    providers: [...providers.slice(0,pos), Object.assign({}, provider), ...providers.slice(pos+1)],
                    isEditing: isEditing

                }
            }

            return{
                errorInfo: "cannot edit"
            }

        });

    }

    handleCloseError(){
        this.setState({
            errorInfo: null
        });

    }


    addProvider(provider) {
        this.setState(prevState => {
            const providers = prevState.providers;
            if(!providers.find(c=> c.name === provider.name)) {
                return({
                    providers: [...prevState.providers, provider]
                });
            }
            return ({
                errorInfo: 'Provider already exist'
            });
        });
    }





    render(){
    
        return(
            <div>
                <Alert message={this.state.errorInfo} onClose={this.handleCloseError}/>
                <table class="table">
                <thead>
                    <tr>
                    <th>CIF</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>CODIGO POSTAL</th>
                    <th>PHONE</th>
                    <th>E-MAIL</th>
                    <th>&nbsp;</th>
                    </tr>
                </thead>
                <NewProvider onAddProvider={this.addProvider}/>
                    {this.state.providers.map((provider) =>
                    ! this.state.isEditing[provider.name] ?
                    <Provider key={provider.name} provider={provider} 
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}/>
                    :
                    <EditProvider key={provider.name} provider={this.state.isEditing[provider.name]} 
                    onCancel={this.handleCancel.bind(this, provider.name)}
                    onChange={this.handleChange.bind(this, provider.name)}
                    onSave={this.handleSave.bind(this, provider.name)}/>
                    )}



        </table>
        </div>
        );
    }
}

export default Providers;