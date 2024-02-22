"use client";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import CreateUser from "@/lib/create-user";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import * as z from "zod";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    showPassword: false,
    terms: false,
  });
  const [error, setError] = useState({
    email: {
      message: "",
      error: false,
    },
    username: {
      message: "",
      error: false,
    },
    password: {
      message: "",
      error: false,
    },
    terms: {
      error: false,
    },
  });

  const schema = z.object({
    email: z.string().email({ message: "Email format is not valid" }).max(100, {
      message: "Email is too long",
    }),
    username: z.string().min(1, { message: "Username is Required" }).max(100, {
      message: "Username is too long",
    }),
    password: z
      .string()
      .min(8, { message: "password must be at least 8" })
      .max(100),
    terms: z.boolean().refine((val) => val, {
      message: "You must accept the terms and conditions",
    }),
  });

  const handleTogglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const validateInput = (key: string, value: string | boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [key]: {
        message: "",
        error: false,
      },
    }));
    try {
      schema.parse({ [key]: value });
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          if (error.path.includes(key)) {
            setError((prevError) => ({
              ...prevError,
              [key]: {
                message: error.message,
                error: true,
              },
            }));
          }
        });
      }
    }
    return !error[key as keyof typeof error].error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateInput("email", formData.email) &&
      validateInput("username", formData.username) &&
      validateInput("password", formData.password) &&
      validateInput("terms", formData.terms)
    ) {
      CreateUser(formData).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "15%",
        left: "35%",
        width: "400px",
        padding: "30px",
        height: "500px",
        backgroundColor: "whitesmoke",
        borderRadius: "10px",
        border: "1px solid gray",
        color: "black",
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <TextField
          value={formData.email}
          onChange={(e) => validateInput("email", e.target.value)}
          type="email"
          id="email"
          label="Email*"
          variant="outlined"
          error={error.email.error}
          helperText={error.email.message}
          autoComplete="on"
        />
        <TextField
          value={formData.username}
          onChange={(e) => validateInput("username", e.target.value)}
          type="text"
          id="username"
          label="Username*"
          variant="outlined"
          error={error.username.error}
          helperText={error.username.message}
        />
        <TextField
          value={formData.password}
          onChange={(e) => validateInput("password", e.target.value)}
          type={formData.showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {formData.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
          id="password"
          label="Password*"
          variant="outlined"
          error={error.password.error}
          helperText={error.password.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.terms}
              onChange={(e) => validateInput("terms", e.target.checked)}
            />
          }
          label="I accept the terms and conditions"
        />
        <Button type="submit" variant="outlined">
          SignUp
        </Button>
        {error.terms.error && (
          <p className="text-red-500 text-center">
            {"You must accept the terms"}
          </p>
        )}
      </form>
    </Box>
  );
}
