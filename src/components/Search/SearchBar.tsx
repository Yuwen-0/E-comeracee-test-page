import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FormControl, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useDispatch, useSelector } from "react-redux";
import { setValue, clearValue } from "@/store/search";

const SearchBar = ({ searchText }: { searchText: string }) => {
  const search = useSelector((state: any) => state.search.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setValue(searchText));
  }, [dispatch, searchText]);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?name=${search}&category=`);
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
              {search && (
                <IconButton
                  sx={{ padding: 0 }}
                  onClick={() => {
                    dispatch(clearValue());
                  }}
                >
                  <CloseSharpIcon />
                </IconButton>
              )}
            </>
          }
          inputProps={{ "aria-label": "search" }}
          color="secondary"
          value={search}
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};

export default SearchBar;
