"use client";

import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  mobile: {
    breakpoint: { max: 1000, min: 0 },
    items: 1,
  },
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
};

const LineChartCarousell = ({ children }: { children: ReactNode }) => {
  return (
    <Carousel responsive={responsive} showDots={true} arrows={false}>
      {children}
    </Carousel>
  );
};

export default LineChartCarousell;
