import ImageUploader from "@/components/Product/CreateProduct/ImageUploader";
import PreviewProduct from "@/components/Product/CreateProduct/PreviewProduct";
import PriceSetter from "@/components/Product/CreateProduct/PriceSetter";
import ProductNameSetter from "@/components/Product/CreateProduct/ProductNameSetter";
import { Box } from "@mui/material";

export default function CreateProduct() {
  return (
    <>
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            flexGrow: 7,
          }}
          id="Inputs"
        >
          <ProductNameSetter />
          <ImageUploader />
          <PriceSetter />
        </Box>
        <span
          style={{ width: "1px", height: "100%", border: "1px solid black" }}
        />
        <Box sx={{ flexGrow: 2, justifyContent: "center" }} id="Preview">
          <PreviewProduct />
        </Box>
      </form>
    </>
  );
}
