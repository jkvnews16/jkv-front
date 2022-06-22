import { gql } from "@apollo/client";
import apoClient from "../../components/graphQL/client";
import ReactMarkdown from "react-markdown";
import React, { useEffect } from "react";
import dateFormat from "../../components/dateFormat";

function getPostQuery(id) {
  return gql`
    query{
        post(id:${id}){
          data{
            attributes{
              Title
              Author
              Date
              Content
              Thumbnail{data{attributes{url}}}
            }
          }
        }
      }
    `;
}

export default function Post({ data }) {
  useEffect(() => {
    var elems = document.querySelectorAll(".change-date");
    elems.forEach((elem) => {
      console.log(elem.innerHTML);
      var temp = dateFormat(elem.innerHTML);
      elem.innerHTML = temp;
    });
  }, []);
  return (
    <div id="content">
      <div className="head">
        <div className="left-side img-container">
          <img src={data.Thumbnail.data.attributes.url || ""} alt="" />
        </div>
        <div className="right-side text-container">
          <h1>{data.Title}</h1>
          <p>{"By " + data.Author}</p>
          <span>
            {data.Date} | <span className="change-date">{nElem.date}</span>
          </span>
        </div>
      </div>
      <div className="blog-content">
        <ReactMarkdown>{data.Content}</ReactMarkdown>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await apoClient.query({ query: getPostQuery(params.post) });
  return {
    props: { data: data.post.data.attributes },
  };
}
