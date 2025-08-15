import React, { useState, useEffect } from "react";
import "./Slider.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const images = [
  "https://cache.marriott.com/content/dam/marriott-renditions/PHLWH/phlwh-fantastic-suite-0085-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1846px:",
  "https://data.1freewallpapers.com/download/white-hotel-room-3554x1999.jpg",
  "https://firekeeperscasino.com/wp-content/uploads/2021/12/suite1-bedroom.png",
  
  
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    // Automatically change slide every 3 seconds
    const intervalId = setInterval(nextSlide, 4000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentSlide]); // Trigger the effect when currentSlide changes

  return (
    <div className="slider">
      <div
        className="wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

     

    </div>
  );
};

export default Slider;
