import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";

import Cookies from "js-cookie";

// import scrollEffect from "../scrollEffect";

export default function Header() {
  const langData = {
    english: {
      name: "ENGLISH",
      numPages: 5,
      texts: ["Local", "National", "Politics", "Crime", "Sports & Technology"],
      links: ["/local", "/national", "/politics", "/crime", "/sports-and-tech"],
    },
    hindi: {
      name: "हिन्दी",
      numPages: 5,
      texts: ["स्थानीय", "राष्ट्रीय", "राजनीति", "अपराध", "खेल और तकनीकी"],
      links: ["/local", "/national", "/politics", "/crime", "/sports-and-tech"],
    },
    marathi: {
      name: "मराठी",
      numPages: 5,
      texts: [
        "स्थानिक",
        "राष्ट्रीय",
        "राजकारण",
        "गुन्हा",
        "खेळ आणि तंत्रज्ञान",
      ],
      links: ["/local", "/national", "/politics", "/crime", "/sports-and-tech"],
    },
  };
  const [lang, setLang] = useState(langData.english);

  const socials = {
    facebook: "https://www.facebook.com/JKVNEWS/",
    instagram: "https://instagram.com/jkvnews",
    twitter: "https://twitter.com/JkvMedia",
    youtube:
      "https://www.youtube.com/channel/UCCIyumcNEu8uw1dTrCnIaCw?sub_confirmation=1",
  };

  useEffect(() => {
    if (
      Cookies.get("language") === "english" ||
      Cookies.get("language") === undefined
    ) {
      setLang(langData.english);
      Cookies.set("language", "english");
    }
    if (Cookies.get("language") === "hindi") {
      setLang(langData.hindi);
      Cookies.set("language", "hindi");
    }
    if (Cookies.get("language") === "marathi") {
      setLang(langData.marathi);
      Cookies.set("language", "marathi");
    }
  }, []);

  // const scrollPos = scrollEffect();
  return (
    <div id="header">
      <Link href="/">
        <a className="logo-img">
          <img src="/logo.png" alt="JV News" />
        </a>
      </Link>
      <div
        className="nav-and-lang"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "100%",
        }}
      >
        <nav>
          {Array(lang.numPages)
            .fill("val")
            .map((val, ind) => {
              return (
                <Link href={lang.links[ind]} key={"" + val + "-" + ind}>
                  {lang.texts[ind]}
                </Link>
              );
            })}
        </nav>
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
          className="language"
        >
          <button
            onClick={() => {
              setLang(langData.english);
              Cookies.set("language", "english");
              location.reload();
            }}
          >
            {langData.english.name}
          </button>
          <button
            onClick={() => {
              setLang(langData.hindi);
              Cookies.set("language", "hindi");
              location.reload();
            }}
          >
            {langData.hindi.name}
          </button>
          <button
            onClick={() => {
              setLang(langData.marathi);
              Cookies.set("language", "marathi");
              location.reload();
            }}
          >
            {langData.marathi.name}
          </button>
        </div>
      </div>
      <div className="icons">
        <div className="socials">
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
          <a href={socials.youtube} target="_blank" rel="noopener noreferrer">
            <AiFillYoutube />
          </a>
        </div>
        {/* <AiOutlineSearch className="search" style={{ cursor: "pointer" }} /> */}
      </div>
    </div>
  );
}
