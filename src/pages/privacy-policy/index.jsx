import Analyze from "@/components/analyze/Analyze";
import Audience from "@/components/analyze/Audience";
import Authentic from "@/components/analyze/Authentic";
import Content from "@/components/analyze/Content";
import Fake from "@/components/analyze/Fake";
import Track from "@/components/analyze/Track";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-100vw flex justify-center">
      <div className=" w-[80%] bg-white py-5 px-5 rounded-[10px]">
        <h3 className="text-[32px] font-[600] text-[#081840]">
          {`  Privacy Policy`}
        </h3>
        <p className="py-5">
          <b>1. General </b>
          <br />
          {` We, at Infulent, are committed to protecting your privacy. We have prepared this Privacy Policy to describe our practices regarding the personal data we collect from users of our website.
 `}
          <br />
          {`By using the Services, users consent to the collection and use of their Personal Data by us. You also represent to us that you have any and all authorizations necessary to use these Services, including using them to process Personal Data. We collect and use the information you provide to us, including information obtained from your use of the Services. Also, we may use the information that we collect for our internal purposes to develop, tune, enhance, and improve our Services, and for advertising and marketing consistent with this Privacy Policy.`}{" "}
        </p>
        <p className="py-3">
          <b>2. Information We Collect </b>
          <br />
          <b>2.1. Information You Provide</b>
          
          {`You provide us information about yourself – Your Full Name, Username, E-mail Address and phone number. If you correspond with us by e-mail, we may retain the content of your e-mail messages, your e-mail address, and our responses. Additionally, we store information about users’ contacts when users manually enter contact e-mail addresses or transfer contact information from other online social networks. We also collect general information about your use of our services. `}{" "}
        </p>
        <p className="py-3">
          <b>
            2.2. Information We Collect Automatically When You Use Our Services
          </b>
          <br />
          {`When you access or use our Services, we automatically collect information about you, including: `}{" "}
        </p>
        <p className="py-3">
          <b>Usage Information: </b>
          {` If you choose to post messages on our message boards, online/offline chats, or other message areas or leave feedback for other users, we retain this information as necessary to resolve disputes, provide customer support, and troubleshoot problems as permitted by law. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities on the Website, we may collect such information into a file specific to you. `}{" "}
        </p>
        <p>
          <b className="py-3">Log Information: </b>
          {` We log information about your use of our Website, including your browser type and language, access times, pages viewed, your IP address, and the Website you viewed before navigating to our Website.`}
        </p>
        {/* {h */}
        <p className="py-3">
          <b >Location Information: </b>
          {`With your consent, we may collect information about the location of your device to facilitate your use of certain features of our Services.`}
        </p>
        <p className="py-3">
          <b >
            Information Collected by Cookies and Other Tracking Technologies:{" "}
          </b>
          {` We use various technologies to collect information, and this may include sending cookies to you with your consent. A "cookie" is a small data file transferred to your computer’s hard drive that allows a Website to respond to you as an individual, gathering and remembering information about your preferences in order to tailor its operation to your needs, likes, and dislikes. `}
        </p>
        <p className="py-3">
          <b >3. How We Use Your Information</b> <br />
          {` We use the personal information we collect to fulfill your requests for services, improve our services, contact you, conduct research, and provide anonymous reporting for internal and external clients.`}
          <br />
          {`By providing us your e-mail address, you consent to us using the e-mail address to send you our Website and services related notices, including any notices required by law, in lieu of communication by postal mail. You also agree that we may send notifications of activity on our Website to the e-mail address you give us, in accordance with any applicable privacy settings. We may use your e-mail address to send you other messages, such as newsletters, changes to our features, new services, events, or other information. If you do not want to receive optional e-mail messages, you may modify your settings to opt out.`}{" "}
        </p>
        <br />
        {`Our settings may also allow you to adjust your communications preferences. If you do not wish to receive promotional email messages from us, you may opt out by following the unsubscribe instructions in those emails. If you opt out, you will still receive non-promotional emails from us about our Services.`}{" "}
        <p className="py-3">
          <b >4. How We Share Your Information</b> <br />
          <b >{`Business Providers; Unaffiliated Businesses:`}</b>
          {` At times, we may provide products, services, or offerings through our Services in cooperation with an unaffiliated third party. We may share personally identifiable information that you provide in connection with any such products, services, or offerings with the unaffiliated third party(ies) involved in your particular product, service, or offering.`}
        </p>
        <p className="py-3">
          <b >Third-Party Service Providers: </b>
          {` We employ other companies and individuals to perform functions on our behalf. Examples may include providing market assistance, providing search results and links (including paid listings and links), processing credit card payments, and providing customer service. In connection with their performance of functions on our behalf, we may share personally identifiable information with such companies and individuals as needed for them to perform their functions, but we do not permit such entities and individuals to use personally identifiable information for other purposes.`}
        </p>
        <p className="py-3">
          <b >Third-Party Promotions: </b>
          {`  We may send offers to selected groups of customers on behalf of unaffiliated businesses that want to market their products or services to you. As part of these promotional offers, we may sell or disclose certain of your personally identifiable information to such unaffiliated businesses.`}
        </p>
        <p className="py-3">
          <b >In-House Promotions: </b>
          {` We may, on occasion, combine information we receive through our Services with outside records to enhance our ability to market our products and services that may be of interest to you.`}
        </p>
        <p className="py-3">
          <b > Business Transfers: </b>
          {`As our businesses continue to evolve, we might sell one or more of our companies, subsidiaries, or business units. In such transactions, personally identifiable information generally is one of the transferred business assets.`}
        </p>
        <p className="py-3">
          <b >Protection of Our Services and Others: </b>
          {`  We reserve the right to release personally identifiable information to unaffiliated third parties when we believe its release is appropriate to comply with the law, enforce our Terms and Conditions and other agreements, or protect the rights, property, or safety of Trader Interactive, our users, or others.`}
        </p>
        <p className="py-3">
          <b >With Your Consent: </b>
          {` Other than as set out above, you will receive notice and have the opportunity to withhold consent when personally identifiable information about you might be shared with unaffiliated third parties.`}
        </p>
        <p className="py-3">
          <b >User Submissions: </b>
          {` If you participate in any online forum/communities, chat sessions, and/or blogs, or otherwise post in any user forums, on the Website, you should be aware that the information you provide there will be made broadly available to others, and could be used to contact you, send you unsolicited messages, or for purposes neither Trader Interactive nor you have control over. Also, please recognize that individual forums and chat rooms may have additional rules and conditions. Each participant's opinion on a forum or chat room is his or her own and should not be considered as reflecting the opinion of Trader Interactive.`}
        </p>
        <p className="py-3">
          <b >External Links: </b>
          {` If any part of the Website links you to other websites, those external websites do not operate under this Privacy Policy. We recommend that you examine the privacy statements posted on those other websites to understand their procedures for collecting, using, and disclosing personal information.`}
        </p>
        {/* jjjj */}
        <p className="py-3">
          <b >
            5. Ensuring Information Is Accurate and Up-to-Date{" "}
          </b>
          <br />
          {`We encourage you to review, update, and correct the personal information that we maintain about you, and you may request that we delete personal information about you that is inaccurate, incomplete, or irrelevant for legitimate purposes, or is being processed in a way which infringes any applicable legal requirements.`}
          <br />
          {`Please note that we may need to retain certain information for recordkeeping purposes, to complete any transactions that you began prior to your request, or for other purposes as required or permitted by applicable law.`}{" "}
        </p>
        <p className="py-3"> 
          <b >6. How We Protect Your Information</b>
          <br />
          {`
We take reasonable precautions to protect your information and protect it from unauthorized access. However, no method of transmission over the Internet or electronic storage is completely secure, so we cannot guarantee its absolute security.
`}
        </p>
        <p className="py-3">
          <b >7. Your Choices About Your Information </b>
          <br />
          <b >7.1. Email Communications</b>
          
          {` 

We may periodically send you free newsletters and e-mails that directly promote our Services. When you receive newsletters or promotional communications from us, you may indicate a preference to stop receiving further communications from us and you will have the opportunity to "opt-out" by following the unsubscribe instructions provided in the e-mail you receive or by contacting us directly. Despite your indicated e-mail preferences, we may send you service-related communications, including notices of any updates to our Terms and Conditions or Privacy Policy.
`}
        </p>
        <p className="py-3">
          <b > 7.2. Storing Personal Data </b>
          {`
We keep your personal data for as long as it is necessary for the purposes for which it was collected. The exact period of data retention may vary depending on the purpose and legal requirements.
`}
        </p>
        <p className="py-3">
          <b > 7.2. Storing Personal Data </b>
          {`
We keep your personal data for as long as it is necessary for the purposes for which it was collected. The exact period of data retention may vary depending on the purpose and legal requirements.
`}
        </p>
        <p className="py-3">
          <b > 7.3. Children's Privacy </b>
          {`

We do not knowingly collect personal information from children under 13. If we learn that we have collected the personal information of a child under 13, we will take steps to delete the information as soon as possible.
`}
        </p>
        <p className="py-3">
          <b > 7.4. Merger and Acquisitions </b>
          {`
In the event that we are acquired by or merged with a third-party entity, we reserve the right to transfer or assign the information we have collected from our users as part of such merger, acquisition, sale, or other change of control.
`}
        </p>
        <p className="py-3">
          <b > 7.5. Links to Third-Party Websites </b>
          {`
Our Services may contain links to third-party websites. If you click on a third-party link, you will be directed to that third-party's website. We strongly advise you to review the Privacy Policy of every website you visit.
`}
        </p>
        <p className="py-3">
          <b > 7.6. Notification Procedures </b>
          {`

It is our policy to provide notifications, whether such notifications are required by law or are for marketing or other business-related purposes, to you via e-mail, written or hard copy notice, or through conspicuous posting of such notice on the Website, as determined by us in our sole discretion. We reserve the right to determine the form and means of providing notifications to you.
`}
        </p>
        <p className="py-3">
          <b > 7.7. Opting Out of Information Sharing </b>
          {`

You may opt out of receiving promotional messages from us by following the instructions in those messages. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.
`}
        </p>
        <p className="py-3">
          <b > 7.8. Phishing or False Emails </b>
          {`

If you receive an unsolicited email that appears to be from us or one of our members that requests personal information (such as your credit card, login, or password), or that asks you to verify or confirm your account or other personal information by clicking on a link, that email was likely to have been sent by someone trying to unlawfully obtain your information, sometimes referred to as a "phisher" or "spoofer." We do not ask for this type of information in an email. Do not provide the information or click on the link. Please contact us at the address below if you get an email like this.
`}
        </p>
        <p className="py-3">
          <b > 8. Changes to Our Privacy Policy </b> <br/>
          {`

We reserve the right to update or change our Privacy Policy at any time. Your continued use of the Services after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
`}
        </p>
        <p className="py-3">
          <b > 9. Collection of Information by Third-Party Websites, Services, Ad Servers, and Sponsors</b> <br/>
          {`

Our Services may contain links to other websites whose information practices may be different than ours. You should consult the other sites' privacy notices as we have no control over information that is submitted to, or collected by, these third parties.
`}
        </p>
        <p className="py-3">
          <b > 10. Breach of Privacy Policy </b> <br/>
          {`

If you feel that there has been a breach of this Privacy Policy, please contact us using the contact information below.
`}
        </p>
        <p className="py-3">
          <b >11. No Reservations</b> <br/>
          {`

This Privacy Policy and any rights and licenses granted hereunder may not be transferred or assigned by you but may be assigned by us without restriction.
`}
        </p>
        <p className="py-3">
          <b > 12. No Conflict </b> <br/>
          {`

This Privacy Policy is the entire agreement between the parties and supersedes all previous agreements and understandings between the parties, whether oral or written.
`}
        </p>
        <p className="py-3">
          <b > 13. Contact Us </b> <br/>
          {`

If you have any questions about this Privacy Policy, please contact us at contact@infulent.ca 
`}
        </p>
      </div>
    </div>
  );
};

export default index;
