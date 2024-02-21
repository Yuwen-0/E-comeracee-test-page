"use client";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import CreateUser from "@/lib/create-user";

import * as z from "zod";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [terms, setTerms] = useState(false);
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

  const validateInput = (key: string): boolean => {
    const values: { [key: string]: string | boolean } = {
      email,
      username,
      password,
      terms,
    };
    const value = values[key];
    setError((prevError) => ({
      ...prevError,
      [key]: {
        message: "",
        error: false,
      },
    }));
    try {
      schema.parse({ [key]: value });
    } catch (e: any) {
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

  const Action = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      validateInput("email") &&
      validateInput("username") &&
      validateInput("password") &&
      validateInput("terms")
    ) {
      const data = {
        email,
        username,
        password,
      };
      CreateUser(data).then((res) => {
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
      <form onSubmit={Action} className="flex flex-col gap-5">
        <TextField
          value={email}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            validateInput("email");
          }}
          type="email"
          id="email"
          label="Email*"
          variant="outlined"
          error={error.email.error}
          helperText={error.email.message}
        />
        <TextField
          value={username}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
            validateInput("username");
          }}
          type="text"
          id="username"
          label="Username*"
          variant="outlined"
          error={error.username.error}
          helperText={error.username.message}
        />
        <TextField
          value={password}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            validateInput("password");
          }}
          type="password"
          id="password"
          label="Password*"
          variant="outlined"
          error={error.password.error}
          helperText={error.password.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              value={terms}
              onChange={() => {
                setTerms(!terms);
                validateInput("terms");
              }}
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
