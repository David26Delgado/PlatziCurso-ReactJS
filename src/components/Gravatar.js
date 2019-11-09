import React from "react";
import md5 from "md5";

function Gravatar(props) {
  const email = props.email.length > 0 ? props.email : "";
  const hash = email.length > 0 ? md5(email) : "avatar";

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;
