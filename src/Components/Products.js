
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { useParams } from 'react-router-dom';

import dataJson from "../api/data.json";
import '../styles/Home.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

import { useContext } from 'react';
import { Mycontext } from '../Context/Context';
// Router dom

export default function ProductComp(){
   const useMycontext = useContext(Mycontext);
   const [quantity, setquantity] = React.useState(1);
   const data = [...dataJson];
   
   React.useEffect(() => {
     if (useMycontext.addToCart.type) {
       console.log(useMycontext.addToCart.type);
       console.log(useMycontext.addToCart.id);
       const idToLocalStorage = useMycontext.addToCart.id;
       const idFromLocalStorage = JSON.parse(localStorage.getItem('idProductFromCart')) || [];
   
       if (!idFromLocalStorage.includes(idToLocalStorage)) {
         const quantityFromLocalStorage = JSON.parse(localStorage.getItem('quantity')) || [];
         console.log(quantityFromLocalStorage);
   
         idFromLocalStorage.push(idToLocalStorage);
         localStorage.setItem('idProductFromCart', JSON.stringify(idFromLocalStorage));
   
         quantityFromLocalStorage.push(quantity);
         localStorage.setItem('quantity', JSON.stringify(quantityFromLocalStorage));
   
         // Update the component's state to reflect the new data in the localStorage.
         setquantity(quantity + 1);
         window.location.reload()
       }
     }
   
   }, [useMycontext]);
   
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
      <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
    </CardContent>

   <IconButton onClick={() => { useMycontext.addToCart.type ? useMycontext.setAddToCart({id:product.id , type:false}) : useMycontext.setAddToCart({id:product.id , type:true}) }} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
   </IconButton>
   <input placeholder='Quan'  onChange={(ev)=>{setquantity(ev.target.value)}} />
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




