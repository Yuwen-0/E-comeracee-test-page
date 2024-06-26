import ImageUploader from "@/components/Product/CreateProduct/ImageUploader";
import PreviewProduct from "@/components/Product/CreateProduct/PreviewProduct";
import PriceSetter from "@/components/Product/CreateProduct/PriceSetter";
import { Box } from "@mui/material";
import TextSetter from "@/components/Product/CreateProduct/TextSetter";
import CategorySelectorTemplate from "@/components/Product/CreateProduct/CategorySelector";

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
            gap: "20px",
            flexGrow: 7,
          }}
          id="Inputs"
        >
          <TextSetter
            SetterFunctionName={"setName"}
            valueName="name"
            id="name"
          />
          <ImageUploader />
          <PriceSetter />
          <TextSetter
            multiline
            SetterFunctionName={"setShortDescription"}
            valueName="shortDescription"
            id="shortDescription"
          />
          <CategorySelectorTemplate
            optionsArray={[
              "Tech",
              "Clothing",
              "Beauty & Health",
              "Toys & Games",
              "Sports & Outdoors",
            ]}
            label={"Category"}
            SetterName={"setCategory"}
          />
        </Box>
        <Box sx={{ flexGrow: 2, justifyContent: "center" }} id="Preview">
          <PreviewProduct />
        </Box>
      </form>
    </>
  );
}
