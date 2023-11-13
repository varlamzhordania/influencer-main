import TabsComponent from "@/components/PlatformFeatures/Tabs";
import Analyze from "@/components/analyze/Analyze";
import Head from "next/head";
import { useRouter } from "next/router";

const PlatformFeatures = () => {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <>
      <Head>
        <title>Platform features | Influent</title>
      </Head>
      <Analyze />
      <section id="features" className="pt-10">
        <div>
          <TabsComponent tab={tab} />
        </div>
      </section>
    </>
  );
};

export default PlatformFeatures;
