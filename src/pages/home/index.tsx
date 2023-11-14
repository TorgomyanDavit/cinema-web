import React, {useEffect} from 'react';
import "./styles/styles.scss";
import { BsFillPlayFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SimpleSlider from '../../component/slider/simpleSlider';
import { changeMovie } from '../../store/slices/movie/movieSlice';
import FeaturedVideoBlock from '../../component/feauteredVideoBlock';

function HomePage() {
  const { Featured,TendingNow } = useAppSelector((state) => state.movieSlice );
  const dispatch = useAppDispatch()

  function handleChangeMovie(currentItemId:string) {
    dispatch(changeMovie({currentItemId}))
  }

  useEffect(() => {
    const currentItemId = sessionStorage.getItem("currentItemId")
    dispatch(changeMovie({currentItemId,sortSliderID:currentItemId}))
  },[])

  return (
    <div className='home_page'>
      <FeaturedVideoBlock lastFeaturedMovie={Featured}/>
      <div className='mainButtonContainer'>
        <button className='main_button'><BsFillPlayFill/><span>Play</span></button>
        <button className='main_button more_info'>More Info</button>
      </div>

      <div className='move_item_container'>
        <p className='title'>Trending Now</p>
        <div className='item_parent'>
          <SimpleSlider filteredTendingNow={TendingNow} callBack={handleChangeMovie}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;