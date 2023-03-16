import type { NextPage } from 'next'
import { useEffect } from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link'

import styles from '../../../styles/Home.module.scss'
import AdminLayout from '../../../layouts/AdminLayout'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import moment from 'moment';

import ListPost from '../../../components/Post/List/ListPost'
import { getPosts } from '../features/api/posts';
import { useDispatch } from 'react-redux';
import {
  fetchAll,
  selectPosts
} from '../../../features/post/postSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();
  const { data: posts, meta: paginatePosts } = useAppSelector(selectPosts);


  useEffect(() => {
    dispatch(fetchAll());
  }, [])
  
  return (
    <div className={styles.container}>
        <AdminLayout>
          <div className="home-page pb-5">

            <div className="all-posts mt-5">
                <Container>
                  <div className="">
                    <h2> All Articles.</h2>
                    <div className="float-right">
                      <Link href="/admin/posts/create">
                        <Button variant="outlined">Create New Posts</Button>

                      </Link>
                    </div>
                  </div>
                  <div className="row mt-3">
                    
                    <div className="col-xs-8 col-md-8  left pr-2">
                      <div>
                      </div>
                      <div className="my-3">
                        <ListPost posts={posts} paginate={paginatePosts} />
                      </div>
                    </div>
                    <div className="col-xs-4 col-md-4 right">
                    
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
