import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import docs from "../../../assets/images/image/file.jfif";
import fetchPostLike from "../../../redux/thunk/fetchPostLike";
import classes from "../../../Styles/ChildStyles/HomePageChildStyle/PublicPost.module.css";
import Opinion from "./Opinion";
import OpinionPostBox from "./OpinionPostBox";
export default function PublicPost({ data }) {
  const dispatch = useDispatch();
  const {
    id: post_id,
    profile_pic,
    author,
    opinion,
    author_id: authorId,
  } = data;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [like, setLike] = useState(false);

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

  const LikeSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchPostLike(post_id));
    setLike((toggle) => !toggle);
  };
  useEffect(() => {
    if (userInfo) {
      let current_user_like = data.likers.map(
        (liker) => liker.id === userInfo.id && true
      );
      if (current_user_like[0] === true) {
        setLike(true);
      }
    }
  }, [userInfo, data.likers]);

  return (
    <>
      <div className={classes.post_template} key={data.id}>
        <div className={classes.post_sender_title}>
          <div className={classes.post_sender_info}>
            <div className={classes.sender_photo}>
              <img
                src={`http://127.0.0.1:8000${profile_pic}`}
                alt="Sender Person"
              />
            </div>
            <div className={classes.sender_name_and_work}>
              <div className={classes.post_sender_name}>
                <h5>{author}</h5>
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
        <br />
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "3px 20px 15px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 15px",
            }}
          >
            <i class="bx bx-like"></i>
            <p
              style={{
                margin: "0px 5px",
                color: "#B0B3B8",
                fontSize: "15px",
                fontFamily: "sans-serif",
              }}
            >
              {data.likes}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 15px",
            }}
          >
            <p
              style={{
                margin: "0px 5px",
                color: "#B0B3B8",
                fontSize: "15px",
                fontFamily: "sans-serif",
              }}
            >
              {data.opinion_count}
            </p>
            <p
              style={{
                margin: "0px 5px",
                color: "#B0B3B8",
                fontSize: "15px",
                fontFamily: "sans-serif",
              }}
            >
              Opinion
            </p>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "5px 10px",
          }}
        >
          <button
            type="submit"
            className={classes.actionButton}
            onClick={LikeSubmitHandler}
          >
            {like ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  class="bx bxs-like"
                  style={{
                    margin: "0px 10px",
                    fontSize: "20px",
                    color: "#0A66C2",
                  }}
                ></i>
                <p
                  style={{
                    margin: "0px 10px",
                    fontSize: "20px",
                    color: "#0A66C2",
                  }}
                >
                  Like
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  class="bx bxs-like"
                  style={{
                    margin: "0px 10px",
                    fontSize: "16px",
                    color: "RGBA(0, 0, 0, 0.6)",
                  }}
                ></i>
                <p
                  style={{
                    margin: "0px 10px",
                    fontSize: "16px",
                    color: "RGBA(0, 0, 0, 0.6)",
                  }}
                >
                  Like
                </p>
              </div>
            )}
          </button>
          <button type="submit" className={classes.actionButton}>
            <i
              class="bx bx-comment-minus"
              style={{
                margin: "0px 10px",
                fontSize: "16px",
                color: "RGBA(0, 0, 0, 0.6)",
              }}
            ></i>
            <p
              style={{
                margin: "0px 10px",
                fontSize: "16px",
                color: "RGBA(0, 0, 0, 0.6)",
              }}
            >
              Opinion
            </p>
          </button>
        </div>
        <div style={{ width: "100%" }}>
          <OpinionPostBox
            profile_pic={profile_pic}
            author={author}
            post_id={post_id}
          />
          {opinion.length !== 0
            ? opinion.map((data) => {
                return (
                  <Opinion key={data.id} data={data} authorId={authorId} />
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
}
