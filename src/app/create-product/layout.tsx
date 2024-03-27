import MainNavBar from "@/components/Navbar/MainNavBar";

export default function CreateProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MainNavBar
        searchText={""}
        width={"100%"}
        height={null}
        border
        backgroundColor={"primary.main"}
        padding={2}
      />
      {children}
    </>
  );
}
