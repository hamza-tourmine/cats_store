import { useParams } from 'react-router-dom';
import dataJson from '../api/data.json'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useContext } from 'react';
import { Mycontext } from '../Context/Context';


export default function Details() {
  const [colorHeart, setcolorHeart] = React.useState(false);
  const useMycontext = useContext(Mycontext);
  const data = [...dataJson];
  const { id } = useParams();
  const product = data.find(item => item.id === +id);
  React.useEffect(() => {
    if (useMycontext.addToCart.type) {
      
      const idToLocalStorage = useMycontext.addToCart.id;
      const idFromLocalStorage = JSON.parse(localStorage.getItem('idProductFromCart')) || [];
      if (!idFromLocalStorage.includes(idToLocalStorage)){
        idFromLocalStorage.push(idToLocalStorage);
        localStorage.setItem('idProductFromCart', JSON.stringify(idFromLocalStorage));
      }
      console.log(JSON.parse(localStorage.getItem('idProductFromCart')));
    }
  }, [useMycontext]);
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={product.image}
          title="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
            <br />
            <span style={{ fontSize: '16px' }}>{product.price}
              <span style={{ color: 'black', fontSize: '17.8' }}>$</span>
            </span>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={() => { useMycontext.addToCart.type ? useMycontext.setAddToCart({id:'id' , type:false}) : useMycontext.setAddToCart({id:id , type:true}) }} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <IconButton onClick={() => { setcolorHeart(!colorHeart) }}>
             <FavoriteBorderIcon style={{ color: colorHeart ? 'red' : '' }} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
