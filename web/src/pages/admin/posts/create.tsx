import type { NextPage } from 'next'
import Button from '@mui/material/Button';

import styles from '../../../styles/Home.module.scss'
import AdminLayout from '../../../layouts/AdminLayout'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MainMonitor from '../../../components/Home/MainMonitor/Index'
import ListTags from '../../../components/Home/TagList/ListTags';
import PostCardItem from '../../../components/Post/PostCardItem';
import moment from 'moment';
import MarkdownEditor from '../../../components/Shared/MarkdownEditor'

import ListPost from '../../../components/Post/List/ListPost'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
        <AdminLayout>
          <div className="home-page pb-5">
            <div className="all-posts mt-2">
                <Container>
                  {/* <div className="row mb-4">
                    <h2> Write a new post</h2>
                  </div> */}
                  <MarkdownEditor />
                  <div className="row items-center">
                    <Button type="primary" style={{ width: 100 }} variant="outlined"> Submit </Button>
                  </div>
                  <div className="row mt-5">
                    <h2> All Articles.</h2>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xs-8 col-md-8  left pr-2">
                      <div>
                        <img src="static/banner-01.png" width="100%"/>
                      </div>
                      <div className="my-3">
                        <ListPost />
                      </div>
                    </div>
                    <div className="col-xs-4 col-md-4 right">
                      <div className="row">
                        <ListTags />
                      </div>
                      <Card className="card-sidebar mt-3" sx={{  minHeight: 250 }}>
                        <CardContent>
                          <div className="row">
                              <Typography sx={{ fontSize: 14 }} className="text-danger" gutterBottom>
                                Today
                              </Typography>
                              <Typography variant="h4" component="div">
                                <h4>  10 Tips for develop an app by React.js </h4>
                              </Typography>
                              <div className="row mt-5">
                                <div className="avatar col-3">
                                  <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>

                                </div>
                                <div className="col-5">
                                  <span className="row"> HieuPham </span>
                    
                                  <span className="row date-time"> { moment().format('MMMM Do YYYY, h:mm a') } </span>
                                </div>
                                <CardActions className="col-4 justify-content-end">
                                  <Button className="button-read-post" size="small">Read Post</Button>
                                </CardActions>
                              </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </Container>
            </div>
          </div>
        </AdminLayout>
    </div>
  )
}

export default IndexPage
