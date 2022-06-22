import React from "react";
import Link from "next/link";

import apoClient from "../components/graphQL/client";
import {
  getCrimeEnglish,
  getCrimeHindi,
  getCrimeMarathi,
} from "../components/graphQL/crime";

import Page from "../components/Page";
export default function Crime({ data }) {
  // console.log(data);
  return <Page data={data} page="Crime" />;
}

export async function getServerSideProps(prop) {
  var lan = String(prop.req.headers.cookie);
  lan = lan.substring(lan.indexOf("=") + 1);
  var query;
  if (lan == "english") {
    query = getCrimeEnglish;
  }
  if (lan == "hindi") {
    query = getCrimeHindi;
  }
  if (lan == "marathi") {
    query = getCrimeMarathi;
  }
  const { data: data } = await apoClient.query({ query: query });
  return { props: { data: data.page.data.attributes.posts.data } };
}
