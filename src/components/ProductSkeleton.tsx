import { Box, Skeleton } from "@mui/material";
export default function ProductSkeleton() {
  return (
    <Box>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={256}
        height={256}
      />
      <Skeleton animation="wave" variant="text" width={256 / 2} />
      <Skeleton animation="wave" variant="text" width={256 / 3} />
      <br />
      <Skeleton animation="wave" variant="text" width={256} />
      <Skeleton animation="wave" variant="text" width={256} />
      <Skeleton animation="wave" variant="text" width={256} />
      <Skeleton animation="wave" variant="text" width={256 / 3} />
    </Box>
  );
}
