import React from "react";
import docs from "../../../assets/images/image/file.jfif";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/PublicPost.module.css";
export default function PublicPost({ data }) {
  if (data.file === null) {
    data.file = false;
  }
  // let method = dataFile.subString(data.length - 3);
  let content;
  if (data.file) {
    let dataFile = data.file;
    let dataType = dataFile.slice(-3);
    if (
      dataType === "jpg" ||
      dataType === "png" ||
      dataType === "jpeg" ||
      dataType === "gif"
    ) {
      content = <img src={`http://127.0.0.1:8000${data.file}`} alt="file" />;
    } else if (
      dataType === "pdf" ||
      dataType === "docs" ||
      dataType === "ocx" ||
      dataType === "xls" ||
      dataType === "lsx"
    ) {
      content = (
        <a href={`http://127.0.0.1:8000${data.file}`} alt="file">
          <div
            style={{
              width: "90%",
              height: "95px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img
              src={docs}
              alt="file"
              style={{ width: "100px", height: "85px" }}
            />
            <p style={{ fontSize: "25px" }}>
              <i class="bx bx-book-reader" style={{ fontSize: "25px" }}></i>
              Click For Read{" "}
            </p>
          </div>
        </a>
      );
    }
  }

  return (
    <>
      <div className={classes.post_template} key={data.id}>
        <div className={classes.post_sender_title}>
          <div className={classes.post_sender_info}>
            <div className={classes.sender_photo}>
              <img
                src={`http://127.0.0.1:8000${data.profile_pic}`}
                alt="Sender Person"
              />
            </div>
            <div className={classes.sender_name_and_work}>
              <div className={classes.post_sender_name}>
                <h5>{data.author}</h5>
              </div>
              <div className={classes.post_sender_current_work}>
                <p>
                  {data.designation} at {data.court}
                </p>
              </div>
            </div>
          </div>
          <div className={classes.post_option}>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
            <span className={classes.dot}></span>
          </div>
        </div>
        <div className={classes.sender_post}>
          <p>{data.content}</p>
        </div>
        <br />
        <div className={classes.sender_file}>{data.file && content}</div>
      </div>
    </>
  );
}
