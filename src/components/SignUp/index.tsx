import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Container,
  TextField,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { useForm, FieldValues, UseFormRegister } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputProps {
  register: UseFormRegister<FieldValues>;
  type: string;
}
export const PasswordInput: React.FC<InputProps> = ({ register, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{type}</InputLabel>
      <OutlinedInput
        required
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        {...register(type)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={type}
      />
    </FormControl>
  );
};

const AppForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const submit = (data: FieldValues) => {
    console.log(data);
  };
  const userInfoFields = ["First Name", "Last Name", "Email"];
  const passwordLabels = ["Password", "Confirm Password"];
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          height: "100%",
        }}
      >
        {userInfoFields.map((field: string) => {
          return (
            <TextField required fullWidth label={field} {...register(field)} />
          );
        })}
        {passwordLabels.map((label: string) => {
          return <PasswordInput register={register} type={label} />;
        })}
      </Box>
      <Box
        width={1}
        mt={2}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button type={"submit"} variant="outlined">
          Sign Up
        </Button>
      </Box>
    </form>
  );
};
const AuthCard: React.FC = () => {
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
          Sign Up
        </Typography>
        <AppForm />
      </Paper>
    </Container>
  );
};

export default AuthCard;
