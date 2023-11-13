import React, {useEffect} from 'react';
import "./styles/styles.scss";
import MainTitleImg from '../../assets/FeaturedTitleImage.png';
import { BsFillPlayFill } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TendingNowItemType } from '../../store/slices/movie/type';
import SimpleSlider from '../../component/slider/simpleSlider';
import { changeMovie } from '../../store/slices/movie/movieSlice';
import FeaturedVideoBlock from '../../component/feauteredVideoBlock';

function HomePage() {
  const { Featured,TendingNow } = useAppSelector((state) => state.movieSlice );
  const dispatch = useAppDispatch()
  const filteredTendingNow = TendingNow.slice(0, 50);
  function handleChangeMovie(id:string) {
    dispatch(changeMovie(id))
  }

  useEffect(() => {
    const currentItemId = sessionStorage.getItem("currentItemId")
    dispatch(changeMovie(currentItemId))
  },[])

  console.log(TendingNow,"TendingNow")
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
          <SimpleSlider filteredTendingNow={filteredTendingNow} callBack={handleChangeMovie}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;