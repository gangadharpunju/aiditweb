
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import styles from "./home.module.scss";
import FrameComponent2 from "./homecomponents/frame-component2";
import FrameComponent1 from "./homecomponents/frame-component1";
import Accomplishments from "./homecomponents/accomplishments";
import EmergingServices from "./homecomponents/emerging-services";
import Consultancy from "./homecomponents/consultancy";
import ChooseUs from "./homecomponents/choose-us";
import FrameComponent from "./homecomponents/frame-component";
import NewsHeader from "./homecomponents/news-header";
import BusinessGrowth from "./homecomponents/business-growth";
import NewsGrid from "./homecomponents/news-grid";
const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      {/* <Main /> */}
      <FrameComponent2 />
      <FrameComponent1 />
      <Accomplishments />
      <EmergingServices />
      <Consultancy />
      <ChooseUs />
      <div className={styles.homeInner} />
      <div className={styles.titleAndDescription} />
      <FrameComponent />
      <section className={styles.newsContainerWrapper}>
        <div className={styles.newsContainer}>
          <NewsHeader />
          <NewsGrid />
        </div>
      </section>
      <BusinessGrowth />
     
    </div>
  );
};
export default Home;
