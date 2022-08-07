import React from "react";
import Carousel from "better-react-carousel";
import Python from "../../assets/Certificates/Introduction to python_page-0001.jpg";
import IntermidiatePython from "../../assets/Certificates/DataCamp_Intermediate Python_page-0001.jpg";
import Bootstrap from "../../assets/Certificates/Bootstrap-1.jpg";
import BuildAWebsite from "../../assets/Certificates/Build a website-1.jpg";
import VADF from "../../assets/Certificates/Coursera WNYEVMZ9V5WS-1.jpg";
import CSS from "../../assets/Certificates/CSS-1.jpg";
import SQL from "../../assets/Certificates/Introduction to SQL-1.jpg";
import JS from "../../assets/Certificates/JS-1.jpg";
import MLFE from "../../assets/Certificates/Machine Learning for Everyone_page-0001.jpg";
import ReactJS from "../../assets/Certificates/React-1.jpg";
import HTML from "../../assets/Certificates/sukitBunsiri4212046577's profile _ Codecademy-1.jpg";
import styled from "styled-components";
import TypeAnimation from "react-type-animation";

export const Gallery = () => {
  const Gallery = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      padding: 0px;
      display: block;
      height: auto;
    }
  `;

  const Header = styled.div`
    width: 100%;
    text-align: right;
    border-bottom: 1px solid;
    margin-bottom: 20px;
  `;

  const Quote = styled.div`
    margin: 60px 0px;
    text-align: center;
    
    h3 {
        line-height: 1.5em;
    }
  `;

  return (
    <Gallery>
      <Header>
        <h2 className="red">LEARNING</h2>
      </Header>

      <Quote>
       
        <h3>"
          We first make our habits, then our habits make us."
          
        </h3>
        
        
        <h3><i>-John Dryden</i></h3>
      </Quote>
      <div style={{width: "200"}}>
      <Carousel cols={2} rows={1} gap={5} >
        <Carousel.Item>
          <a href=""><img width="100%" src={ReactJS} /></a>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={BuildAWebsite} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={JS} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Bootstrap} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={SQL} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={VADF} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={Python} />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src={IntermidiatePython} />
        </Carousel.Item>
      </Carousel>
      </div>
    </Gallery>
  );
};
