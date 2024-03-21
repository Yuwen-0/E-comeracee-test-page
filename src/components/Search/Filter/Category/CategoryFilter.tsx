import { useSelector } from "react-redux";
import { random } from "lodash";
import FilterTemplate from "../FilterTemplate";
import CategoryOption from "./CategoryOption";

export default function CategoryFilter() {
  const categories = useSelector((state: any) => state.search.categories);
  return (
    <FilterTemplate title={"Categories"}>
      {categories.map((category: string) => {
        const key = random(0, 100_000_000, false).toString();
        return <CategoryOption key={key} value={category} />;
      })}
    </FilterTemplate>
  );
}
