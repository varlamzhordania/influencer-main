import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { DM_Sans } from "next/font/google";
const font = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  // const router = useRouter();

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // try {
  //     //     // const response = await axios.post('/api/login', formData);

  //     //     // if (response.status === 200) {
  //     //     //   console.log('Login successful!');

  //     //     // } else {
  //     //     //   console.log('Login failed!');
  //     //     // }
  //     //   } catch (error) {
  //     //     console.error('Error during login:', error);
  //     //   }

  //     const loginUser = User.find((user) => user.email === formData.email && user.password === formData.password);
  //     if (loginUser) {
  //         login(loginUser)
  //         router.push({
  //             pathname: '/user',
  //             query: { role: loginUser.role },
  //         });
  //     } else {
  //         setError('Invalid username or password');
  //     }

  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };
  return (
    <div className={font.className}>
      <div className="w-full h-full relative overflow-hidden block">
        <div className=" flex justify-center h-[90vh] items-center ">
          <div className="w-full h-full flex flex-col justify-center items-center  ">
            <div className="bg-white/60 px-10 py-12 rounded-[20px]">
              <div className="text-center ">
                <h1 className={`  font-bold text-[32px] pb-2`}>Welcome!</h1>
                <h1
                  className={`  font-[500] text-[18px] md:w-[330px] mx-auto mb-5`}
                >
                  Hey! Enter your details to get sign into your account{" "}
                </h1>
              </div>
              <div></div>
              <div></div>
              <div>
                <form className="md:w-[400px] py-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="text-[16px] mb-4" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Doejohn78@gmail.com"
                        // value={formData.email}
                        className="text-xs font-medium text-[16px] mt-3 w-full border h-[50px] border-[#A4CCEC] bg-[#F3FAFF] px-4 py-2 rounded focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF]"
                        // onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        className="text-[16px] mb-4"
                        htmlFor="createPassword"
                      >
                        Enter Password
                      </label>
                      <input
                        type="password"
                        id="createPassword"
                        placeholder=". . . . ."
                        name="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        className=" text-xs font-medium text-[16px] mt-3 w-full border border-[#A4CCEC] h-[50px] px-4 py-2 rounded focus:border bg-[#F3FAFF] focus:border-[A4CCEC] focus:outline-none focus:bg-[#F3FAFF] transition-colors"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 my-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          className="w-[18px] h-[20px]"
                        />
                        <label
                          htmlFor="rememberMe"
                          className=" text-[14px] text-[#777] "
                        >
                          Remember me!
                        </label>
                      </div>
                      <a href="#" className=" text-[14px] hover:underline ">
                        Forgot password?
                      </a>
                    </div>
                    {/* <div>
                                                {error && <p className="text-red-500 text-xs">{error}</p>}
                                            </div> */}
                    <button
                      style={{
                        background:
                          "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)",
                        boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)",
                      }}
                      onClick={() => router.push("/")}
                      className="font-[400] text-[16px] z-20  w-full mt-5 h-[49px] text-white rounded-full  "
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
