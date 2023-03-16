import { FunctionComponent } from 'react'
import Link from 'next/link'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import _get from 'lodash/get'

import Typography from '@mui/material/Typography';

import moment from 'moment';

type PostCardType = {
  post?: {
    image_url?: String,
    title?: String,
    owner?: Object,
    created_at?: String,
  },
}

const PostItemSquare: FunctionComponent<PostCardType> = ({ post }) => {
  return (
    <>
      <div className="pic-post col-5">
        <div className="pic-post-inner">
       
          <img src={`http://localhost:8002/storage/image/${post.image_url ? post.image_url : ''}`} width="100%"/>

        </div>
      </div>
      <div className="col-7">
        <Card className="card-post" sx={{ minWidth: 275,  minHeight: 200 }}>
          <CardContent>
            <div className="row">
                <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
                  Today
                </Typography>
                <Typography variant="h4" component="div">
                  <Link href="/it/ok">
                    <h4 className="cursor-pointer">  {post?.title} </h4>
                  </Link>
                </Typography>
                <div className="row mt-5">
                  <div className="avatar col-2">
                    <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>

                  </div>
                  <div className="col-6">
                    <span className="row"> {_get(post, 'owner.name')} </span>
                    <span className="row date-time"> { moment(post?.created_at).format('MMMM Do YYYY, h:mm a') } </span>
                  </div>
      
                  <CardActions className="col-4 justify-content-end">
                    <Button className="button-read-post" size="small">Read Post</Button>
                  </CardActions>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
    
  )
}

export default PostItemSquare;
