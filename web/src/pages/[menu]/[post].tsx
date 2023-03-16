import type { NextPage, GetStaticPaths } from 'next'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import {
  selectPosts,
  fetchAll
} from '../../features/post/postSlice'

import styles from '../../styles/Home.module.scss'
import DefaultLayout from '../../layouts/DefaultLayout'
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Markdown from '../../components/Shared/Markdown/index';
import  content from '../../constants/content.md';

import FavoriteButton from '../../components/FavoriteButton';
import Sidebar from '../../components/Post/Sidebar';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
    IT
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/getting-started/installation/"
    onClick={handleClick}
  >
    Core
  </Link>,
  <Typography key="3" color="text.primary">
    Breadcrumb
  </Typography>,
];

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(selectPosts);
  console.log('po', posts);

  return (
    <div className={styles.container}>
        <DefaultLayout>
          <div className="home-page pb-5">
            <div className="all-posts mt-5">
                <Container>
                  <div className="row">
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                      {breadcrumbs}
                    </Breadcrumbs>
                  </div>
                  <div className="row mt-3 mb-5">
                    <div className="col-xs-9 col-md-9 left pr-3">
                      <div className="row title-row border-bottom mt-3">
                        <h2> 10 Tips for develop an app by React.js an app by React.js
                        an app by React.js
                        </h2>
                      </div>
                      <div className="row mt-4">
                          <div className="col-1 favorite-side">
                            <div className="sticky-top sidebar-sticky text-center">
                              <FavoriteButton />
                            </div>
                          </div>
                          <div className="col-11 post-content-box">
                            <div className="row">
                              <div className="avatar col-1">
                                  <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
                              </div>
                              <div className="col-6">
                                <span className="row"> HieuPham </span>
                  
                                <span className="row date-time"> { moment().format('MMMM Do YYYY, h:mm a') } </span>
                              </div>
                            </div>
                           
                            <div className="row mt-4 mb-4">
                              <Markdown markdown={content} />
                            </div>
                          </div>
                      </div>
                      <div className="row title-row border-top">
                      </div>
                    </div>
                    <div className="col-xs-3 col-md-3 right">
                      <Sidebar />
                    </div>
                  </div>
                </Container>
            </div>
          </div>
        </DefaultLayout>
    </div>
  )
}

export default IndexPage
