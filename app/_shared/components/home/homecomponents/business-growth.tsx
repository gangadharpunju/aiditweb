/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "./business-growth.module.css";

export type BusinessGrowthType = {
  className?: string;
};

const BusinessGrowth: NextPage<BusinessGrowthType> = ({ className = "" }) => {
  return (
    <>
      <img
        className={styles.representationUserExperienceIcon}
        alt=""
        src="/representationuserexperienceinterfacedesign-3-2@2x.png"
      />
      <div className={[styles.businessGrowth, className].join(" ")}>
        <div className={styles.divprimaryCtaGradient} />
        <div className={styles.growthContainer}>
          <div className={styles.growthContent}>
            <div className={styles.ourServiceYourData}>
              Our Service. Your data.
            </div>
          </div>
          <div className={styles.elevateYourDigitalContainer}>
            <span>{`Elevate your digital business with `}</span>
            <span className={styles.aidit}>Aidit</span>
          </div>
        </div>
        <div className={styles.contactButton}>
          <div className={styles.contactUs}>Contact Us</div>
        </div>

      </div>
    </>
  );
};

export default BusinessGrowth;
