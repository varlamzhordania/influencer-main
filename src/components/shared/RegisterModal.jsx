import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const RegisterModal = ({
  modal,
  setModal,
  toggleModal,
  selectedPlan,
  isYearlyBilling,
  createCheckOutSession,
}) => {
  const { login, signUp, user } = useAuth();
  const [active, setActive] = useState("Login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    if (active === "Login") {
      const res = await login(userData.email, userData.password);
      if (!res.isSuccess) {
        console.log("res data", res);
        setMessage(res?.message)
      }
      createCheckOutSession(selectedPlan);
    } else {
      await signUp(userData);
      createCheckOutSession(selectedPlan);
    }
    setLoading(false);
  };

  return (
    <>
      {modal && (
        <div className="modal z-50">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h1 className="text-2xl font-bold">{active} now</h1>
            {message === "" ? null : (
              <p className="text-red-500 font-medium text-center mt-5">{message}</p>
            )}
            {active === "Register" ? (
              <form className=" py-4">
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 space-x-2 w-full">
                    <div>
                      <label className="text-[16px] mb-4" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Doejohn78@gmail.com"
                        // value={formData.firstName}
                        className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="text-[16px] mb-4" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        type="lastName"
                        id="lastName"
                        name="lastName"
                        placeholder="Doejohn78@gmail.com"
                        // value={formData.lastName}
                        className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[16px] mb-4" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Doejohn78@gmail.com"
                      // value={formData.email}
                      className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="text-[16px] mb-4"
                      htmlFor="createPassword"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="createPassword"
                      placeholder=". . . . ."
                      name="password"
                      // value={formData.password}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          password: e.target.value,
                        })
                      }
                      className=" text-xs font-medium text-[16px] mt-3 w-full border border-[#A4CCEC] h-[50px] px-4 py-2 rounded focus:border bg-[#F3FAFF] focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF] transition-colors"
                    />
                  </div>
                  <button
                    style={{
                      background:
                        "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                      boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                      opacity: loading ? "50%" : "100%",
                    }}
                    onClick={() => handleSubmit()}
                    className="font-[400] text-[16px] z-20  w-full mt-5 h-[49px] text-white rounded-full"
                    disabled={loading}
                  >
                    {loading ? "Please wait..." : "Register"}
                  </button>
                  <div className="flex items-center justify-center space-x-1">
                    <span>Already have an account?</span>
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setActive("Login")}
                    >
                      Login
                    </span>
                  </div>
                </div>
              </form>
            ) : (
              <form className=" py-4">
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="text-[16px] mb-4" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Doejohn78@gmail.com"
                      // value={formData.email}
                      className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <label
                      className="text-[16px] mb-4"
                      htmlFor="createPassword"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="createPassword"
                      placeholder=". . . . ."
                      name="password"
                      // value={formData.password}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          password: e.target.value,
                        })
                      }
                      className=" text-xs font-medium text-[16px] mt-3 w-full border border-[#A4CCEC] h-[50px] px-4 py-2 rounded focus:border bg-[#F3FAFF] focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF] transition-colors"
                    />
                  </div>
                  <button
                    style={{
                      background:
                        "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                      boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                      opacity: loading ? "50%" : "100%",
                    }}
                    onClick={() => handleSubmit()}
                    className="font-[400] text-[16px] z-20  w-full mt-5 h-[49px] text-white rounded-full"
                    disabled={loading}
                  >
                    {loading ? "Please wait..." : "Login"}
                  </button>
                  <div className="flex items-center justify-center space-x-1">
                    <span>Don't have an account?</span>
                    <span
                      className="text-blue-500 cursor-pointer"
                      onClick={() => setActive("Register")}
                    >
                      Register
                    </span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
