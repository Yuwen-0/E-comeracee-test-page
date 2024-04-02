"use client";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { setCategory } from "@/store/create-product";
import * as Setters from "@/store/create-product";
type CategoryProps = {
  optionsArray: string[];
  label: string;
  SetterName: string;
};
const CategorySelectorTemplate = ({
  optionsArray,
  label,
  SetterName,
}: CategoryProps) => {
  const Setter: any = Setters[SetterName as keyof typeof Setters];
  return (
    <FormControl sx={{ width: "31%" }}>
      <InputLabel variant="standard" htmlFor={label}>
        {label}
      </InputLabel>
      <NativeSelect
        variant="outlined"
        defaultValue={30}
        inputProps={{
          name: label,
          id: label,
        }}
        onChange={Setter}
      >
        {optionsArray.map((ContentName: string) => (
          <option key={ContentName} value={ContentName}>
            {ContentName}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CategorySelectorTemplate;
