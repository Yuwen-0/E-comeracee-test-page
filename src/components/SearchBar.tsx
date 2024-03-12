import { ChangeEvent, FormEvent, useState } from "react";
import { NextPage } from "next";
import { FormControl, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const SearchBar = ({ searchText }: { searchText: string }) => {
  const [formData, setFormData] = useState({ search: searchText });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, search: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?name=${formData.search}&category=`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Input
          sx={{ width: "300px" }}
          placeholder="Search..."
          startAdornment={
            <Search sx={{ pointerEvents: "none", marginRight: "5px" }} />
          }
          endAdornment={
            <>
              {formData.search && (
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => setFormData({ ...formData, search: "" })}
                >
                  <CloseSharpIcon />
                </IconButton>
              )}
            </>
          }
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
