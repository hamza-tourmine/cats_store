
import '../styles/header.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Mycontext } from '../Context/Context';


// 

import { styled } from '@mui/system';
import { Badge, badgeClasses } from '@mui/base/Badge';



// 


export default function  Headers() {
    const useMycontext = useContext(Mycontext);


    
 return (
    <div className="HeaderContainter">
    <div className='headerPart1'>
    <h1>CatsStore</h1>
        <ul>
            <li><Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link></li>
            <li><Link to='/products' style={{textDecoration:'none',color:'black'}}>Products</Link></li>
            <li><Link to='/cart' style={{textDecoration:'none',color:'black'}}>Cart</Link></li>
        </ul>
    </div>
    <Link to='/cart'>
      <StyledBadge badgeContent={JSON.parse(localStorage.getItem('idProductFromCart')).length} showZero>
          <AddShoppingCartIcon style={{color:`${useMycontext.addToCart.type?'red':'blue'}`}}/>
      </StyledBadge>
    </Link>
        
    </div>
 )
}
const blue = {
    500: '#007FFF',
  };
  const grey = {
    300: '#afb8c1',
    900: '#24292f',
  };
  const StyledBadge = styled(Badge)(
    ({ theme }) => `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 10px;
    list-style: none;
    font-family: IBM Plex Sans, sans-serif;
    position: relative;
    display: inline-block;
    line-height: 1;
  
    & .${badgeClasses.badge} {
      z-index: auto;
      position: absolute;
      top: -6;
      right: 0;
      min-width: 20px;
      height: 20px;
      padding: 0 6px;
      color: #fff;
      font-weight: 600;
      font-size: 10px;
      line-height: 20px;
      white-space: nowrap;
      text-align: center;
      border-radius: 12px;
      background: ${blue[500]};
      box-shadow: 0px 4px 6x ${theme.palette.mode === 'dark' ? grey[900] : grey[300]};
      transform: translate(50%, -50%);
      transform-origin: 100% 0;
    }
  
    & .${badgeClasses.invisible} {
      display: none;
    }
    `,
  );