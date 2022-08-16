import * as React from "react";
import Carousel from "framer-motion-carousel";
import { Images } from "./Image";
import styled from "styled-components";


export const Gallery = () => {

  const Gallery = styled.div`
    max-width: 750px;
    height: auto;
    display: flex;
    margin: 50px auto;
  `

return (
<Gallery>
  <Carousel autoPlay={false}>
    {Images.map((item) => (
      <img
        draggable="false"
        src={`src/components/Gallery/Certificates/${item}.jpg`}
        key={item}
        width="100%"
        alt=""
        
      />
    ))}
  </Carousel>
</Gallery>
)
}