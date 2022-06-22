import React from "react";
import Link from "next/link";

import apoClient from "../components/graphQL/client";
import {
  getPoliticsEnglish,
  getPoliticsHindi,
  getPoliticsMarathi,
} from "../components/graphQL/politics";

import Page from "../components/Page";
export default function Politics({ data }) {
  // console.log(data);
  return <Page data={data} />;
}

export async function getServerSideProps(prop) {
  var lan = String(prop.req.headers.cookie);
  lan = lan.substring(lan.indexOf("=") + 1);
  var query;
  if (lan == "english") {
    query = getPoliticsEnglish;
  }
  if (lan == "hindi") {
    query = getPoliticsHindi;
  }
  if (lan == "marathi") {
    query = getPoliticsMarathi;
  }
  const { data: data } = await apoClient.query({ query: query });
  return { props: { data: data.page.data.attributes.posts.data } };
}
