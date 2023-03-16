import { FunctionComponent } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Typography from '@mui/material/Typography';
import moment from 'moment';

type PostCardType = {
  active?: boolean,
}

const PostCardItem: FunctionComponent<PostCardType> = ({ active }) => {
  return (
    <div className="post-card-item">
      <Card className={`card ${active ? 'active' : null}`} sx={{ minWidth: 275, width: 550, minHeight: 270 }}>
        <CardContent>
          <div className="row">
            <div className="col-6 left"> 
              <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
                Today
              </Typography>
              <Typography variant="h4" component="div" className="mb-5">
                <h4>  10 Tips for develop an app by React.js </h4>
              </Typography>
              <div className="row">
                <div className="avatar col-3">
                  <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
                </div>
                <div className="col-7 ml-5">
                  <span className="row"> HieuPham </span>
                  <span className="row date-time"> { moment().format('h:mm:ss a') } </span>
                </div>
            
            
              </div>
              <CardActions className="row mt-2 justify-content-end">
                <Button className="button-read-post" size="small"> <ArrowForwardIcon/> Read Post</Button>
              </CardActions>
            </div>
            <div className="col-6 right">
              <div className="imagePost">
                <img src="static/demo1.jpg" width="100%" height="100%"/> 
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PostCardItem
