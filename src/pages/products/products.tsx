import React from 'react'
import WrapperContent from '../../components/layout/wrapperContent'
import './style.css'
import Security from '../../components/layout/protected/index';
import {FaTrash, FaPencilAlt} from "react-icons/fa";
import { productApi } from '../../services/productApi';
import { GlobalRequestResult } from '../../interface';

const Products = () => {
  const deleteProduct = async(idProduct:any) => {
    try {
      const conf = window.confirm("¿Desea Eliminar el Producto?");
      if(conf){
        const {data} = await productApi.put<GlobalRequestResult>('')
      }
    } catch (error) {
      
    }
  }
  return (
    <Security>
      <WrapperContent>
        <div className="products">
          <h3>Productos</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Presentación</th>
                <th>Stock</th>
                <th>Distribuidor</th>
                <th>Imagen</th>
                <th>Precio Venta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ricocat</td>
                <td>1 kilo</td>
                <td>5</td>
                <td>distribuidor vecino</td>
                <td><img className="imgProduct" src={'https://plazavea.vteximg.com.br/arquivos/ids/347433-450-450/20019999.jpg'} alt="" /></td>
                <td>10.00</td>
                <td>
                  <button> <FaPencilAlt/>Editar</button>
                  <button> <FaTrash />Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Ricocat</td>
                <td>1 kilo</td>
                <td>5</td>
                <td>distribuidor vecino</td>
                <td><img className="imgProduct" src={'https://plazavea.vteximg.com.br/arquivos/ids/347433-450-450/20019999.jpg'} alt="" /></td>
                <td>10.00</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Ricocat</td>
                <td>1 kilo</td>
                <td>5</td>
                <td>distribuidor vecino</td>
                <td><img className="imgProduct" src={'https://plazavea.vteximg.com.br/arquivos/ids/347433-450-450/20019999.jpg'} alt="" /></td>
                <td>10.00</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
              <tr>
                <td>Ricocat</td>
                <td>1 kilo</td>
                <td>5</td>
                <td>distribuidor vecino</td>
                <td><img className="imgProduct" src={'https://plazavea.vteximg.com.br/arquivos/ids/347433-450-450/20019999.jpg'} alt="" /></td>
                <td>10.00</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </WrapperContent>
    </Security>
  )
}

export default Products