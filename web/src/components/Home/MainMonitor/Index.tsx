import { FunctionComponent, useState, useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PostItemMain from './PostItemMain';

type Item = {
  active?: boolean,
}

const Index: FunctionComponent<Item> = ({ active = false  }) => {

  const posts = [{
    id: 1,
    title: '10 Tips for develop an app by React.js', 
    img: 'static/react.png'
  }, {
    id: 2,
    title: 'How to hack a website without Linux', 
    img: 'static/demo1.jpg'
  }, {
    id: 4,
    title: 'Ready to pour… the Font Awesome 6 Beta!', 
    img: 'static/banner-01.png'
  }, {
    id: 5,
    title: 'Subscribe to Font Awesome Pro to get even more!', 
    img: 'static/demo1.jpg'
  }]
  
  const [postCurrent, setPostCurrent] = useState(posts[0]);
  const [index, setIndex] = useState(0);

  const handleBack: any = () => {
    if(index > 0) {
      const newIndex = index - 1;

      setIndex(newIndex)
    } else {
      setIndex(posts.length - 1)
    }
  }

  const handleForward: any = () => {


    const newIndex = index + 1;
    setIndex(newIndex)

   
  }

  useEffect(() => {
    const re = document.getElementsByClassName(`home-slider-${postCurrent.id}`)
    re[0].classList.add('blink');

    posts.map((post) => {
      if (post.id != postCurrent.id) {
        let re = document.getElementsByClassName(`home-slider-${post.id}`)
        re[0] && re[0].classList.remove('blink');
      }
    


    })
  }, [postCurrent])

  useEffect(() => {
    if(index < posts.length) {
      setPostCurrent(posts[index]);
    } else {
      setPostCurrent(posts[0])
      setIndex(0)
  
    }
  }, [index])

  return (
    <>
      <div className={ `home-slider home-slider-${postCurrent.id}` }> 
        <div className="home-slider_up">
            <img src={postCurrent.img}  width="100%"  />
            <div className="function-button">
              <div>
                <button onClick={handleBack} className="btn-arrow"><ArrowBackIcon /></button>
                <button onClick={handleForward} className="btn-arrow"><ArrowForwardIcon/></button>
              </div>
            </div>
        <div className="home-slider_bottom row">
            <div className="home-slider_content col-6">
              <PostItemMain post={postCurrent}/>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Index
