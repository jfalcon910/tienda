import React, { useEffect, useState } from 'react'
import WrapperContent from '../../components/layout/wrapperContent'
import './style.css'
import Security from '../../components/layout/protected/index';
import {FaTrash, FaPencilAlt} from "react-icons/fa";
import { productApi } from '../../services/productApi';
import { GlobalRequestResult, ProductInterface } from '../../interface';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  let navigate = useNavigate();
  const [data, setData] = useState<ProductInterface[]>([]);
  useEffect(() => {
    getData();
  }, [])

  const getData = async() =>{
    const req:any = await productApi.get('/');
    const {data} = req;
    const {result} = data;
    setData(result);
  }
  const deleteProduct = async(idProduct:any) => {
    try {
      const conf = window.confirm("¿Desea Eliminar el Producto?");
      if(conf){
        const {data} = await productApi.put<GlobalRequestResult>(`/delete/${idProduct}`);
        console.log(data);
        const {status, result} = data;
        if(status){
          alert(result);
          getData();
        }
      }
    } catch (error:any) {
      alert(error.response.data.result)
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
              {data.map((product, index)=>{
                return(
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.actualStock}</td>
                    <td>{product.supplier.name}</td>
                    <td><img className="imgProduct" src={product.photo} alt="" /></td>
                    <td>{product.price}</td>
                    <td>
                      <div className="contentButtons d-flex">
                        <button> <FaPencilAlt/>Editar</button>
                        <button onClick={()=>{deleteProduct(product._id)}}> <FaTrash />Eliminar</button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </WrapperContent>
    </Security>
  )
}

export default Products