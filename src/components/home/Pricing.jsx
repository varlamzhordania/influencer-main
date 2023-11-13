import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { Crimson_Text } from "next/font/google";
import RegisterModal from "../shared/RegisterModal";
import { useAuth } from "@/context/AuthContext";
import { loadStripe } from "@stripe/stripe-js";
import ToggleSwitch from "../shared/ToggleSwitch";
import paymentApi from "@/lib/payment";
import axios from "axios";
import { Raleway } from "next/font/google";

const font2 = Raleway({ subsets: ["latin"] });

const Pricing = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [userPlan, setUserPlan] = useState(null);

  const [loading, setLoading] = useState(false);

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async (plan) => {
    setLoading(true);
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/payment/session", {
      item: {
        name: plan?.name,
        description: plan?.desc,
        // image:
        //   'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
        price: isYearlyBilling
          ? plan?.price * 12 - plan?.price * 12 * 0.15
          : plan?.price,
        customerEmail: user?.email,
      },
      plan,
      user,
      isYearlyBilling,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data?.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubscribe = (plan) => {
    router.push(
      process.env.NODE_ENV === "development"
        ? "https://infulent.io/signin"
        : "https://infulent.io/signin"
    );
    // if (!user) {
    //   // setSelectedPlan(plan);
    //   router.push(
    //     process.env.NODE_ENV === "development"
    //       ? "http://localhost:3001/signin"
    //       : "https://infulent.io/signin"
    //   );
    //   // toggleModal();
    // } else {
    //   console.log("user plan", userPlan);
    //   if (userPlan) {
    //     router.push(
    //       process.env.NODE_ENV === "development"
    //         ? "http://localhost:3001/plan&billing"
    //         : "https://infulent.io/plan&billing"
    //     );
    //   } else {
    //     createCheckOutSession(plan);
    //   }
    // }
  };

  const getPlans = async () => {
    const res = await paymentApi.getPlans();
    setPlans(res);
    return res;
  };
  const getUserPlan = async () => {
    const res = await paymentApi.getUserPlan(user?.uid);
    console.log("res plan", res);
    setUserPlan(res);
    return res;
  };

  useEffect(() => {
    getPlans();
  }, []);

  useEffect(() => {
    if (user) {
      getUserPlan();
    }
  }, [user]);

  const data = [
    {
      id: 1,
      package: "Essentials",
      price: "$79.99",
      duration: "Per Month",
      features: [
        {
          feature: "Search 300K+ influencers",
        },
        { feature: "Youtube, Instagram ,Tiktok" },
        { feature: "Select 30 influencers" },
        { feature: "Analyze 10 influencer profiles" },
        { feature: "Monitor 5 influencers posts" },
        { feature: "1 Team member" },
        { feature: "7 day free trial" },
        { feature: "" },
        { feature: "" },
        { feature: "" },
        { feature: "" },
        { feature: "" },
        { feature: "" },
      ],
    },
    {
      id: 2,
      package: "PRO",
      price: "$89.99",
      duration: "Per Month",
      features: [
        {
          feature: "Search 300K+ influencers",
        },
        { feature: "Youtube, Instagram ,Tiktok" },
        { feature: "Select 150 influencers" },
        { feature: "Analyze 150 influencer profiles" },
        { feature: "Create an Influencer database" },
        { feature: "Create 10 campaigns" },
        { feature: "Monitor 20 influencers posts" },
        { feature: "5 Team member" },
        { feature: "7 day free trial" },
      ],
    },
    {
      id: 3,
      package: "Advanced",
      price: "$99.99",
      duration: "Per Month",
      features: [
        {
          feature: "Search 300K+ influencers",
        },
        { feature: "Youtube, Instagram ,Tiktok" },
        { feature: "Select 1000 influencers" },
        { feature: "Analyze 500 influencer profiles" },
        { feature: "Create an Influencer database" },
        { feature: "Create 50 campaigns" },
        { feature: "Monitor 200 influencers posts" },
        { feature: "10 Team member" },
        { feature: "7 day free trial" },
      ],
    },
    {
      id: 4,
      package: "Enterprise",
      price: "$100.99",
      duration: "Per Month",
      features: [
        {
          feature: "Search 300K+ influencers",
        },
        { feature: "Youtube, Instagram ,Tiktok" },
        { feature: "Select 1500 influencers" },
        { feature: "Analyze 1000 influencer profiles" },
        { feature: "Create an Influencer database" },
        { feature: "Create 100 campaigns" },
        { feature: "Monitor 300 influencers posts" },
        { feature: "20 Team member" },
        { feature: "7 day free trial" },
      ],
    },
  ];

  return (
    <div
      id="pricing"
      className="flex mt-44 md:mt-44  flex-col justify-center items-center"
    >
      <h1 className="text-[40px] font-[700]"    id="pricing">Our Pricing</h1>
      <p className="max-w-[560px] text-center px-5 md:px-7 text-[18px]">
        Are you ready to learn more about what Influent can do for you? Start
        exploring with a free trial
      </p>

      <div className=" max-w-screen-xl ">
        <div className="mb-4 fontMonst mt-10">
          <ToggleSwitch
            label={"Pay Anually (15% discount)"}
            setChecked={setIsYearlyBilling}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 items-center justify-center">
            {plans?.map((item, index) => (
            
                <div key={index} className="group">
                    {index === 0 &&
                <div className="cursor-pointer hover:bg-white group-hover:bg-gradient-to-l  border border-[#FF5B84] from-[#FF5B84] to-[#4254FF] md:w-[295px] rounded-[10px] flex flex-col gap-3 items-center text-center py-5 px-5 text-left">
                  <p className="text-[20px] group-hover:text-white text-[#AF1FFC] capitalize">
                    {item?.name}
                  </p>
                  <p className="text-[32px] font-[700] group-hover:text-white">
                    ${item?.price}
                  </p>
                  <span className="text-[20px] group-hover:text-white text-[#AF1FFC] capitalize">
                    Per Month
                  </span>
                  <p className="border w-full"></p>
                  {/* {item.features.map((items, i) => (
                    <p key={i} className="text-[16px] group-hover:text-white">
                      {items.feature}
                    </p>
                  ))} */}
                  <p className="text-[16px] group-hover:text-white">
                    Search 300k+ influencers
                  </p>
                  <p className="text-[16px] group-hover:text-white">
                    Youtube, Instagram, Tiktok
                  </p>
                  <p className="text-[16px] group-hover:text-white">
                    Select 30 influencers
                  </p>
                  <p className="text-[16px] group-hover:text-white">
                    Analyze 30 influencers profiles
                  </p>
                  <p className="text-[16px] group-hover:text-white">
                    Monitor 3 creator/influencer posts
                  </p>
                  <p className="text-[16px] group-hover:text-white">
                    7 day free trial
                  </p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <p className="text-[16px] group-hover:text-white"></p>
                  <button
                    onClick={() => handleSubscribe(item)}
                    className="w-[164px] group-hover:text-[#AF1FFC] group-hover:from-[#fff] group-hover:to-[#fff] mt-5 text-white h-[49px] bg-gradient-to-r to-[#FF5B84] from-[#4254FF] rounded-full"
                    style={{
                      opacity: loading ? "50%" : "100%",
                    }}
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Start For Free"}
                  </button>
                </div>}
              </div>
              
           
            ))}
            <div className="md:w-[300px] h-[300px] p-5 bg-gradient-to-r from-[#4255ff] to-[#AF1FFC] rounded-[10px] shadow-sm flex flex-col items-center justify-center">
            <h1 className={`${font2.className} text-[32px] md:text-[36px] font-[700] text-white text-center w-100`}>
              Custom<span className="bg-clip-text text-transparent bg-white"> Solution </span>           </h1>
              <button
                onClick={() => router.push("/contact-us")}
                className="mt-3 font-[400] text-[14px] md:text-[16px] pl-2 md:pl-4 z-20 w-[150px] md:w-[181px] h-[49px] bg-white hover:scale-105 transition-all ease-in duration-300  text-[#AF1FFC] border border-[#AF1FFC] rounded-full  flex gap-5 items-center justify-center"
              >
                Contact us
                <div
                  style={{
                    background:
                      "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                  }}
                  className="w-[30px] h-[30px] md:w-[39px] md:h-[39px] flex justify-center items-center rounded-full"
                >
                  <BsArrowRight className="text-white md:w-[20px] w-[18px]" />
                </div>
              </button>
            </div>
            {/* {data.map((item, index) => (
              <div key={index} className="group ">
                  {index === 0 &&
                <div className="cursor-pointer hover:bg-white group-hover:bg-gradient-to-l  border border-[#FF5B84] from-[#FF5B84] to-[#4254FF] md:w-[295px] rounded-[10px] flex flex-col gap-3 items-center text-center py-5 px-5 text-left">
                  <p className="text-[20px] group-hover:text-white text-[#AF1FFC] capitalize">
                    {item.package}
                  </p>
                  <p className="text-[32px] font-[700] group-hover:text-white">
                    {item.price}
                  </p>
                  <span className="text-[20px] group-hover:text-white text-[#AF1FFC] capitalize">
                    {item.duration}
                  </span>
                  <p className="border w-full"></p>
                  {item.features.map((items, i) => (
                    <p key={i} className="text-[16px] group-hover:text-white">
                      {items.feature}
                    </p>
                  ))}
                  <button
                    onClick={() => handleSubscribe(item)}
                    className="w-[164px] group-hover:text-[#AF1FFC] group-hover:from-[#fff] group-hover:to-[#fff] mt-5 text-white h-[49px] bg-gradient-to-r to-[#FF5B84] from-[#4254FF] rounded-full"
                    // disabled
                  >
                    Start For Free
                  </button>
                </div>}
              </div>
            ))} */}
          </div>
        </div>
      </div>
      {/* {modal && (
        <RegisterModal
          modal={modal}
          setModal={setModal}
          toggleModal={toggleModal}
          selectedPlan={selectedPlan}
          isYearlyBilling={isYearlyBilling}
          createCheckOutSession={(e) => createCheckOutSession(e)}
        />
      )} */}
    </div>
  );
};

export default Pricing;
