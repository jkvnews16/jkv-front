import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";
// import { footerAbout } from "../public/assets/texts/footerAbout.js";
import Image from "next/image";

export default function Footer() {
  const footerAbout = `For any enquiries please mail us at:\njkvmedia61@gmail.com`;
  const socials = {
    facebook: "https://www.facebook.com/JKVNEWS/",
    instagram: "https://instagram.com/jkvnews",
    twitter: "https://twitter.com/JkvMedia",
    youtube:
      "https://www.youtube.com/channel/UCCIyumcNEu8uw1dTrCnIaCw?sub_confirmation=1",
  };
  return (
    <div id="footer">
      <div className="sitemap no-mobile big-width">
        <span>Sitemap</span>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Local</a>
        </Link>
        <Link href="/">
          <a>National</a>
        </Link>
        <Link href="/">
          <a>Politics</a>
        </Link>
        <Link href="/">
          <a>Crime</a>
        </Link>
        <Link href="/">
          <a>Sports & Technology</a>
        </Link>
      </div>
      <div className="footrule no-mobile"></div>
      <div className="getInTouch big-width">
        <span>Get in touch</span>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
      </div>
      <div className="footrule no-mobile"></div>
      <div className="icons big-width">
        <div className="up">
          <a href={socials.twitter} target="_blank" rel="noreferrer">
            <AiOutlineTwitter color="black" />
          </a>
          <a href={socials.instagram} target="_blank" rel="noreferrer">
            <AiFillInstagram color="black" />
          </a>
        </div>
        <div className="down">
          <a href={socials.youtube}>
            <AiFillYoutube color="black" />
          </a>
          <a href={socials.facebook}>
            <AiFillFacebook color="black" />
          </a>
        </div>
      </div>
      <div className="footrule no-mobile"></div>
      <div className="intro big-width no-mobile">
        <div className="imgContainer">
          <Image
            src="/logo.png"
            alt="Sketch old logo"
            className="img"
            layout="fill"
            objectFit="contain"
            quality={50}
          />
        </div>
        <p>
          {footerAbout.split("\n").map((cont, ind) => {
            return (
              <span key={ind}>
                {cont}
                <br />
              </span>
            );
          }, [])}
        </p>
      </div>
    </div>
  );
}
