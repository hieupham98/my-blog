import { FunctionComponent } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Typography from '@mui/material/Typography';
import moment from 'moment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const FavoriteButton: FunctionComponent = () => {
  return (
   <>
    <span className="btn-favorite">
      <FavoriteBorderIcon />
    </span>
    <br />
    <span className="count-favorite"> 123 </span>
   </>
  )
}

export default FavoriteButton
