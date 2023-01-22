import React from "react";
import { Button , TextField , Box  , Grid} from '@mui/material'

export default function Translation({ runQuery , refreshPage , setInput , result , loading , title , Item}) {
  return (
    <>
      <h2>{title}</h2>
      <TextField sx={{width: '500px' , mb: 2}} rows={6} multiline onChange={(e) => setInput(e.target.value)}></TextField>

      <Grid container alignItems="center">
        <Button variant="outlined" disabled={loading} onClick={runQuery}> { loading ? 'Loading...' : 'Run' } </Button>
        <Button sx={{mx : 2}} color="secondary" variant="outlined" onClick={refreshPage}>Cancel</Button>
      </Grid>

      <Box sx={{width : "500px"}} component="h3">{result.length > 0 ? result : ""}</Box>
    </>
  );
}