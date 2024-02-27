const Product = ({ data }: { data: ProductData }) => {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
};

export default Product;
