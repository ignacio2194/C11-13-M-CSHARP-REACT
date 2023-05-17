import Card from "../card/card";

import React from 'react'

export default function CardMenu() {

    const categoria = ['entradas','ensalada', 'sopas', 'pescados y mariscos', 'carnes', 'aves', ]

  return (
    <div>
            {categoria.map((el)=><Card props={el}/>)}
    </div>
  )
}
