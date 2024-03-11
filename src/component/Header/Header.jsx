"use client";

import React, { useState } from "react";
import s from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/images/logo.png";
const Header = () => {
  const [active, setActive] = useState("home");

  const handleActive = (liName) => {
    setActive(liName);
  };
  return (
    <ul className={`${s.main} `}>
      <li className={s.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </li>

      <li>
        <ul className={`${s.navbar} `}>
          <li className={s.nav_item} onClick={() => handleActive("home")}>
            <Link href={"/"} className={`${active === "home" ? s.active : ""}`}>
              page
            </Link>
          </li>
          <li className={s.nav_item} onClick={() => handleActive("blog")}>
            <Link
              href={"/blog"}
              className={`${active === "blog" ? s.active : ""}`}
            >
              blog{" "}
            </Link>
          </li>
          <li className={s.nav_item} onClick={() => handleActive("events")}>
            <Link
              href={"/events"}
              className={`${active === "events" ? s.active : ""}`}
            >
              events{" "}
            </Link>
          </li>
          <li className={s.nav_item} onClick={() => handleActive("news")}>
            <Link
              href={"/news"}
              className={`${active === "news" ? s.active : ""}`}
            >
              news{" "}
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Header;
