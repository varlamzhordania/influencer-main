import { useRouter } from "next/router";
import blogsData2 from "../../data/blogsData2";
import CommentsSection from "../../components/commentsection/CommentSection";
import { Work_Sans } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import { HiMiniCalendar } from "react-icons/hi2";

function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;
  // console.log(id);

  const blogId = parseInt(id);
  const blog = blogsData2.find((blog) => blog.id === parseInt(id));
  const blogIndex = blogsData2.findIndex((blog) => blog.id === blogId);

  const handlePrevBlog = () => {
    if (blogIndex > 0) {
      const prevBlogId = blogsData2[blogIndex - 1].id;
      router.push(`/blogs/${prevBlogId}`);
    }
  };

  const handleNextBlog = () => {
    if (blogIndex < blogsData2.length - 1) {
      const nextBlogId = blogsData2[blogIndex + 1].id;
      router.push(`/blogs/${nextBlogId}`);
    }
  };
  const tags = [
    {
      btn: "tiktok",
    },
    {
      btn: "Social",
    },
    {
      btn: "Facebook",
    },
    {
      btn: "Ship",
    },
    {
      btn: "Instagram",
    },
    {
      btn: "tiktok",
    },
    {
      btn: "Social",
    },
    {
      btn: "Facebook",
    },
  ];
  return (
    <div>
      <main className="w-[95%] mx-auto md:w-full h-full my-[3rem]  flex flex-col items-center">
        {blog && (
          <>
            <div
              className="border-[3px] max-w-screen-xl mx-auto border-[#ff5b8454] rounded-[22px] w-full h-[266px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(271deg, rgba(66, 84, 255, 0.26) 11.34%, rgba(9, 183, 255, 0.26) 46.82%, rgba(255, 91, 132, 0.26) 73.09%, rgba(66, 84, 255, 0.26) 107.54%)",
              }}
            >
              <h1 className="text-[40px] font-[700]">Blog Detail</h1>
            </div>
            <div className="flex md:flex-row flex-col gap-7 justify-center items-center pb-3 mt-10">
              <button className="bg-[#af1ffc] text-white w-[216px] h-[49px] rounded-md font-[500]">
                {blog.subTitle}
              </button>
              <div className="flex items-center gap-3">
                <HiMiniCalendar size={22} className="text-[#777] " />
                <p className="text-[#777]">{blog.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z"
                    stroke="#777777"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z"
                    stroke="#777777"
                    stroke-width="2"
                  />
                </svg>
                <p className="text-[#777]">{blog.author}</p>
              </div>
            </div>
            <div className="my-5 ml-3 mr-5 smd:text-[20px] lg:text-[27px] text-[24px] text-center font-medium">
              {blog.title}
            </div>

            <div
              className="md:w-[925px] w-full bg-white rounded-[10px]"
              style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.12)" }}
            >
              <img
                src={blog.image}
                alt=""
                width={1920}
                height={1080}
                className="w-full md:w-[925px] object-cover md:h-[495px] rounded-t-[10px]"
              />
              <div className=" p-5 md:p-8">
                <p>
                  {blog.content}
                  <br />
                  {blog.content}
                  <br />
                  {blog.content}
                </p>
              </div>
              <div className="bg-[#4254ff0f] flex gap-5 justify-start items-center h-[112px] px-5 mx-5 rounded-[10px] my-5">
                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="36"
              viewBox="0 0 20 36"
                    fill="none"
                  >
                    <path
                      d="M0 0H19.9V19.92L11.92 35.88H2L9.94 19.92H0V0Z"
                      fill="#4254FF"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="36"
                    viewBox="0 0 20 36"
                    fill="none"
                  >
                    <path
                      d="M0 0H19.9V19.92L11.92 35.88H2L9.94 19.92H0V0Z"
                      fill="#4254FF"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm md:text-[18px]">{blog.content}</p>
                </div>
              </div>

              <div className="md:mx-8 px-5 md:px-0 pb-10">
                <h3 className="text-[32px] font-[600] text-[#081840]">
                  Why Choose Our Services
                </h3>
                <p className="py-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex justify-center items-center gap-5 md:flex-row flex-col">
                  <img
                    src={"/images/blogd1.jpeg"}
                    alt="img"
                    className="w-[320px] md:w-[420px] rounded-md h-[254px] object-cover"
                    width={1080}
                    height={1080}
                  />
                  <img
                    src={"/images/blogd2.jpeg"}
                    alt="img"
                    className="w-[320px] md:w-[420px] rounded-md h-[254px] object-cover"
                    width={1080}
                    height={1080}
                  />
                </div>
                <div>
                  <ul className="flex flex-col gap-3 list-disc pt-5 pl-5">
                    <li>
                      So we came up with the idea that instead of limiting the
                      lab to a restricted area of ​​the building
                    </li>
                    <li>
                      So we came up with the idea that instead of limiting the
                      lab to a restricted area of ​​the building
                    </li>
                    <li>
                      So we came up with the idea that instead of limiting the
                      lab to a restricted area of ​​the building
                    </li>
                    <li>
                      So we came up with the idea that instead of limiting the
                      lab to a restricted area of ​​the building
                    </li>
                  </ul>
                  <p className="pt-5 pr-5">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                </div>
                <div className="flex flex-wrap w-full gap-5 mt-5">
                  {tags.map((item) => {
                    return (
                      <button
                        className="bg-[#af1ffc14] rounded-[10px] py-3 px-3"
                        style={{
                          boxShadow: "0px 4px 66px 0px rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        {item.btn}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* next previous bar  */}
            <div
              className="md:w-[925px] w-full bg-white rounded-[10px] mt-10"
              style={{ boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="p-7 hidden md:flex justify-between">
                <div className="flex gap-5">
                  <img
                    src={
                      blogIndex > 0
                        ? blogsData2[blogIndex - 1].image
                        : blogsData2[blogIndex].image
                    }
                    alt=""
                    width={1080}
                    height={1080}
                    className="w-[89px] h-[68px] object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <button
                      onClick={handlePrevBlog}
                      disabled={blogIndex === 0}
                      className={` rounded focus:outline-none text-left font-medium w-20  ${
                        blogIndex === 0
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-[#1E7FCB]"
                      }`}
                    >
                      Previous
                    </button>
                    <p className={`font-[600]  w-[200px] text-left `}>
                      {blogsData2[blogIndex].title}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <button
                      onClick={handleNextBlog}
                      disabled={blogIndex === blogsData2.length - 1}
                      className={`rounded focus:outline-none font-medium text-right  ${
                        blogIndex === blogsData2.length - 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-[#1E7FCB]"
                      }`}
                    >
                      Next
                    </button>

                    <p className={`font-[600] w-[200px] text-right `}>
                      {blogsData2[blogIndex].title}
                    </p>
                  </div>
                  <img
                    src={
                      blogIndex + 1 < blogsData2.length
                        ? blogsData2[blogIndex + 1].image
                        : blogsData2[blogIndex].image
                    }
                    alt=""
                    width={1080}
                    height={1080}
                    className="w-[89px] h-[68px] object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            {/*  */}

            <CommentsSection
              hide={false}
              wrapperStyles="md:w-[925px] my-10 px-2 md:px-5 py-5 h-full rounded-[10px] shadow-md flex flex-col overflow-hidden bg-white"
              comments={blog.comments}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default BlogDetails;
