import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dataResenias from "./dataResenias";
import CardResenia from "./CardResenia";
import { Box, Container, Typography } from "@mui/material";
import hoja from "../../assets/images/hoja-divider.png";

export default class Resenias extends Component {
  render() {
    var settings = {
      // className: "center",
      // centerMode: true,
      // centerPadding: "10px",
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      // autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            className: "center",
            centerMode: true,
            centerPadding: "10px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    };

    return (
      <Box sx={{ backgroundColor: "#050306", display: "flex", alignItems: "center", jusitfyContent: "center", position: "relative", padding: { lg: "96px 0", sm: "64px 0", xs: "32px 0" } }}>
        <Container width="lg" sx={{ margin: "0 auto" }}>
          <Box sx={{ width: "130px", position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)" }}>
            <img src={hoja} alt="hoja" />
          </Box>
          <Typography variant="h4" sx={{ textAlign: 'center', color: '#fff', margin: '141px auto 79px', fontFamily: 'Parisienne, cursive', fontSize: "clamp(2rem, 5vw, 6.25rem)", fontWeight: 'normal' }}>Lo que opinan nuestros clientes</Typography>
          <Slider {...settings}>
            {
              dataResenias.map((resenia, index) => (
                <CardResenia key={index} resenia={resenia} />
              ))
            }
          </Slider>
        </Container>
      </Box>
    );
  }
}