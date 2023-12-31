import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.css"


export const ItemDetail = ( {item} ) => {

  const cartContext = useContext(CartContext)

  const {carrito, agregarAlCarrito} = cartContext

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  

  return (
   <div className='detail-container'>
      <div className='detail-title'>
          <h3>{item.titulo}</h3>

      </div>
    
      <div className='detail-producto'>  
          <img src={item.imagen} className="imgg" alt={item.titulo}></img>
          <p className='precio'>Precio: ${item.precio}</p>
      </div>
      <div className='container-itemcount'>
      <ItemCount
      cantidad={cantidad}
      handleRestar={handleRestar}
      handleSumar={handleSumar}
      handleAgregar={() => { agregarAlCarrito(item, cantidad) }}/>
      </div>
      
           
   
    </div>
  )
} 



