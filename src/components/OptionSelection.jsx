import React from 'react'
import { Card , Grid , CardContent , CardActions , Button } from '@mui/material'

export default function OptionSelection({arrayOptions , selectOption , Item}) {
  return (
    <>
      <h1>VITE x OPENAI ChatGPT</h1>
      <Grid container spacing={2}>
        {arrayOptions.map(option => {
          return <Grid key={option.id} item xs={4}>
            <Item>
              <CardContent>
                <h2>{option.name}</h2>
                <span>{option.description}</span>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" onClick={()=>{ selectOption(option) }}>Try</Button>
              </CardActions>
            </Item>
          </Grid>
        })}
      </Grid>
    </>
  )
}
