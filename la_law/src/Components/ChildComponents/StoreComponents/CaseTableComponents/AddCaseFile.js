import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function AddCaseFile() {
  const { id } = useParams();
  const caseId = id;

  const [case_docs, setCaseDocs] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = async (e) => {
    // console.log(e.target.files[0]);
    // console.log("File is uploading");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("case_docs", file);
    formData.append("case_id", caseId);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(
        "/api/products/upload/",
        formData,
        config
      );
      setCaseDocs(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };
  return (
    <div>
      <h1>Upload You File</h1>
      <form
        action=""
        method="post"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <input
          type="file"
          name="case_docs"
          id="case_docs"
          value={case_docs}
          onChange={uploadFileHandler}
          custom
          style={{
            width: "40%",
            height: "50px",
            padding: "10px 30px",
            margin: "20px",
            border: "none",
          }}
        />
        <br />
      </form>
    </div>
  );
}
