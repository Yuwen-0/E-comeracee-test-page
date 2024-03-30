import ImageUploader from "@/components/Product/CreateProduct/ImageUploader";
import PreviewProduct from "@/components/Product/CreateProduct/PreviewProduct";
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
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            flexGrow: 7,
          }}
          id="Inputs"
        >
          <ProductNameSetter />
          <ImageUploader />
        </Box>
        <Box sx={{ flexGrow: 2, justifyContent: "center" }} id="Preview">
          <PreviewProduct />
        </Box>
      </form>
    </>
  );
}
