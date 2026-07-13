import React from "react";
import styles from "../../styles/GlobalAuthority.module.css";

const GlobalAuthority = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.watermark}>PRE-ENGINEERED</div>

      <div className={styles.leftContent}>
        <h2>
          Global Authority in Advanced
          <br />
          Pre-Engineered Systems
        </h2>
        <p>
          Delivering advanced solutions for diverse infrastructure, our PEB
          systems set industry standards. From multi-storey buildings and
          Pre-Engineered structures to metro stations, data centers, cold
          storage, and stadiums, our expertise ensures strength, efficiency, and
          future-ready construction.
        </p>
      </div>

      <div className={styles.rightContent}>
        <img
          src="/Images/global.png"
          alt="Pre-Engineered Building"
          className={styles.buildingImg}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/Images/building.jpg";
          }}
        />
      </div>
    </section>
  );
};

export default GlobalAuthority;
