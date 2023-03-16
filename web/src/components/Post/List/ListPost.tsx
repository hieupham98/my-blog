import { FunctionComponent } from 'react'
import PostItemSquare from '../PostItemSquare';
import { useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import {
  fetchAll,
  selectStatus
} from '../../../features/post/postSlice'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { Skeleton } from '@mui/material';

type ListPost = {
  posts?: Array<Object>,
  paginate?: {
    current_page?: Number
  },
}

const ListPost: FunctionComponent<ListPost> = ({ posts, paginate }) => {

  const dispatch = useDispatch();

  const statusLoading = useAppSelector(selectStatus);

  const handleChangePage = (e, page) => {
    dispatch(fetchAll({ page }))
  }

  return (
      <>
        {
          paginate && 
          <Pagination 
            className="row justify-content-end mt-2" 
            page={paginate.current_page} 
            count={Math.ceil(paginate.total / paginate.per_page)} 
            variant="outlined" color="primary" 
            onChange={handleChangePage}
          />
        }
        {
           posts && posts.map((post) => (
            <div className="row list-post_item mt-4">
              <PostItemSquare post={post} />
            </div>
           ))
        }
        {
          paginate && 
          <Pagination 
            className="row justify-content-end mt-5" 
            page={paginate.current_page} 
            count={Math.ceil(paginate.total / paginate.per_page)} 
            variant="outlined" color="primary" 
            onChange={handleChangePage}
          />
        }
      </>
  )
}

export default ListPost;
