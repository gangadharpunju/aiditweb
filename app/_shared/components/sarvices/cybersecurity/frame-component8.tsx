/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles1 from "./frame-component8.module.css";
import styles from "../../home/homecomponents/frame-component2.module.css";
import Image from "next/image";
import cardbg1 from "../../home/Images/cardbg1.png"
export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <>
    <section className={[styles.frameParent, className].join(" ")}>
      <Image src={cardbg1} alt="altText" className={styles.homepageBannerIcon} />
      <div className={styles.mobileExperienceWrapper}>
        <div className={styles.mobileExperience}>
          <div className={styles.mobileExperienceBackground} />
          <div className={styles.seamlessExperienceParent}>
            <div className={styles.seamlessExperience}>
              <div className={styles.seamlessBackground} />
              <h2 className={styles.deliverSeamlessMobileContainer}>
                <p className={styles.deliverSeamlessMobileWebEx}>
                  Protect Business

                </p>
                <p className={styles.withOurApplication}>
                  with Cybersecurity & Compliance
                </p>
              </h2>
            </div>
            <div className={styles.titleAndDescription} />
          </div>
          <div className={styles.reachCustomers}>
            <div className={styles.customerExperience}>
              <div className={styles.reachMoreCustomers}>
                Shield your organization from cyber threats and ensure compliance with our expert solutions.
                Stay ahead of evolving threats and regulations with our experienced team.
              </div>
              <div className={styles.knowMoreButton}>
                <div className={styles.knowMoreContainer}>
                  <div className={styles.knowMore}>Know More</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.titleAndDescription1} />
          <div className={styles.titleAndDescription2} />
        </div>
      </div>
      <div className={styles.serviceSuccess}>
        <div className={styles.serviceSuccessChild} />
        <div className={styles.servicesForTheSuccessOfBrWrapper}>
          <div className={styles.servicesForThe}>
            Services for the success of brilliant companies
          </div>
        </div>
        <img
          className={styles.sectionmaskGroupIcon}
          loading="lazy"
          alt=""
          src="/sectionmaskgroup.svg"
        />
      </div>
      </section>
    </>
  );
};

export default FrameComponent8;
