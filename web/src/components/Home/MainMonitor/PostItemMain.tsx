import { FunctionComponent } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import Link from 'next/link'

import Typography from '@mui/material/Typography';

type PostItem = {
  post ?: {
    title: String,
    img: String,
    author?: Object,
  }
}

const PostItemMain: FunctionComponent<PostItem> = ({ post }) => {
  return (
    <div>
      <Card className="card" sx={{ minWidth: 275, width: 550, minHeight: 248 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
            Today
          </Typography>
          <Typography variant="h4" component="div">
            <h4>  {post.title} </h4>
          </Typography>
            <div className="row mt-5">
            <div className="avatar col-2">
              <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>

            </div>
            <div className="col-6">
              <span className="row"> HieuPham </span>
 
              <span className="row date-time"> { moment().format('MMMM Do YYYY, h:mm a') } </span>
            </div>
             
            <CardActions className="col-4 justify-content-end">
              <Link href="/it/say-hello">
                <Button className="button-read-post" size="small">Read Post</Button>
              </Link>
            </CardActions>
          </div>
        </CardContent>
      </Card>        
    </div>
  )
}

export default PostItemMain
