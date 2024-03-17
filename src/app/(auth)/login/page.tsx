"use client";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const [error, setError] = useState({
    main: {
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
  });

  const schema = z.object({
    username: z.string().min(1, { message: "Username is Required" }).max(100, {
      message: "Username is too long",
    }),
    password: z
      .string()
      .min(8, { message: "password must be at least 8" })
      .max(20, { message: "password must be at most 20" }),
  });

  const handleTogglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const validateInput = (key: string, value: string) => {
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
    setLoading(true);
    e.preventDefault();
    let allValidationsPass = false;
    validateInput("username", formData.username);
    validateInput("password", formData.password);

    if (
      validateInput("username", formData.username) &&
      validateInput("password", formData.password)
    ) {
      allValidationsPass = true;
    }

    if (allValidationsPass) {
      const SignInData = await signIn("credentials", {
        redirect: false,
        username: formData.username,
        password: formData.password,
      });
      if (SignInData?.error) {
        setError((prevError) => ({
          ...prevError,
          main: {
            message:
              SignInData.error === "CredentialsSignin"
                ? "There is no user with that information"
                : "Something went wrong",
            error: true,
          },
        }));
        setLoading(false);
      } else {
        setLoading(false);
        router.push("/");
      }
    } else {
      setError((prevError) => ({
        ...prevError,
        main: {
          message: "Validation failed",
          error: true,
        },
      }));
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "400px",
        padding: "20px 30px",
        height: "520px",
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
        color="secondary"
      >
        Login
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
            color="secondary"
            disabled={loading}
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
            color="secondary"
            disabled={loading}
            value={formData.password}
            onChange={(e) => validateInput("password", e.target.value)}
            type={formData.showPassword ? "text" : "password"}
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
        <Button
          disabled={loading}
          sx={{ height: "40px" }}
          type="submit"
          color="secondary"
          variant="outlined"
        >
          Login
        </Button>
        <Box sx={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
          <hr style={{ flex: 1, borderColor: "black", height: "1px" }} />
          <Typography variant="body1" sx={{ margin: "0 20px" }}>
            OR
          </Typography>
          <hr style={{ flex: 1, borderColor: "black", height: "1px" }} />
        </Box>
        <Button
          disabled={loading}
          sx={{
            height: "40px",
          }}
          color="secondary"
          type="submit"
          variant="outlined"
        >
          Login With Google
        </Button>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          if you don&apos;t have an account{" "}
          <Link
            style={{ color: "#334266" }}
            className="hover:underline"
            href={loading ? "#" : "/sign-up"}
          >
            {" "}
            Sign Up
          </Link>
        </Typography>
        <Typography
          variant="body1"
          color={error.main.error ? "error" : "green"}
          sx={{ textAlign: "center" }}
        >
          {error.main.message}
        </Typography>
      </form>
    </Box>
  );
}
