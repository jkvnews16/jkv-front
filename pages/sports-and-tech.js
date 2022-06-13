import React from "react";
import Link from "next/link";

import apoClient, { baseURL } from "../components/graphQL/client";
import {
  getSnTEnglish,
  getSnTHindi,
  getSnTMarathi,
} from "../components/graphQL/sportsNtech";

export default function Local({ data }) {
  // console.log(data);
  return (
    <div id={"page"}>
      {data.map((element, index) => {
        return (
          <Link href={"/post/" + element.id} key={index}>
            <a className={"news-article card_" + index}>
              <div className="img-container">
                <img
                  src={
                    baseURL + element.attributes.Thumbnail.data.attributes.url
                  }
                  alt=""
                />
              </div>
              <div className="text-container">
                <h2>{element.attributes.Title}</h2>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(prop) {
  var lan = String(prop.req.headers.cookie);
  lan = lan.substring(lan.indexOf("=") + 1);
  var query;
  if (lan == "english") {
    query = getSnTEnglish;
  }
  if (lan == "hindi") {
    query = getSnTHindi;
  }
  if (lan == "marathi") {
    query = getSnTMarathi;
  }
  const { data: data } = await apoClient.query({ query: query });
  return { props: { data: data.page.data.attributes.posts.data } };
}
