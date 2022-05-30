import React from "react";
import Link from "next/link";

import {
  AiOutlineSearch,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const langData = {
    english: {
      numPages: 13,
      texts: [
        "City",
        "State",
        "National",
        "Politics",
        "Social",
        "Play",
        "Health",
        "Entertainment",
        "Crime",
        "Joke",
        "Eat",
        "Technology",
        "Horoscope",
      ],
      links: ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/"],
    },
    hindi: {
      numPages: 13,
      texts: [
        "शहर",
        "राज्य",
        "राष्ट्रीय",
        "राजनीति",
        "सामाजिक",
        "खेल",
        "स्वास्थ्य",
        "मनोरंजन",
        "अपराध",
        "मजाक",
        "खाना",
        "तकनीकी",
        "राशि भविष्य",
      ],
      links: ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/"],
    },
    marathi: {
      numPages: 12,
      texts: [
        "शहर",
        "राष्ट्रीय",
        "राजकारण",
        "सामाजिक",
        "क्रीडा",
        "हेल्थ",
        "मनोरंजन",
        "क्राईम",
        "जोक्स",
        "फूड",
        "तंत्रज्ञान",
        "राशी भविष्य",
      ],
      links: ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/", "/"],
    },
  };
  const [lang, setLang] = useState(langData.english);

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
            }}
          >
            english
          </button>
          <button
            onClick={() => {
              setLang(langData.hindi);
            }}
          >
            hindi
          </button>
          <button
            onClick={() => {
              setLang(langData.marathi);
            }}
          >
            marathi
          </button>
        </div>
      </div>
      <div className="icons">
        <div className="socials">
          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="http://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="http://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillYoutube />
          </a>
        </div>
        {/* <AiOutlineSearch className="search" style={{ cursor: "pointer" }} /> */}
      </div>
    </div>
  );
}
