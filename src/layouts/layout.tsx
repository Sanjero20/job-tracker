interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return <main className="bg-light flex min-h-screen">{children}</main>;
}

export default MainLayout;
