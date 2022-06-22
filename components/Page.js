import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Page({ data, page = "" }) {
  return (
    <div id={"page"}>
      <Head>
        <title>JKV News | {page}</title>
        <meta name="description" content={"" + page + " news by JKV"} />
      </Head>
      {data.map((element, index) => {
        return (
          <Link href={"/post/" + element.id} key={index}>
            <a className={"news-article card_" + index}>
              <div className="img-container">
                <img
                  src={element.attributes.Thumbnail.data.attributes.url}
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
