import React, { useEffect, useState,memo  } from 'react';
import { TendingNowItemType } from '../../store/slices/movie/type';
import moment from 'moment';

const FeaturedVideoBlock = memo(({ lastFeaturedMovie }: {lastFeaturedMovie:TendingNowItemType}) => {
  const [videoUrl, setVideoUrl] = useState<string | undefined>('');
  const { Id, Category, MpaRating, ReleaseYear, Duration:milllsec, Description, CoverImage } = lastFeaturedMovie;
  console.log(lastFeaturedMovie, "lastFeaturedMovie");

  useEffect(() => {
    setVideoUrl('');
    const delay = setTimeout(() => {
      setVideoUrl(lastFeaturedMovie?.VideoUrl);
    }, 2000);

    return () => clearTimeout(delay);
  }, [lastFeaturedMovie]);




  function durationToTimer(milliseconds:string) {
    const duration = moment.duration(parseInt(milliseconds, 10));
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.asMinutes()) % 60;
    const seconds = Math.floor(duration.asSeconds()) % 60;
  
    const hoursString = hours > 0 ? `${hours}h` : '';
    const minutesString = minutes > 0 ? `${minutes}m` : '';
    const secondsString = seconds > 0 ? `${seconds}s` : '';
  
    const timerString = `${hoursString} ${minutesString} ${secondsString}`.trim();
    return timerString;
  }
  
  const timerFormat = durationToTimer(milllsec);
  
  console.log(timerFormat); // Output: "0h 0m 6s"
  
  
  
  return (
    <>
      <p className='title'>{Category}</p>
      {!videoUrl ? (
        <img className='main—title_and_video_img' src={CoverImage} alt="Cover Image" />
      ) : (
        <video className='main—title_and_video_img' autoPlay muted>
          <source src={videoUrl} type='video/mp4' />
        </video>
      )}
      <p className='date_title'>{ReleaseYear} {MpaRating} {timerFormat}</p>
      <p className='description'>{Description} {Id}</p>
    </>
  )
})

export default FeaturedVideoBlock;
