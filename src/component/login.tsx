import * as React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios, { AxiosResponse } from "axios";
import { BasicAuth } from "../axios/axiosConfig";
import { stringify } from "querystring";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";

import StoreState, { User } from "../types/user";

import { SET_AUTHENTICATED } from "../types/action";

export interface UserProps {
  // user: object;
}

export interface State {
  username: string;
  password: string;
  loading: Boolean;
  error: string;
  authen: boolean;
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  // const [userId, setUserId] = useState();
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // request body
    const userData = {
      username: username,
      password: password
    };

    axios
      .post("/login", stringify(userData), BasicAuth)
      .then(res => {
        console.log(res.data);
        dispatch({ type: SET_AUTHENTICATED, res: res });
        sessionStorage.setItem("token", res.data.accessToken);
        const FBIdToken = `Bearer ${res.data.accessToken}`;
        axios.defaults.headers.common["Authorization"] = FBIdToken;

        // props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <TextField
          name="username"
          type="text"
          placeholder="username"
          onChange={e => setUsername(e.target.value)}
          value={username}
        ></TextField>
        <TextField
          name="password"
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        ></TextField>
        <Button type="submit">Login {loading && <CircularProgress />}</Button>
      </form>
      {userId && <h1>{userId}</h1>}
    </div>
  );
}

export default Login;
