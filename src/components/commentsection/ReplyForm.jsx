import React, { useState } from "react";


const ReplyForm = () => {
    const [formData, setFormData] = useState({
        yourName: "",
        email: "",
        website: "",
        comment: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: fieldValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            yourName: "",
            email: "",
            website: "",
            comment: "",
            rememberMe: false,
        });
    };

    return (
        <div className="w-full px-4 sm:px-6 md:px-8 ">
            <h2 className={`text-[32px] font-[600] text-[#081840]`}>Leave a Reply</h2>
            <p className="text-[16px] font-[400] mb-5">
                Your email address will not be published. Required fields are marked *
            </p>
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            id="yourName"
                            name="yourName"
                            placeholder="Your Name"
                            value={formData.yourName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 rounded-[10px] focus:outline-none py-3 bg-[#E2EEF8]  text-[16px]"
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 rounded-[10px] focus:outline-none py-3 bg-[#E2EEF8]  text-[16px]"
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="url"
                            id="website"
                            name="website"
                            placeholder="Website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-4 rounded-[10px] focus:outline-none py-3 bg-[#E2EEF8]  text-[16px]"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <textarea
                        id="comment"
                        name="comment"
                        placeholder="Comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 rounded-[10px] focus:outline-none py-3 bg-[#E2EEF8]  text-[16px] resize-none"
                    />
                </div>
                <div className="mt-4 flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="mr-2 w-[20px] h-[20px]"
                    />
                    <label htmlFor="rememberMe" className="text-[18px]">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>
                <div className="mt-6">
                    <button type="submit" style={{ background: "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)", boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)" }}className="font-[400] text-[18px]  w-[163px] h-[49px] text-white rounded-full  ">
                    Post Comment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReplyForm;
