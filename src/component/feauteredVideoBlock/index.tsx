import React, { useEffect, useState,memo  } from 'react';
import { TendingNowItemType } from '../../store/slices/movie/type';
import { durationToTimer } from '../../costumHook/hook';

const FeaturedVideoBlock = memo(({ lastFeaturedMovie }: {lastFeaturedMovie:TendingNowItemType}) => {
  const [videoUrl, setVideoUrl] = useState<string | undefined>('');
  const { Id, Category, MpaRating, ReleaseYear, Duration:milllsec, Description, CoverImage } = lastFeaturedMovie;

  useEffect(() => {
    setVideoUrl('');
    const delay = setTimeout(() => {
      setVideoUrl(lastFeaturedMovie?.VideoUrl);
    }, 2000);

    return () => clearTimeout(delay);
  }, [lastFeaturedMovie]);

  const timerFormat = durationToTimer(milllsec);
  
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
