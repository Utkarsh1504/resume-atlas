/* eslint-disable react/prop-types */
import ContentCard from "../contentCard/ContentCard";
import styles from "./resume-content.module.css";
import { MdClose } from "react-icons/md";
import {
  FaAddressCard,
  FaPuzzlePiece,
  FaFolderOpen,
  FaBookOpen,
  FaHouseUser,
  FaTrophy,
} from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";

function ResumeContent({getIcon, getTitle, setShowCard, setShowModal }) {
  const contents = [
    {
      title: "Profile",
      desc: "Make a great first impression by presenting yourself in a few sentences.",
      icon: FaAddressCard,
    },
    {
      title: "Education",
      desc: "Showcase your academic background and achievements.",
      icon: MdSchool,
    },
    {
      title: "Experiences",
      desc: "Highlight your work history and relevant professional experiences.",
      icon: MdWork,
    },
    {
      title: "Skills",
      desc: "List your technical and transferable skills.",
      icon: GiSkills,
    },
    {
      title: "Certifications",
      desc: "Include your professional certifications and training courses.",
      icon: PiCertificateFill,
    },
    {
      title: "Projects",
      desc: "Highlight notable projects or assignments you have completed.",
      icon: FaFolderOpen,
    },
    {
      title: "Extra Curricular",
      desc: "Showcase your involvement in extracurricular activities or hobbies.",
      icon: FaBookOpen,
    },
    {
      title: "Organization",
      desc: "Highlight your membership in professional organizations or associations.",
      icon: FaHouseUser,
    },
    {
      title: "Accomplishments",
      desc: "Showcase your recognition, awards, or notable achievements.",
      icon: FaTrophy,
    },
    {
      title: "Custom",
      desc: "Add personalized content or sections based on your specific needs.",
      icon: FaPuzzlePiece,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top_container}>
        <h1 className={styles.heading}>Add Content</h1>
        <button
          className={styles.close_btn}
          onClick={() => setShowModal(false)}
        >
          <MdClose />
        </button>
      </div>
      <div className={styles.content_cards}>
        {contents.map((content, index) => (
          <ContentCard
            getIcon={getIcon}
            getTitle={getTitle}
            setShowCard={setShowCard}
          setShowModal={setShowModal}
            {...content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ResumeContent;
