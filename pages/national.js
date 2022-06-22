import React from "react";
import Link from "next/link";

import apoClient from "../components/graphQL/client";
import {
  getNationalEnglish,
  getNationalHindi,
  getNationalMarathi,
} from "../components/graphQL/national";

import Page from "../components/Page";
export default function National({ data }) {
  // console.log(data);
  return <Page data={data} />;
}

export async function getServerSideProps(prop) {
  var lan = String(prop.req.headers.cookie);
  lan = lan.substring(lan.indexOf("=") + 1);
  var query;
  if (lan == "english") {
    query = getNationalEnglish;
  }
  if (lan == "hindi") {
    query = getNationalHindi;
  }
  if (lan == "marathi") {
    query = getNationalMarathi;
  }
  const { data: data } = await apoClient.query({ query: query });
  return { props: { data: data.page.data.attributes.posts.data } };
}
