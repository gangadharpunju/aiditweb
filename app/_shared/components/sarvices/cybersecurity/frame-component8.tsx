/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./frame-component8.module.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cybersecurityInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-34628446@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.heroDescriptionContainerWrapper}>
              <div className={styles.heroDescriptionContainer}>
                <div className={styles.heroDescriptionContainerChild} />
                <div className={styles.protectBusinessWithContainer}>
                  <p className={styles.protectBusiness}>Protect Business</p>
                  <p className={styles.withCybersecurityComplianc}>
                    <b>{`with Cybersecurity & Compliance`}</b>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.shieldYourOrganizationFromParent}>
              <div className={styles.shieldYourOrganizationContainer}>
                <p className={styles.shieldYourOrganization}>
                  Shield your organization from cyber threats and ensure
                  compliance with our expert solutions.
                </p>
                <p className={styles.stayAheadOf}>
                  Stay ahead of evolving threats and regulations with our
                  experienced team.
                </p>
              </div>
              <div className={styles.heroButtonContainerWrapper}>
                <div className={styles.heroButtonContainer}>
                  <div className={styles.knowMore}>Know More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner} />
          <div className={styles.heroImageContainer}>
            <div className={styles.servicesForThe}>
              Services for the success of brilliant companies
            </div>
          </div>
          <img
            className={styles.sectionmaskGroupIcon}
            alt=""
            src="/sectionmaskgroup.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
