import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

import UserCard from "../features/UserCard";
import RepoTable from "../features/RepoTable";


function User() {

  const [user, setUser] = useState({ login: "",avatar_url: "", html_url: "", public_repos: 0 });
  const { username } = useParams();

  async function getData(url: string) {
    try {
      const { data } = await axios.get(url);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData(`https://api.github.com/users/${username}`);
  }, [username]);
  return <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
    {(user.login !== "") ? (
      <>
      <UserCard login={user.login} avatar={user.avatar_url} page={user.html_url} repoNum={user.public_repos} />
      <RepoTable url={`https://api.github.com/users/${username}/repos`} />
      </>) : <CircularProgress sx={{ marginTop: "20px"}} />}

  </Box>;
}

/*
// https://api.github.com/users/defunkt/repos

"name": "ace",
"html_url",
"forks_count": 7,
"stargazers_count": 16,
"created_at": "2011-06-07T18:41:40Z",
"updated_at": "2022-02-13T21:24:30Z",


*/

export default User;
