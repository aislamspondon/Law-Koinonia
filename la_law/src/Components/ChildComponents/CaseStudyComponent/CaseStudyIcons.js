import React from "react";

export default function CaseStudyIcons(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          props.all();
        }}
      >
        <i class="uil uil-search"></i>
        <p>All</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          props.books();
        }}
      >
        <i class="uil uil-book"></i>
        <p>Books</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          props.articles();
        }}
      >
        <i class="uil uil-document-layout-left"></i>
        <p>Articles</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          props.news();
        }}
      >
        <i class="uil uil-newspaper"></i>
        <p>News</p>
      </button>
      <button
        style={{
          display: "flex",
          margin: "8px 25px",
          backgroundColor: "transparent",
        }}
        onClick={() => {
          props.files();
        }}
      >
        <i class="uil uil-file"></i>
        <p>Files</p>
      </button>
    </div>
  );
}
