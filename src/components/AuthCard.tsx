import React, { ReactNode } from "react";
import { Paper, Typography, Container } from "@mui/material";

type Children = {
  children: ReactNode;
};
interface AuthCardProps {
  title: string;
}
const AuthCard: React.FC<AuthCardProps & Children> = ({ title, children }) => {
  return (
    <Container
      maxWidth={"md"}
      sx={{
        height: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "75%",
          padding: 4,
          pb: 2,
        }}
      >
        <Typography
          sx={{ mb: 4, fontSize: { xl: 60, lg: 55, md: 50, sm: 40, xs: 30 } }}
          textAlign={"center"}
        >
          {title}
        </Typography>
        {children}
      </Paper>
    </Container>
  );
};

export default AuthCard;
