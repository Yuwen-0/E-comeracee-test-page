import { ChangeEvent, FormEvent, useState } from "react";
import { NextPage } from "next";
import { FormControl, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const SearchBar: NextPage = () => {
  const [formData, setFormData] = useState({ search: "" });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, search: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${formData.search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          sx={{ width: "300px" }}
          placeholder="Search..."
          startAdornment={<Search color="secondary" />}
          inputProps={{ "aria-label": "search" }}
          color="secondary"
          value={formData.search}
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};

export default SearchBar;
