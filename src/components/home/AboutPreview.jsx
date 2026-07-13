import styles from "../../styles/About.module.css";

const AboutPreview = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-left"]}>
        <img src="./Images/aboutus.jpg" alt="factory" />

        <div className={styles["experience-card"]}>
          <div className={styles["profiles"]}>
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt="user"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="user"
            />
          </div>
          <p className={styles["exp-text"]}>10 Years Of</p>
          <h3 className={styles["exp-title"]}>Quality Products</h3>
        </div>
      </div>

      <div className={styles["about-right"]}>
        <span className={styles.tag}>• About us</span>

        <h2>
          Industrial Leaders in Pre-Engineered <br />
          <span className={styles.underline}>Buildings,</span> Steel Containers
          & Solar
        </h2>

        <p className={styles.sub}>
          Your Trusted Partner for Prefab & Steel <br />
          Container Solutions
        </p>

        <p>
          L&R Green India Pvt Ltd, based in New Delhi, has been a trusted
          manufacturer of prefabricated structures and mild steel containers
          since 2015. With strong expertise in design, engineering, and turnkey
          project execution, the company delivers high-quality site offices,
          warehouse sheds, farm structures, and portable office containers for
          diverse industrial needs.
        </p>

        <p>
          In addition to its core manufacturing capabilities, L&R Green India
          Pvt Ltd is also engaged in solar fasteners manufacturing plant
          operations, contributing to durable and high-performance solar
          infrastructure. By integrating advanced engineering practices with
          precision fastening solutions, the company supports modern, reliable,
          and future-ready industrial growth across India.
        </p>

        <button className={styles["primary-btn"]}>More About Us ↗</button>
      </div>
    </section>
  );
};

export default AboutPreview;
