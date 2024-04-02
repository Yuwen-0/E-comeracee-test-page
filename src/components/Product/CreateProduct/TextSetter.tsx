"use client";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import * as Setters from "@/store/create-product";

type TextSetterProps = {
  SetterFunctionName: String;
  valueName: string;
  id: string;
  multiline?: boolean;
};

const TextSetter = ({
  SetterFunctionName,
  valueName,
  id,
  multiline,
}: TextSetterProps) => {
  const SetterFunction: any =
    Setters[SetterFunctionName as keyof typeof Setters];
  const dispatch = useDispatch<Dispatch>();
  const value = useSelector((state: any) => state.createProduct[valueName]);
  return (
    <TextField
      multiline={multiline}
      value={value}
      sx={{ width: "31%" }}
      id={id}
      label={id}
      onChange={(e) => dispatch(SetterFunction(e.target.value))}
    />
  );
};

export default TextSetter;
