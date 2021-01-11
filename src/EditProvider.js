import React from 'react';

function EditProvider(props) {
    const handleChange = event => {
        props.onChange({...props.provider, [event.target.name]: event.target.value})
    }
    return (
        <tr>
            <td><input className="form-control" name="cif" value={props.provider.cif} onChange={handleChange}></input></td>
            <td><input className="form-control" name="name" value={props.provider.name} onChange={handleChange}></input></td>
            <td><input className="form-control" name="address" value={props.provider.address} onChange={handleChange}></input></td>
            <td><input className="form-control" name="cp" value={props.provider.cp} onChange={handleChange}></input></td>
            <td><input className="form-control" name="phone" value={props.provider.phone} onChange={handleChange}></input></td>
            <td><input className="form-control" name="email" value={props.provider.email} onChange={handleChange}></input></td>
            <td>
                <button className="btn btn-primary" onClick={() => props.onSave(props.provider)} >Save</button>
                <button className="btn btn-primary" onClick={() => props.onCancel(props.provider)}>Cancel</button>
            </td>


        </tr>
    )

}

export default EditProvider;