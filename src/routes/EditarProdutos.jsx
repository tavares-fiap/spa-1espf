import React from 'react'
import { useParams } from 'react-router-dom'

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "Editar Produtos " + id;

  return (
    <div>
        <h1>Editar Produtos</h1>
        <h2>Produto selecinado : {id}</h2>
        
    </div>
  )
}
