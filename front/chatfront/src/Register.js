import { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
    console.log(userName);
  };

  const userRegister = (e) => {
    e.preventDefault();
    console.log(userName);
  };
  return (
    <div>
      <form onSubmit={userRegister}>
        <input onChange={onChangeUserName}></input>
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default Register;
