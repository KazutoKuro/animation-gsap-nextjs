import { type PropsWithChildren } from "react";
import { DefaultLayout } from "~/layouts/DefaultLayout";
import { MainLayout } from "~/layouts/MainLayout";

export type Layout = "default" | "home";

const layouts: Array<{
  name: Layout;
  component: ({ children }: PropsWithChildren<object>) => JSX.Element;
}> = [
  { name: "default", component: DefaultLayout },
  { name: "home", component: MainLayout },
];

interface LayoutSetupProps {
  layout?: Layout;
}
export function LayoutSetup({
  layout = "home",
  children,
}: React.PropsWithChildren<LayoutSetupProps>) {
  const Layout = layouts.find((l) => l.name === layout)!.component;

  return <Layout>{children}</Layout>;
}

export function withLayout<Props>(layout: Layout, props: Props = {} as Props) {
  return { layout, ...props };
}
