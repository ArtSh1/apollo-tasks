import React from "react";
import "./Message.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Message() {
  function getMessage(msg) {
    console.log(msg.target);
  }

  return (
    <div className="msg">
      <form>
        <textarea
          className="form-control rounded-0"
          id="message"
          name="message"
          placeholder="Comment"
          rows="5"
        ></textarea>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Message;
