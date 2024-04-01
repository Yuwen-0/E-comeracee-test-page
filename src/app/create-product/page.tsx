import ImageUploader from "@/components/Product/CreateProduct/ImageUploader";
import PreviewProduct from "@/components/Product/CreateProduct/PreviewProduct";
import PriceSetter from "@/components/Product/CreateProduct/PriceSetter";
import ProductNameSetter from "@/components/Product/CreateProduct/ProductNameSetter";
import DescriptionSetter from "@/components/Product/CreateProduct/DescriptionSetter";
import { Box } from "@mui/material";

export default function CreateProduct() {
  return (
    <>
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        id="form"
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
          <DescriptionSetter />
        </Box>
        <Box sx={{ flexGrow: 2, justifyContent: "center" }} id="Preview">
          <PreviewProduct />
        </Box>
      </form>
    </>
  );
}
