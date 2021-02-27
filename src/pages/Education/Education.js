import React from "react";
import Card from "../../components/Card/Card";
import MainVideo from "../../components/MainVideo/Mainvideo";
import "./Education.css";

const edus = [
  {
    img: "/images/usc.jpg",
    title: "Master's Degree on Computer Science",
    description: " GPA: 3.73/4.0",
    detail:
      "I finished my Master's Degree on Computer Science from University of Southern California on December 2020. During my graduate school year, I gained a lot of professional skills as well as great English spoken ability and collaboration skills while working on team projects with friends and classmates. I feel honorable and enjoyable for my experience in USC. It provides me with so much unforgettable memories. Most importantly, I found my love here.",
  },
  {
    img: "/images/lzu.jpeg",
    title: "Bachelor's Degree on Computer Science",
    description: " GPA: 4.65/5.0",
    detail:
      "I received my Bachelor's Degree on Computer Science from Lanzhou University on December 2020. In my undergraduate study, I built a solid foundation wiht the mentorship of dear lecturers and professors. Thanks to my undergrad univeristy, I went out of my sweet home town and learnt how to make friends with strangers and embrace people from different cultural backgrounds.",
  },
];

function Education() {
  return (
    <div className="education">
      <MainVideo />
      <h1 className="header">Education</h1>
      <div className="content">
        {edus.map((edu) => {
          return (
            <Card img={edu.img} key={edu.title}>
              <div>
                <div className="title">{edu.title}</div>
                <div className="description">
                  <i className="fas fa-pen"></i>
                  {edu.description}
                </div>
                <div className="detail">{edu.detail}</div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// function Education() {
//   return (
//     <div className="education">
//       <MainVideo />
//       <h1 className="header">Education</h1>
//       <br />
//       <div className="content">
//         <div className="education_card">
//           <img src="/images/usc.jpg" alt="" className="card_img" />
//           <div>
//             <div className="title">Master's Degree on Computer Science</div>
//             <div className="description">
//               <i class="fas fa-pen"></i> GPA: 3.73/4.0
//             </div>
//           </div>
//           <div className="detail">
//             I finished my Master's Degree on Computer Science from University of
//             Southern California on December 2020. During my graduate school
//             year, I gained a lot of professional skills as well as great English
//             spoken ability and collaboration skills while working on team
//             projects with friends and classmates. I feel honorable and enjoyable
//             for my experience in USC. It provides me with so much unforgettable
//             memories. Most importantly, I found my love here.
//           </div>
//         </div>
//         <div className={"education_card"}>
//           <img src="/images/lzu.jpeg" alt="" className="card_img" />
//           <div>
//             <div className="title">Bachelor's Degree on Computer Science</div>
//             <div className="description">
//               <i class="fas fa-pen"></i> GPA: 4.65/5.0
//             </div>
//           </div>
//           <div className="detail">
//             I received my Bachelor's Degree on Computer Science from Lanzhou
//             University on December 2020. In my undergraduate study, I built a
//             solid foundation wiht the mentorship of dear lecturers and
//             professors. Thanks to my undergrad univeristy, I went out of my
//             sweet home town and learnt how to make friends with strangers and
//             embrace people from different cultural backgrounds.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Education;
