import { useEffect, useRef, useState } from "react";
import video1 from "./../assets/video/vid_1.mp4";
import video2 from "./../assets/video/vid_2.mp4";
import video3 from "./../assets/video/vid_3.mp4";
import video4 from "./../assets/video/vid_4.mp4";
import video5 from "./../assets/video/vid_5.mp4";

const VideoBanner = () => {
  const videos = [video1, video2, video3, video4, video5];
  const [currentVindex, setCurrentVindex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVEnd = () => {
      setCurrentVindex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        video.src = videos[nextIndex];
        video.play();
        return nextIndex;
      });
    };

    video.addEventListener("ended", handleVEnd);

    return () => {
      video.removeEventListener("ended", handleVEnd);
    };
  }, [videos]);

  useEffect(() => {
    const video = videoRef.current;
    video.src = videos[currentVindex];
    video.play(); // Start playing the first video on component mount

    return () => {
      video.pause(); // Pause the video when the component unmounts
    };
  }, [currentVindex, videos]);

  return (
    <section className="gallery ">
      <div className="gallery__container container grid">
        <video
          className="video__slide active"
          ref={videoRef}
          autoPlay
          muted
          loop={false} // No need to loop as we're handling the next video manually
        ></video>
      </div>
    </section>
  );
};

export default VideoBanner;
