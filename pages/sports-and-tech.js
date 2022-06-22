import React from "react";
import Link from "next/link";

import apoClient from "../components/graphQL/client";
import {
  getSnTEnglish,
  getSnTHindi,
  getSnTMarathi,
} from "../components/graphQL/sportsNtech";

import Page from "../components/Page";
export default function SnT({ data }) {
  // console.log(data);
  return <Page data={data} />;
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
