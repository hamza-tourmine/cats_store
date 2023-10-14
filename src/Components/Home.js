import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Button from '@mui/material/Button';
import dataJson from "../api/data.json";
import '../styles/Home.css';

// Router dom
import {Link} from 'react-router-dom'
export default function Products(){
  const data =[...dataJson]
let JSXProducts =data.map((product)=>{
  return <Card className='Card' key={product.id} sx={{ maxWidth: 365 }}>
  <CardActionArea>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt="green iguana"
    />
    <CardContent>
      <Typography variant="body2" color="text.dark">
      <div style={{textAlign:'start'}}>
         {product.price +'$'}
         <br/>
          {product.name}
      </div>
      </Typography>
    </CardContent>
<Link to={`/Details/${product.id}`}>
<Button  style={{float:'left',marginBottom:'6px',marginLeft:'6px'}} variant="contained">Details</Button>
</Link>
  </CardActionArea>
</Card>
})
    return<Container>
      <h1 style={{backgroundColorcolor:'red'}}>Products</h1>
      <div className='HomeContainer'>
       {JSXProducts}
    </div>
    </Container>
    
}




