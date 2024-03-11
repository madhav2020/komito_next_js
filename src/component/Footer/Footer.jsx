import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={`container ${styles.main_footer} `}>
      <div className={`${styles.pattern_layer} bg-blue-950`}>
        <div className={styles.auto_container}>
          <div className={`columns-3xs ${styles.footer_top} `}>
            <div className="footer_widget about_widget w-full">
              <div className="widget_content">
                <h2 className="">Well Designed & Modern website Creater</h2>
                <h5>Call Anytime</h5>
                <h3>+1- (246) 333-0079</h3>
                <ul className="footer-social clearfix">
                  <li>
                    <i
                      className="fab fa-brands fa-twitter"
                      style={{ color: "white" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      className="fab fa-brands fa-facebook-f"
                      style={{ color: "white" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      className=" fa-solid fa-basketball"
                      style={{ color: "white" }}
                    ></i>
                  </li>
                  <li>
                    <i
                      className="fab fa-brands fa-instagram"
                      style={{ color: "white" }}
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum est
              quibusdam corrupti deserunt perferendis. Neque nisi soluta ea
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              nemo?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, quam
              dolorem? Quo.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
