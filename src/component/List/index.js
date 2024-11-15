import React from 'react'
import { ListContainer, ListDescription, ListTitle } from './Styles'


function ItemList({title, description, language, date}) {
  const created = new Date(date).toLocaleDateString('en-CA')
  return (
    <ListContainer>
        <>
        <ListTitle>{title}</ListTitle>
        <ListDescription>
          {description}
          <span style={{marginTop:"10px", display: 'flex', justifyContent: 'space-between', color: '#539BF5'}}>
            <strong>Linguagem: <span style={{color: 'whitesmoke'}}>{language}</span></strong> 
            <strong>Created_at: <span style={{color: 'whitesmoke'}}>{created}</span></strong> 
          </span>
          
        </ListDescription>
        <hr/>
        </>
    </ListContainer>
  )
}

export default ItemList