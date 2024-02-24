"use client";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  Typography,
  Link as MLink,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { CreateUser, validateUser } from "@/lib/auth";
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

  const validateInput = async (key: string, value: string | boolean) => {
    async function handleValidation(key: string, value: string) {
      const trimmedValue = value.toString().trim();
      const userExists = await validateUser(trimmedValue, key).then(
        (res) => res.customerExists
      );

      if (userExists) {
        setError((prevError) => ({
          ...prevError,
          [key]: {
            message: `${
              key.charAt(0).toUpperCase() + key.slice(1)
            } already exists`,
            error: true,
          },
        }));
      }

      setFormData((prevData) => ({
        ...prevData,
        [key]: trimmedValue,
      }));
    }
    if (key === "email") {
      handleValidation(key, value as string);
    }
    if (key === "username") {
      handleValidation(key, value as string);
    }
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let allValidationsPass = false;
    validateInput("email", formData.email);
    validateInput("password", formData.password);
    validateInput("username", formData.username);
    validateInput("terms", formData.terms);
    if (
      (await validateInput("email", formData.email)) &&
      (await validateInput("password", formData.password)) &&
      (await validateInput("username", formData.username)) &&
      (await validateInput("terms", formData.terms))
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
              message: "User already exists",
              error: true,
            },
          }));
          setLoading(false);
        }
        // Handle success case here
        if (!res.error) {
          setLoading(true);
          setError((prevError) => ({
            ...prevError,
            main: {
              message: "User created successfully",
              error: false,
            },
          }));
          setLoading(false);
          router.push("/login");
        }
      });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "400px",
          padding: "20px 30px",
          height: "620px",
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          border: "1px solid gray",
          color: "black",
          position: "relative",
        }}
      >
        {loading && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              backgroundColor: "rgba(0, 0, 0, 0.507)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
            }}
          >
            <CircularProgress size={70} sx={{ color: "white" }} />
          </Box>
        )}
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
              InputProps={{
                endAdornment: (
                  <IconButton
                    disabled={loading}
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
                disabled={loading}
                onChange={(e) => validateInput("terms", e.target.checked)}
              />
            }
            label={
              <span style={{ color: error.terms.error ? "#e57373" : "black" }}>
                I have read and agree to the{" "}
                <MLink
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  color={error.terms.error ? "error" : "primary"}
                >
                  terms and conditions
                </MLink>
              </span>
            }
          />
          <Box sx={{ position: "relative" }}>
            <Button
              disabled={loading}
              sx={{ width: "100%" }}
              type="submit"
              variant="outlined"
            >
              SignUp
            </Button>
            <Typography
              variant="body1"
              color={error.main.error ? "error" : "green"}
              sx={{
                width: "100%",
                textAlign: "center",
                position: "absolute",
                top: "35px",
              }}
            >
              {error.main.message}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                marginBottom: "20px",
                gap: "10px",
              }}
            >
              <hr style={{ flex: 1, borderColor: "black", height: "1px" }} />
              <Typography variant="body1">OR</Typography>
              <hr style={{ flex: 1, borderColor: "black", height: "1px" }} />
            </Box>
            <Button
              disabled={loading}
              sx={{ width: "100%" }}
              type="submit"
              variant="outlined"
            >
              SignUp with Google
            </Button>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginTop: "20px" }}
            >
              if you already have an account{" "}
              <MLink href={loading ? "#" : "/login"}>Login</MLink>
            </Typography>
          </Box>
        </form>
      </Box>
    </ThemeProvider>
  );
}
