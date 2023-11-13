import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import ThanksModal from "@/components/shared/ThanksModal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Country } from "country-state-city";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Canada",
    desc: "",
    subject: "",
  });
  let countriesOptions = Country.getAllCountries();
  const [modal, setModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = () => {
    setSubmitting(true);
    emailjs
      .send(
        "service_ndmkmgl",
        "template_edj63lk",
        {
          to_email: "admin@infulent.ca",
          from_email: formData.email,
          reply_to: formData.email,
          name: formData?.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          desc: formData.desc,
          subject: `New Quote - ${formData.subject}`,
        },
        "LQPZ2aH-xknPgt2yI"
      )
      .then(
        (result) => {
          setFormData({
            name: "",
            email: "",
            country: "",
            phone: "",
            desc: "",
            subject: "",
          });
          console.log(result.text);
          console.log("message sent");
          setSubmitting(false);
          toggleModal();
        },
        (error) => {
          console.log(error.text);
          setSubmitting(false);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Influent - Contact us</title>
      </Head>
      <div>
        <div className="w-full">
          <div className="flex justify-center items-center">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="bg-white/60 px-10 py-12 rounded-[20px]">
                <div className="text-center">
                  <h1 className="font-bold text-[32px] pb-2">Let's connect!</h1>
                  <h1 className="font-[500] text-[18px] md:w-[330px] mx-auto mb-5">
                    Hey! Fill in the form to share your thoughts
                  </h1>
                </div>
                <div>
                  <div className="md:w-[400px] py-4">
                    <div className="flex flex-col gap-3">
                      <div>
                        <label className="text-[16px] mb-4" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-[16px] mb-4" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-[16px] mb-4" htmlFor="email">
                          Phone
                        </label>
                        {/* <input
                          type="phone"
                          id="phone"
                          name="phone"
                          placeholder="Your phone no"
                          value={formData.phone}
                          className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        /> */}
                        <PhoneInput
                          defaultCountry="CA"
                          placeholder="Enter phone number"
                          className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                          onChange={(value) => {
                            setFormData({ ...formData, phone: value });
                          }}
                        />
                      </div>
                      <div>
                        <label className="text-[16px] mb-4" htmlFor="email">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          placeholder="Country"
                          value={formData.country}
                          className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              country: e.target.value,
                            })
                          }
                        >
                          {countriesOptions?.map((e) => {
                            return (
                              <option
                                className="bg-white border-b border-b-gray-300"
                                key={e?.name}
                                value={e?.name}
                              >
                                {e?.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label className="text-[16px] mb-4" htmlFor="email">
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-[16px] mb-4" htmlFor="email">
                          Description
                        </label>
                        <textarea
                          rows={6}
                          id="description"
                          name="description"
                          placeholder="Description"
                          value={formData.desc}
                          className="text-xs font-medium text-[16px] mt-3 w-full border border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF] resize-none"
                          onChange={(e) =>
                            setFormData({ ...formData, desc: e.target.value })
                          }
                        />
                      </div>
                      <button
                        style={{
                          background:
                            "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                          boxShadow:
                            "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                        }}
                        type="submit"
                        onClick={() => handleSubmit()}
                        className={`font-[400] text-[16px] z-20  w-full mt-5 h-[49px] text-white rounded-full${
                          submitting ? "cursor-not-allowed" : "cursor-pointer"
                        }`}
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {modal && (
          <ThanksModal
            modal={modal}
            setModal={setModal}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </>
  );
}

export default Login;
