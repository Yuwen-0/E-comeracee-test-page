"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Filter = () => {
  const params = useSearchParams();
  const type = params.get("category") || "All";
  useEffect(() => {
    const getByType = async () => {
      const url = window.location.origin + "/api/product?type=" + type;
      const response = await fetch(url).then((response) => response.json());
      console.log(response);
    };
    getByType();
  });
  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
};
export default Filter;
