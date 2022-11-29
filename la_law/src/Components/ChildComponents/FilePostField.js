import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "../../Styles/ChildStyles/HomePageChildStyle/HomePostMain.module.css";
import Loading from "../Loading";
export default function FilePostField(props) {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [formData, setFormData] = useState("");
  const [uploading, setUploading] = useState(false);

  const closeBtn = () => {
    navigate("/home");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(formData);
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("post_file", file);
    setUploading(true);
    setFormData(formData);
  };
  const postSubmitHandler = async (e) => {
    e.preventDefault();

    formData.append("post", content);
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/api/publicpost/posts-upload/",
        formData,
        config
      );
      console.log(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
    navigate("/home");
  };
  return (
    <>
      {uploading && <Loading />}
      <div className={classes.posting_page}>
        <div className={classes.posting_note}>
          <div className={classes.posting_page_title}>
            <p>Upload File with a post</p>
            <button className={classes.posting_modal_close} onClick={closeBtn}>
              <i class="uil uil-times "></i>
            </button>
          </div>

          <form>
            <div
              className={classes.posting_notepade}
              style={{ margin: "30px 0px 10px" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  position: "relative",
                  //   padding: "12px 15px",
                  //   margin: "15px auto",
                  //   display: "flex",
                  //   justifyContent: "space-between",
                }}
              >
                {/* {uploading && <Loading />} */}
                <label
                  style={{
                    color: "black",
                    fontSize: "18px",
                    padding: "10px 0px",
                  }}
                >
                  Upload Your File
                </label>
                <input
                  type="file"
                  name="post_docs"
                  id="post_docs"
                  style={{ margin: "10px 0px" }}
                  onChange={uploadFileHandler}
                />
              </div>
              <textarea
                name="posting_txt"
                id="posting_txt"
                placeholder="What do you want to talk about ?"
                value={content}
                style={{ margin: "25px 0" }}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className={classes.post_button}
              id="post_button"
              onClick={postSubmitHandler}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
