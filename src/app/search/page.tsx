"use client";
import { useSearchParams } from "next/navigation";


const Filter = () => {
  const params = useSearchParams();
  const category = params.get("category") || "*";
  const name = params.get("name") || "";
  let content 
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};
export default Filter;
