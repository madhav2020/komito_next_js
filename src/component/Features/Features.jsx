import React from "react";
import fS from "./features.module.css";
import feature1 from "../../assests/images/feature-1.png";
import feature2 from "../../assests/images/feature-2.jpg";
import feature3 from "../../assests/images/feature-3.jpg";
import Image from "next/image";
import Heading from "@/assests/heading/Heading";
const Features = () => {
  const feature_array = [
    {
      title: "The Best Location",
      descp:
        "There are many variation of passages of available, but the majority have suffered alteration",
      img: feature1,
    },
    {
      title: "The Feature List",
      descp:
        "There are many variation of passages of available, but the majority have suffered alteration",
      img: feature2,
    },
    {
      title: "Space for all",
      descp:
        "There are many variation of passages of available, but the majority have suffered alteration",
      img: feature3,
    },
  ];
  return (
    <div className={fS.main}>
      <Heading
        title="GET TO KNOW US"
        message={"We known for having cool workspace filled with amentities"}
      />
      <div className={fS.feature_container}>
        {feature_array.map((feature, index) => {
          return (
            <div key={index} className={fS.feature_box}>
              <div className={fS.feature_item}>
                <div className={`${fS.feature_bg} mb-2`}>
                  <Image src={feature.img} alt="" className={fS.feature_img} />
                </div>
                <div className={fS.features_text_content}>
                  <span className={fS.ftc_1}>{feature.title}</span>
                  <br />
                  <span className={fS.ftc_2}>{feature.descp}</span>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
