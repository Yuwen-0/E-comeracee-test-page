"use client";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { useState } from "react";
import CreateUser from "@/lib/create-user";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "@/lib/theme";
import { useRouter } from "next/navigation";

import * as z from "zod";

export default function SignUp() {
  const router = useRouter();
  const theme = createTheme(themeOptions);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    showPassword: false,
    terms: false,
  });
  const [error, setError] = useState({
    main: {
      message: "",
      error: false,
    },
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
      message: "I accept the terms and conditions",
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
      .max(20, { message: "password must be at most 20" }),
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
    let data;
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
      schema.parse({ ...formData, [key]: value });
      return (data = true);
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
      return (data = false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let allValidationsPass = false;
    validateInput("email", formData.email);
    validateInput("password", formData.password);
    validateInput("username", formData.username);
    validateInput("terms", formData.terms);
    if (
      validateInput("email", formData.email) &&
      validateInput("password", formData.password) &&
      validateInput("username", formData.username) &&
      validateInput("terms", formData.terms)
    ) {
      allValidationsPass = true;
    }

    if (allValidationsPass) {
      setLoading(true);
      CreateUser(formData).then((res) => {
        if (res.error) {
          setError((prevError) => ({
            ...prevError,
            main: {
              message:
                res.error === "User already exists"
                  ? "User already exists"
                  : "Creating user failed",
              error: true,
            },
          }));
          setLoading(false);
        }
        // Handle success case here
        if (!res.error) {
          setLoading(false);
          setError((prevError) => ({
            ...prevError,
            main: {
              message: "User created successfully",
              error: false,
            },
          }));
          router.push("/login");
        }
      });
    } else {
      setError((prevError) => ({
        ...prevError,
        main: {
          message: "Validation failed",
          error: true,
        },
      }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "400px",
          padding: "20px 30px",
          height: "500px",
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          border: "1px solid gray",
          color: "black",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginBottom: "12px", textAlign: "center" }}
          color={"primary"}
        >
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              marginBottom: "15px",
            }}
          >
            <TextField
              value={formData.email}
              onChange={(e) => validateInput("email", e.target.value)}
              type="email"
              id="email"
              label="Email*"
              variant="outlined"
              error={error.email.error}
              helperText={
                <span style={{ position: "absolute" }}>
                  {error.email.message}
                </span>
              }
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
              helperText={
                <span style={{ position: "absolute" }}>
                  {error.username.message}
                </span>
              }
            />
            <TextField
              value={formData.password}
              onChange={(e) => validateInput("password", e.target.value)}
              type={formData.showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              id="password"
              label="Password*"
              variant="outlined"
              error={error.password.error}
              helperText={
                <span style={{ position: "absolute" }}>
                  {error.password.message}
                </span>
              }
            />
          </Box>
          <FormControlLabel
            color="error"
            control={
              <Checkbox
                checked={formData.terms}
                onChange={(e) => validateInput("terms", e.target.checked)}
              />
            }
            label={
              <span style={{ color: error.terms.error ? "#e57373" : "black" }}>
                I have read and agree to the{" "}
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  color={error.terms.error ? "error" : "primary"}
                >
                  terms and conditions
                </Link>
              </span>
            }
          />

          <Button type="submit" variant="outlined">
            SignUp
          </Button>
          <Typography
            variant="body1"
            color={error.main.error ? "error" : "green"}
            sx={{ textAlign: "center" }}
          >
            {error.main.message}
          </Typography>
        </form>
      </Box>
    </ThemeProvider>
  );
}
