import { NextPage } from "next";
import Head from "next/head";
import { withLayout } from "~/plugins/LayoutSetup";

export function getServerSideProps() {
  return { props: withLayout("home") };
}

const AboutPage: NextPage = function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>Hello about page</h1>
    </>
  );
};

export default AboutPage;
