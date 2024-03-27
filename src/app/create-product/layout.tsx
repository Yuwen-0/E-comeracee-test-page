import MainNavBar from "@/components/Navbar/MainNavBar";

export default function CreateProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-gray-100">
        {" "}
        <MainNavBar
          searchText={""}
          width={"100%"}
          height={null}
          border
          backgroundColor={"primary.main"}
          padding={2}
        />
        {children}
      </body>
    </html>
  );
}
