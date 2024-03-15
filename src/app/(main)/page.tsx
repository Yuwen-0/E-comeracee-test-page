"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { Box, Button, Input } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  return (
    <Box>
      <SessionProvider>
        <UserName />
      </SessionProvider>
    </Box>
  );
}

function UserName() {
  const { data: session } = useSession();
  console.log(session);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    const response = await fetch("/api/uploadAvatar", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };
  if (!session) {
    return (
      <div>
        <p className="text-red-500">You are not signed in</p>
      </div>
    );
  }
  return (
    <div>
      <p className="text-green-500">Signed in as {session.user.username}</p>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} type="file" placeholder="Image" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
