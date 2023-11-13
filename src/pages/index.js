import Image from "next/image";
import Hero from "@/components/home/Hero";
import Save from "@/components/home/Save";
import { Nunito_Sans } from "next/font/google";
import Brands from "@/components/home/Brands";
import Choose from "@/components/home/Choose";
import Get from "@/components/home/Get";
import Category from "@/components/home/Category";
import Creators from "@/components/home/Creators";
import Analyze from "@/components/home/Analyze";
import Influencer from "@/components/home/Influencer";
import Campaign from "@/components/home/Campaign";
import Insightful from "@/components/home/Insightful";
import Explore from "@/components/home/Explore";
import Testimonial from "@/components/home/Testimonial";
import Pricing from "@/components/home/Pricing";
import ManagedService from "@/components/home/ManagedService";
import Marquee from "react-fast-marquee";
import Head from "next/head";

const font2 = Nunito_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Influent | Home</title>
      </Head>
      <main className={font2.className}>
        <Hero />
        <Save />
        <Marquee>
          <Brands />
        </Marquee>
        <Choose />
        <Get />
        <Category />
        <Creators />
        <Analyze />
        <Influencer />
        <Campaign />
        <Insightful />
        <Explore />
        {/* <Testimonial /> */}

        <Pricing />
        <ManagedService />
      </main>
    </>
  );
}
