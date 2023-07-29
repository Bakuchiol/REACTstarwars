import React, {  useState} from 'react'
import MainLayout from '../layout/MainLayout'
import HomePage from '../components/HomePage'
import homeImgs from '../models/homeImgs'
import Button from '../components/Button'

// console.log(homeImgs)

function Home() {
  // pics
  // const [currentPic, setCurrentPic] = useState(homeImgs[0]);
  // count
  const [count, setCount] = useState(0)

  const nextImg = () => {
    if(count >= (homeImgs.length - 1)){
      setCount(0)
    }else{
      setCount(count + 1)
    }
  }

  const prevImg = () => {
    if(count === 0){
      setCount(homeImgs.length - 1)
    } else {
      setCount(count - 1)
    }
  }


  return (
    <div>
      <MainLayout>
      <div id='btnWrapper'>
        <div className='leftBtn'>
            <Button changePic={prevImg} />
        </div>
            <Button changePic={nextImg} />
          </div>
        <div id='homePage'>
          <HomePage count={count} img={homeImgs}/> 
        </div>
      </MainLayout>
    </div>
  )
}

export default Home
