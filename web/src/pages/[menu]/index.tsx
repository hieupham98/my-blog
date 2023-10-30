import type { NextPage, GetStaticPaths } from 'next'
import { useEffect } from 'react';
import styles from '../../styles/Home.module.scss'
import DefaultLayout from '../../layouts/DefaultLayout'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
  fetchAll,
  selectPosts
} from '../../features/post/postSlice'
import ListPost from '../../components/Post/List/ListPost'
import Sidebar from '../../components/Post/Sidebar';
import { useAppSelector, useAppDispatch } from '../../app/hooks'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


const IndexPage: NextPage = ({ menu }) => {
  const dispatch = useAppDispatch();
  const { data: posts, meta: paginatePosts } = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [])

  return (
    <div className={styles.container}>
        <DefaultLayout>
          <div className="home-page pb-5">
            <div className="all-posts mt-5">
                <Container>
                  <div className="row">
                    <h2> All Articles {menu}.</h2>
                  </div>
                  <div className="row mt-3">
                    <div className="col-xs-12 col-md-9  left pr-2">
                      <div>
                        <img src="static/banner-01.png" width="100%"/>
                      </div>
                      <div className="my-3">
                        <ListPost posts={posts} paginate={paginatePosts} />
                      </div>
                    </div>
                    <div className=" col-md-3 right">
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
