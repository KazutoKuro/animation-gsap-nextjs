import { NextPage } from "next";
import { withLayout } from "~/plugins/LayoutSetup";
export function getServerSideProps() {
  return { props: withLayout("home") };
}

const AnimationPage2: NextPage = function AnimationPage2() {
  return <div>Animation page 2</div>;
};

export default AnimationPage2;
