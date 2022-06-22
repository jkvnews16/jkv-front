import React from "react";
import Link from "next/link";

import apoClient from "../components/graphQL/client";
import {
  getLocalEnglish,
  getLocalHindi,
  getLocalMarathi,
} from "../components/graphQL/local";

import Page from "../components/Page";
export default function Local({ data }) {
  // console.log(data);
  return <Page data={data} page="Local" />;
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
