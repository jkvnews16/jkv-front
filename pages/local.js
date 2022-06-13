import React from "react";
import Link from "next/link";

import apoClient, { baseURL } from "../components/graphQL/client";
import {
  getLocalEnglish,
  getLocalHindi,
  getLocalMarathi,
} from "../components/graphQL/local";

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
    query = getLocalEnglish;
  }
  if (lan == "hindi") {
    query = getLocalHindi;
  }
  if (lan == "marathi") {
    query = getLocalMarathi;
  }
  const { data: data } = await apoClient.query({ query: query });
  return { props: { data: data.page.data.attributes.posts.data } };
}
