import React from "react";
import Link from "next/link";

export default function Page({ data }) {
  return (
    <div id={"page"}>
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
