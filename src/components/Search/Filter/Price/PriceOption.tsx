import { Box, Checkbox, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { setPriceOptions } from "@/store/search";

export default function PriceOption({ price }: { price: string }) {
  const dispatch = useDispatch();
  const priceObjects = useSelector((state: any) => state.search.options.Price);

  const checked = priceObjects[price];

  const setCategoryValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setPriceOptions({
        name: price,
        value: e.target.checked,
      }),
    );
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingInline: "7px",
        justifyContent: "space-between",
        marginLeft: "17px",
        width: "80%",
      }}
    >
      <Typography fontWeight={"bold"} color={"text.secondary"}>
        - {price}
      </Typography>
      <Checkbox
        size="small"
        onChange={setCategoryValue}
        checked={checked}
        color="secondary"
      />
    </Box>
  );
}
