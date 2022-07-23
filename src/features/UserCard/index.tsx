import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

type Props = {
  login: string;
  avatar: string;
  page: string;
  repoNum: number;
};

function UserCard({ login, avatar, page, repoNum }: Props) {
  return (
    <Card sx={{ minWidth: 275, margin: "50px", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          user card
        </Typography>
        <Typography variant="h5" component="div">
          <Avatar src={avatar} /> {login}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <a href={page} target="_blank">
            Github Page
          </a>
        </Typography>
        <Typography variant="body2">
          {`number of public repos: ${String(repoNum)}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
