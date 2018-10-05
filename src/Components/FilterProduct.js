import React from "react";

export const FilterProduct = (product) => {
  return(
    <div>
      {
        product.product.map((e) => {
          return(
            <div  key={e.name}>
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
          )
        })
      }

    </div>
  )

} 