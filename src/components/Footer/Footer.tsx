export function Footer() {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        columnGap: 5,
        rowGap: 2,
      }}
    >
      <p className="m-0">Living Faith Church</p>
      <p className="m-0">&copy;2023 John Kennedy Kalu</p>
    </footer>
  );
}
