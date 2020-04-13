import React from 'react';
import { Query } from 'react-apollo';
import { CLIENTS_QUERY } from '../querys/index'
import {Link} from 'react-router-dom';

const Contactos = () =>(
    <Query query={CLIENTS_QUERY}>
        {({loading,error,data})=>{
            if(loading) return "Loading"
            if(error) return `Error: ${error.message}`

            return(
                    <>
                        <h2 className="text-center">Listando de clientes</h2>
                        <ul className="list-group mt-4">
                            { data.getClientes.map( item => (
                                <li key={item.id} className="list-group-item">
                                    <div className="row justify-content-between aling-items-center">
                                        <div className="col-md-8 d-flex -justify-contemt-between aling-items-center">
                                            {item.nombre} {item.apellido} - {item.empresa}
                                        </div>
                                        <div className="col-md-4 d-flex justify-content-end">
                                            <Link to={`/client/edit/${item.id}`} className="btn btn-success d-block d-md-inline-block">
                                                Editar Cliente
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </>
            )
        }}
    </Query>
)

export default Contactos;