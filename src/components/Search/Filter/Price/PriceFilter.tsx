import { Typography } from "@mui/material";
import FilterTemplate from "../FilterTemplate";
import { useSelector } from "react-redux";
import { random } from "lodash";
import PriceOption from "./PriceOption";
const PriceFilter = () => {
  const pricesObj = useSelector((state: any) => state.search.options.Price);
  const prices = useSelector((state: any) => state.search.values.Price);
  return (
    <FilterTemplate title={"Price"}>
      {prices.map((price: string) => {
        const key = random(0, 100_000_000, false).toString();
        return <PriceOption key={key} price={price} />;
      })}
    </FilterTemplate>
  );
};

export default PriceFilter;
