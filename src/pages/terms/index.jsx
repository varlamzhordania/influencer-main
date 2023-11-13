import Analyze from '@/components/analyze/Analyze'
import Audience from '@/components/analyze/Audience'
import Authentic from '@/components/analyze/Authentic'
import Content from '@/components/analyze/Content'
import Fake from '@/components/analyze/Fake'
import Track from '@/components/analyze/Track'
import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
   <div className='w-100vw flex justify-center'>
   <div className=" w-[80%] bg-white py-5 px-5 rounded-[10px]">
                <h3 className="text-[32px] font-[600] text-[#081840]">
              {`  TERMS OF SERVICE OF INFLUENT .CA (last updated October 25, 2023)`}
                </h3>
                <p className="py-5">
                  <b>1. Acceptance of Terms </b>
               {` Welcome to Influent Inc.'s website. We, Influent Inc., own and operate the website located at https://influent.ca, as well as other affiliated websites and applications. By accessing and using our website or any related services (collectively referred to as the "Site"), you agree to abide by these Terms of Service ("Terms"). When we mention "Influent," "we," "us," or "our," we are referring to Influent Inc., the operator of the Site. When we mention "User," "you," or "your," we are referring to individuals who visit or use the Site.
               `} </p>
                <p className="py-5">
                  <b>2. Modification  </b>
               {`We reserve the right, at our sole discretion, to make changes to the Site, its services, or these Terms without prior notice. If any modifications are made, we will post the updated Terms on the Site, along with the "last updated date." These changes will take effect immediately upon posting. Continued use of the Site or its services after modifications implies your agreement to these updated Terms. We recommend regularly reviewing the Terms for revisions. If you disagree with the modifications, you should cease using the Site and its services. `} </p>
                <p className="py-5">
                  <b>3. Eligibility  </b>
               {`Our Site is intended for individuals who are at least eighteen (18) years old. If you are under eighteen (18) years old, you are not permitted to use the Site or its services. `} </p>
                <p className="py-5">
                  <b>4. About the Site  </b>
               {`Our Site provides access to information and services, offering opportunities to request information, create accounts, subscribe to notifications or newsletters, apply for positions, and engage with us through communication options. By using our Site, you agree to provide accurate, up-to-date information in all your interactions with us and when using our services. `} </p>
               <p>
                <b className="py-5">5. User Affirmations, Conduct, and Use </b>
                {`When you use our Site and services, you affirm and agree to the following:`}
               </p>
                <div>
                  <ul className="flex flex-col gap-3 list-disc pt-5 pl-5">
                    <li>
                    	{`You are at least eighteen (18) years old.`}
                    </li>
                    <li>
                    {`You are responsible for complying with all relevant laws, regulations, and obligations applicable to your use of the Site.`}
                    </li>
                    <li>
                     {`Any content you upload, publish, or transmit through the Site will not infringe on third-party rights, including patents, copyrights, trademarks, trade secrets, and other intellectual property or privacy rights.`}
                    </li>
                    <li>
                   {`You will not engage in unauthorized web scraping, crawling, or automated access of our web pages or services.`}
                    </li>
                    <li>
                 {`Commercial use of the Site is only allowed as expressly permitted in these Terms.`}
                  </li>
                    <li> {`	You will not copy or store Site information for purposes other than those explicitly authorized in these Terms.`}</li>
                 <li>{`You will not disrupt or harm the Site through viruses, bots, harmful code, or similar means.`}</li>
                 <li>{`You will not impersonate others or misrepresent your identity or affiliation.`}</li>
                 <li>{`	You will not access non-public areas of the Site, our computer systems, or third-party systems.`}</li>
                 <li>	You will not circumvent technological measures put in place to protect the Site.</li>
                 <li>You will not encourage or assist others in any of the above actions.</li>
                  </ul>
                  <p className="py-5">                <b >6. Ownership </b>
                {`Our Site and services are protected by copyright and trademark laws in Canada and other countries. You acknowledge that Influent Inc. and its licensors own all rights to the Site and services, including intellectual property rights. You are not permitted to remove, alter, or obscure any copyright, trademark, or proprietary rights notices on the Site.`}
               </p>
               <p className="py-5">
                <b >7. Links </b>
                {`Our Site may contain links to third-party websites or resources. We are not responsible for the availability, accuracy, or content of these external websites or resources. Your use of these external sites or resources is at your own risk.`}
               </p>
               <p className="py-5">
                <b >8. Proprietary Rights Notices </b>
                {`All trademarks, service marks, logos, and trade names associated with Influent Inc. are the property of Influent Inc. Any other trademarks or proprietary designations belong to their respective owners.`}
               </p>
               <p className="py-5">
                <b >9. Termination </b>
                {`We may terminate these Terms or your access to our Site at any time, with or without cause, and with or without prior notice, at our discretion. This termination will not result in any liability to you.`}
               </p>
               <p className="py-5">
                <b >10. Disclaimers </b>
                {`Using our Site and services is at your own risk. We provide them "as is" and "as available," without any warranties, whether express or implied. We explicitly disclaim warranties of merchantability, fitness for a particular purpose, quiet enjoyment, non-infringement, and any other warranties. We do not guarantee that the Site or services will meet your requirements or operate without interruptions.`}
               </p>
               <p className="py-5">
                <b >11. Limitation of Liability </b>
                {`To the fullest extent permitted by law, we and any other party involved in providing the Site or services will not be liable for direct, incidental, special, exemplary, or consequential damages, including but not limited to lost profits, data loss, goodwill loss, service interruptions, computer damage, or personal injury arising from your use of the Site or services.`}
               </p>
               <p className="py-5">
                <b >12. Indemnification  </b>
                {`You agree to defend, indemnify, and hold Influent Inc. and its affiliates, officers, directors, employees, and agents harmless from any losses, claims, liabilities, damages, and expenses, including legal fees, related to your use of the Site, your reliance on it, your violation of these Terms, or your infringement of any third-party rights.`}
               </p>
               <p className="py-5">
                <b >13. Assignment </b>
                {`You may not assign these Terms without our prior written consent. We may assign these Terms at our discretion without any restrictions. These Terms will bind and benefit both Influent Inc. and the User, as well as their successors and permitted assigns.`}
               </p>
               <p className="py-5">
                <b >14. Notices </b>
                {`Any notices or communications required under these Terms will be provided in writing and may be posted on the website or sent via email.`}
               </p>
               <p className="py-5">
                <b >15. Subscription and Renewals  </b>
                {`You are responsible for paying all fees and charges associated with your use of the Site and its content or services. Subscriptions are typically annual and are billed monthly or annually. Sales are final, and annual subscription renewals can be canceled with a 60-day notice before the renewal date.`}
               </p>
               <p className="py-5">
                <b >16. Refund Policy </b>
                {`All fees paid to Influent.ca. are non-refundable unless our dispute resolution team decides otherwise.`}
               </p>
               <p className="py-5">
                <b >17. Governing Law  </b>
                {`These Terms and the Site are governed by and construed in accordance with Canadian laws, regardless of your location.`}
               </p>
               <p className="py-5">
                <b >18. Severability </b>
                {`If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in effect to the fullest extent permitted by law.`}
               </p>
               <p className="py-5">
                <b >19. Feedback and Reporting Misconduct We  </b>
                {`We encourage you to provide feedback and suggestions for improving the Site. Any feedback you provide becomes our exclusive property, and you assign all related rights to us.`}
               </p>
               <p className="py-5">
                <b >20. Entire Agreement </b>
                {`These Terms represent the complete agreement between you and Influent Inc. regarding the Site and supersede any prior agreements.`}
               </p>
                <p className='py-5 italic'>
                Note: In the event of any discrepancies between the English version and translated versions of these Terms, the English version prevails.
                </p>
                </div>
           
              </div>
   </div>
         
  )
}

export default index