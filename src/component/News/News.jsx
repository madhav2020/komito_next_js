import React from "react";
import nS from "./news.module.css";
import Heading from "@/assests/heading/Heading";
import news1 from "@/assests/images/news-1.jpg";
import news2 from "@/assests/images/news-2.jpg";
import news3 from "@/assests/images/news-3.jpg";
import Image from "next/image";
const News = () => {
  const newsArray = [
    {
      img: news1,
      desc: "Learn to achive more with your nine to six",
      date: "20 sept",
    },
    {
      img: news2,
      desc: "Working from this place is a pleasure",
      date: "19 sept",
    },
    {
      img: news3,
      desc: "vivamus in diar turpis maximus tristimh",
      date: "18 sept",
    },
  ];
  return (
    <div className={`${nS.main}`}>
      <Heading message={"News & Articles"} title="HOW WE HELP CLIENTS" />

      <div className={nS.news_container}>
        {newsArray.map((news, index) => {
          return (
            <div className={nS.news_item} key={index}>
              <div className={nS.news_bg}>
                <Image src={news.img} alt="" className={nS.news_img} />
                <span className={nS.news_text}>{news.date}</span>
              </div>
              <div className={nS.news_text_content}>
                <span className={nS.ntc_1}>
                  <i
                    className="fa-regular fa-user"
                    style={{ color: "var(--inner-box)" }}
                  ></i>
                  &nbsp; Admin &nbsp;
                  <i
                    className="fa-regular fa-comments"
                    style={{ color: "var(--inner-box)" }}
                  >
                    {" "}
                  </i>
                  &nbsp; 2 comments&nbsp;
                </span>
                <br />
                <span className={nS.ntc_2}>{news.desc}</span>
                <br />
                <span className={nS.ntc_3}>
                  <a href="">Re</a>ad more
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
