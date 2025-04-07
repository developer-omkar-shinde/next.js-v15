export default function RootLayout({
  dashboard,
  sidebar,
  profile,
}: {
  dashboard: React.ReactNode;
  sidebar: React.ReactNode;
  profile: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "250px", height: "500px", background: "#eee" }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1 }}>{dashboard}</main>
      <main style={{ flex: 1 }}>{profile}</main>
    </div>
  );
}
