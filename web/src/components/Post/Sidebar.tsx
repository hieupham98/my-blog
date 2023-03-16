import { FunctionComponent } from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ListTags from '../Home/TagList/ListTags';
import moment from 'moment';



const Sidebar: FunctionComponent = () => {
  return (
   <>
    <div className="sticky-top sidebar-sticky">
      
      <div className="post-list my-3">

        <Card className="card-sidebar card-profile-owner">
          <div className="row">
            <div className="post-owner-avatar">
              <Avatar src="/static/avatar.jpg"  sx={{ bgcolor: 'orange', width: 180, height: 180  }}>N</Avatar>
            </div>


          </div>
          <div className="row jutify-content-center mt-3">
            <Button className="button-primary button-follow"> Follow Me </Button>
          </div>


        </Card>
      </div>
      <div className="row  ">
        <ListTags />
      </div>
      <div className="post-list mt-3">
        <Card className="card-sidebar" sx={{  minHeight: 250 }}>
          <div className="row">
              <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
                IT
              </Typography>
              <Typography variant="h4" component="div">
                <h4>  10 Tips for develop an app by React.js </h4>
              </Typography>
              <div className="row mt-2">
                <div className="avatar-sidebar col-3">
                  <Avatar sx={{ bgcolor: 'orange', width: 24, height: 24  }}>N</Avatar>

                </div>
                <div className="col-5">
                  <span className="row"> HieuPham </span>
                  <span className="row date-time"> { moment().format('MMMM Do YYYY, h:mm a') } </span>
                </div>
                <div className="col-4">
                <Button className="button-read-post" size="small">Read</Button>

                </div>
              </div>
          </div>
        </Card>
        <Card className="card-sidebar mt-3" sx={{  minHeight: 250 }}>
          <div className="row">
              <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
                IT
              </Typography>
              <Typography variant="h4" component="div">
                <h4>  10 Tips for develop an app by React.js </h4>
              </Typography>
              <div className="row mt-2">
                <div className="avatar-sidebar col-3">
                  <Avatar sx={{ bgcolor: 'orange', width: 24, height: 24  }}>N</Avatar>

                </div>
                <div className="col-5">
                  <span className="row"> HieuPham </span>
    
                  <span className="row date-time"> { moment().format('MMMM Do YYYY, h:mm a') } </span>
                </div>
                <div className="col-4">
                <Button className="button-read-post" size="small">Read</Button>

                </div>
              </div>
          </div>
        </Card>
        <Card className="card-sidebar mt-3" sx={{  minHeight: 250 }}>
          <div className="row">
              <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
                IT
              </Typography>
              <Typography variant="h4" component="div">
                <h4>  10 Tips for develop an app by React.js </h4>
              </Typography>
              <div className="row mt-2">
                <div className="avatar-sidebar col-3">
                  <Avatar sx={{ bgcolor: 'orange', width: 24, height: 24  }}>N</Avatar>

                </div>
                <div className="col-5">
                  <span className="row"> HieuPham </span>
    
                  <span className="row date-time"> { moment().format('MMMM Do YYYY, h:mm a') } </span>
                </div>
                <div className="col-4">
                <Button className="button-read-post" size="small">Read</Button>

                </div>
                {/* <CardActions className="col-4 justify-content-end"> */}
                {/* </CardActions> */}
              </div>
          </div>
        </Card>
    </div>
      
    </div>
    
   </>
  )
}

export default Sidebar
