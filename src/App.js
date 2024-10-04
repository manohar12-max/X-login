import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [islogin, setIslogin] = useState(false);
  const [failed, setFailed] = useState(false);
  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (data.username !== "user" || data.password !== "password") {
      setFailed(true);
      setIslogin(false);
      return;
    }
    setFailed(false);
    setIslogin(true);
    return;
  };
  return (
    <div className="App">
      <h1>Login Page</h1>
      {failed && <span>Invalid username or password</span>}
      {!islogin ? (
        <form action="" onSubmit={submit}>
          <div className="">
            <label for="username">Username:</label>
            <input
              onChange={change}
              value={data.username}
              type="text"
              id="username"
              name="username"
            />
          </div>
          <div className="">
            <label for="password">Password:</label>
            <input
              onChange={change}
              value={data.password}
              type="text"
              id="password"
              name="password"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <span>Welcome, user!</span>
      )}
    </div>
  );
}
