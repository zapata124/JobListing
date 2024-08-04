import React, { useState } from "react";
import {
  Box,
  Button,
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

interface AppFormTypes {
  credentialFields: string[];
  authenticationFields: string[];
  submit: (arg: any) => void;
}
const AppForm: React.FC<AppFormTypes> = ({
  credentialFields,
  authenticationFields,
  submit,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => {
    submit(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          height: "100%",
        }}
      >
        {credentialFields.map((field: string) => {
          return (
            <TextField required fullWidth label={field} {...register(field)} />
          );
        })}
        {authenticationFields.map((label: string) => {
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

export default AppForm;
