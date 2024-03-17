export async function filterBy(category: any, name: any) {
  const url = `${window.location.origin}/api/product?category=${category}&name=${name}`;
  const products = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return products;
}
