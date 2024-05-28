interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <main className="container m-auto h-full">{children}</main>
    </div>
  );
}

export default MainLayout;
