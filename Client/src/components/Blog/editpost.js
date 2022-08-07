import React, { useContext, useState } from "react";
import axios from "axios";
import history from "../utils/history";
import Context from "../utils/context";

const EditPost = (props) => {
  const context = useContext(Context);
  const [postValues, setPostValues] = useState({
    uid: context.dbProfileState[0].uid,
    username: context.dbProfileState[0].username,
    pid: props.location.state.post.post.pid,
    title: props.location.state.post.post.title,
    body: props.location.state.post.post.body,
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setPostValues({
      ...postValues,
      [name]: value,
    });
  };

  const [stateLocal, setState] = useState({
    title: props.location.state.post.post.title,
    body: props.location.state.post.post.body,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put("/api/put/post", postValues)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .then(setTimeout(() => history.replace("/profile"), 700));
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
      <Button onClick={() => history.goBack()}> Cancel </Button>
    </div>
  );
};

export default EditPost;
