import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Providers from './Providers.js';


function App() {
  const providers = [{
    cif: "A89325672", 
    name: "Proveedor 4", 
    address: "Barcelona", 
    cp:"54324", 
    phone: "0911111324",
    email:"provedor4@gmail.com",
    //code: "IJK101", 
    //stock_sale: "200"
  },
  {
    cif: "A65321782", 
    name: "Proveedor 3", 
    address: "Malaga", 
    cp:"18945", 
    phone: "0987690000", 
    email:"provedor3@gmail.com",
    //code: "FGH789", 
    //stock_sale": "200"}

  }];
  return (
    <div>
    <h1>PROVIDERS INFO</h1>
    <Providers providers = {providers}/>
    </div>
  );
}

export default App;
