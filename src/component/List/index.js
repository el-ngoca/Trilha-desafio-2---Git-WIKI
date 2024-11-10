import React from 'react'
import { ListContainer, ListDescription, ListTitle } from './Styles'


function ItemList({title, description, language}) {
  return (
    <ListContainer>
        <>
        <ListTitle>{title}</ListTitle>
        <ListDescription>
          {description}
          <span style={{marginTop:"10px"}}>
            <strong>Linguagem:</strong> {language}
          </span>
          
        </ListDescription>
        <hr/>
        </>
    </ListContainer>
  )
}

export default ItemList