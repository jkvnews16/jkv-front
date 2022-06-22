import Head from "next/head";
import Link from "next/link";

import Lottie from "lottie-react";

import englishAni from "../public/assets/lottie/english.json";
import hindiAni from "../public/assets/lottie/hindi.json";
import marathiAni from "../public/assets/lottie/marathi.json";

import apoClient from "../components/graphQL/client";
// import {getEnglishLocal, getEnglishCrime, getEnglishNational,getEnglishPolitics,getEnglishSnT} from "../components/graphQL/english"
// import {getHindiCrime, getHindiLocal, getHindiNational,getHindiPolitics,getHindiSnT} from "../components/graphQL/hindi"
// import {getMarathiCrime,getMarathiLocal,getMarathiNational,getMarathiPolitics,getMarathiSnT} from "../components/graphQL/marathi"
import { getEnglishAll } from "../components/graphQL/english";
import { getHindiAll } from "../components/graphQL/hindi";
import { getMarathiAll } from "../components/graphQL/marathi";
import dateFormat from "../components/dateFormat";
import { useEffect } from "react";

export default function Home({ engData, hinData, marData }) {
  useEffect(() => {
    var elems = document.querySelectorAll("#change-date");
    elems.forEach((elem) => {
      console.log(elem.innerHTML);
      var temp = dateFormat(elem.innerHTML);
      elem.innerHTML = temp;
    });
  }, []);
  const data = [
    {
      name: "HINDI NEWS",
      lottie: { json: hindiAni, start: 0, end: -1 },
      news: [
        {
          genre: "Local",
          title: hinData.local[0].attributes.Title,
          thumbnail: hinData.local[0].attributes.Thumbnail.data.attributes.url,
          date: hinData.local[0].attributes.Date,
          id: hinData.local[0].id,
        },
        {
          genre: "National",
          title: hinData.national[0].attributes.Title,
          thumbnail:
            hinData.national[0].attributes.Thumbnail.data.attributes.url,
          date: hinData.national[0].attributes.Date,
          id: hinData.national[0].id,
        },
        {
          genre: "Politics",
          title: hinData.politics[0].attributes.Title,
          thumbnail:
            hinData.politics[0].attributes.Thumbnail.data.attributes.url,
          date: hinData.politics[0].attributes.Date,
          id: hinData.politics[0].id,
        },
        {
          genre: "Crime",
          title: hinData.crime[0].attributes.Title,
          thumbnail: hinData.crime[0].attributes.Thumbnail.data.attributes.url,
          date: hinData.crime[0].attributes.Date,
          id: hinData.crime[0].id,
        },
        {
          genre: "Sports & Technology",
          title: hinData.snt[0].attributes.Title,
          thumbnail: hinData.snt[0].attributes.Thumbnail.data.attributes.url,
          date: hinData.snt[0].attributes.Date,
          id: hinData.snt[0].id,
        },
      ],
    },
    {
      name: "ENGLISH NEWS",
      lottie: { json: englishAni, start: 0, end: -1 },
      news: [
        {
          genre: "Local",
          title: engData.local[0].attributes.Title,
          thumbnail: engData.local[0].attributes.Thumbnail.data.attributes.url,
          date: engData.local[0].attributes.Date,
          id: engData.local[0].id,
        },
        {
          genre: "National",
          title: engData.national[0].attributes.Title,
          thumbnail:
            engData.national[0].attributes.Thumbnail.data.attributes.url,
          date: engData.national[0].attributes.Date,
          id: engData.national[0].id,
        },
        {
          genre: "Politics",
          title: engData.politics[0].attributes.Title,
          thumbnail:
            engData.politics[0].attributes.Thumbnail.data.attributes.url,
          date: engData.politics[0].attributes.Date,
          id: engData.politics[0].id,
        },
        {
          genre: "Crime",
          title: engData.crime[0].attributes.Title,
          thumbnail: engData.crime[0].attributes.Thumbnail.data.attributes.url,
          date: engData.crime[0].attributes.Date,
          id: engData.crime[0].id,
        },
        {
          genre: "Sports & Technology",
          title: engData.snt[0].attributes.Title,
          thumbnail: engData.snt[0].attributes.Thumbnail.data.attributes.url,
          date: engData.snt[0].attributes.Date,
          id: engData.snt[0].id,
        },
      ],
    },
    {
      name: "MARATHI NEWS",
      lottie: { json: marathiAni, start: 0, end: 275 },
      news: [
        {
          genre: "Local",
          title: marData.local[0].attributes.Title,
          thumbnail: marData.local[0].attributes.Thumbnail.data.attributes.url,
          date: marData.local[0].attributes.Date,
          id: marData.local[0].id,
        },
        {
          genre: "National",
          title: marData.national[0].attributes.Title,
          thumbnail:
            marData.national[0].attributes.Thumbnail.data.attributes.url,
          date: marData.national[0].attributes.Date,
          id: marData.national[0].id,
        },
        {
          genre: "Politics",
          title: marData.politics[0].attributes.Title,
          thumbnail:
            marData.politics[0].attributes.Thumbnail.data.attributes.url,
          date: marData.politics[0].attributes.Date,
          id: marData.politics[0].id,
        },
        {
          genre: "Crime",
          title: marData.crime[0].attributes.Title,
          thumbnail: marData.crime[0].attributes.Thumbnail.data.attributes.url,
          date: marData.crime[0].attributes.Date,
          id: marData.crime[0].id,
        },
        {
          genre: "Sports & Technology",
          title: marData.snt[0].attributes.Title,
          thumbnail: marData.snt[0].attributes.Thumbnail.data.attributes.url,
          date: marData.snt[0].attributes.Date,
          id: marData.snt[0].id,
        },
      ],
    },
  ];
  // console.log(data[0].news[0].id);
  return (
    <div id="home">
      <Head>
        <title>JKV News</title>
      </Head>
      {data.map((elem, indx) => {
        return (
          <div className={elem.name.toLowerCase() + " card_" + indx} key={indx}>
            <div className="left-side">
              {elem.news.map((nElem, nIndx) => {
                // var temp = dateFormat(nElem.genre, nElem.date);
                return (
                  <Link key={nIndx} href={"/post/" + nElem.id}>
                    <a className={"sub-news-card nCard_" + nIndx}>
                      <div className="nLeft-side img-container">
                        <img src={nElem.thumbnail} alt="" />
                      </div>
                      <div className="nRight-side">
                        <h2>{nElem.title}</h2>
                        <span>
                          {nElem.genre + " | "}
                          <span id="change-date">{nElem.date}</span>
                        </span>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="right-side">
              <span>{elem.name}</span>
              <Lottie
                animationData={elem.lottie.json}
                initialSegment={
                  elem.lottie.end === -1
                    ? null
                    : [elem.lottie.start, elem.lottie.end]
                }
                loop
                autoPlay
                className={
                  "lottie-play " + elem.name.replace(" NEWS", "").toLowerCase()
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  // const {data: engCrime} = await apoClient.query({query: getEnglishCrime})
  // const {data: engLocal} = await apoClient.query({query: getEnglishLocal})
  // const {data: engNational} = await apoClient.query({query: getEnglishNational})
  // const {data: engPolitics} = await apoClient.query({query: getEnglishPolitics})
  // const {data: engSnT} = await apoClient.query({query: getEnglishSnT})
  const { data: engAll } = await apoClient.query({ query: getEnglishAll });

  // const {data: hinCrime} = await apoClient.query({query: getHindiCrime})
  // const {data: hinLocal} = await apoClient.query({query: getHindiLocal})
  // const {data: hinNational} = await apoClient.query({query: getHindiNational})
  // const {data: hinPolitics} = await apoClient.query({query: getHindiPolitics})
  // const {data: hinSnT} = await apoClient.query({query: getHindiSnT})
  const { data: hinAll } = await apoClient.query({ query: getHindiAll });

  // const {data: mar} = await apoClient.query({query: getMarathiCrime})
  // const {data: mar} = await apoClient.query({query: getMarathiLocal})
  // const {data: mar} = await apoClient.query({query: getMarathiNational})
  // const {data: mar} = await apoClient.query({query: getMarathiPolitics})
  // const {data: mar} = await apoClient.query({query: getMarathiSnT})
  const { data: marAll } = await apoClient.query({ query: getMarathiAll });

  return {
    props: {
      engData: {
        crime: engAll.language.data.attributes.crime.data,
        local: engAll.language.data.attributes.local.data,
        national: engAll.language.data.attributes.national.data,
        politics: engAll.language.data.attributes.politics.data,
        snt: engAll.language.data.attributes.SnT.data,
      },
      marData: {
        crime: marAll.language.data.attributes.crime.data,
        local: marAll.language.data.attributes.local.data,
        national: marAll.language.data.attributes.national.data,
        politics: marAll.language.data.attributes.politics.data,
        snt: marAll.language.data.attributes.SnT.data,
      },
      hinData: {
        crime: hinAll.language.data.attributes.crime.data,
        local: hinAll.language.data.attributes.local.data,
        national: hinAll.language.data.attributes.national.data,
        politics: hinAll.language.data.attributes.politics.data,
        snt: hinAll.language.data.attributes.SnT.data,
      },
    },
  };
}
