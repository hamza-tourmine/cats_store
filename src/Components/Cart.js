import dataJson from '../api/data.json';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const idFromLocalStorage = JSON.parse(localStorage.getItem('idProductFromCart'));
const quantityfromStorage = JSON.parse(localStorage.getItem('quantity'));
export default function Cart(){
  const data = [...dataJson];
  console.log(data);
  let productstoCart = [];
  for (let i = 0; i < data.length; i++) { 
    for (let j = 0; j < idFromLocalStorage.length; j++) {
      if (data[i].id === +idFromLocalStorage[j]) {
        productstoCart.push(data[i]);
        break;
      }
    }
  }
  function deletee(id,data){
    window.location.reload(); 
    const newArray = idFromLocalStorage.filter(item => +item !== id);
    localStorage.setItem('idProductFromCart',JSON.stringify(newArray));
    const newQuantity = quantityfromStorage.filter(item => +item !== +data);
    localStorage.setItem('quantity',JSON.stringify(newQuantity));
  }
  const cartJSON = productstoCart.map((item ,index)=>{
    return  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={item.image}
      title="Product Image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
        <br />
        price :
        <span style={{ fontSize: '16px' }}>{item.price}
          <span style={{ color: 'black', fontSize: '17.8' }}>$</span>
        </span>
        <br/>
        quantity : {quantityfromStorage[index]}
        <br/>
        Total : {+quantityfromStorage[index]*+item.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {/* {item.description} */}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>{deletee(item.id,quantityfromStorage[index])}} variant="contained">Delete</Button>
    </CardActions>
  </Card>
  })
  return <div style={{ display:'flex',flexWrap:'wrap',position: 'absolute', top: '20%', left: '20%' }}>
    {cartJSON} 
  </div>
}