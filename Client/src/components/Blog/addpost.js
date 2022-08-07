import React, { useContext, useState } from "react";
import axios from "axios";

import history from "../../utils/history";
import Context from "../../utils/context";

const AddPost = () => {
  const context = useContext(Context);
  const [postValues, setPostValues] = useState({
    uid: context.dbProfileState[0].uid,
    username: context.dbProfileState[0].username,
    title: "",
    body: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setPostValues({
      ...postValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/post/posttodb", postValues)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
      .then(setTimeout(() => history.replace("/"), 700));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="uk-input form-input"
            placeholder="Enter Blog Title"
            name="title"
            value={postValues.title}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="">Title</label>
          <textarea
            className="uk-textarea form-input"
            placeholder="Enter Blog Post"
            name="body"
            value={postValues.body}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <button type="submit"> Submit </button>
      </form>
      <br />
      <button onClick={() => history.replace("/posts")}> Cancel </button>
    </div>
  );
};

export default AddPost;
