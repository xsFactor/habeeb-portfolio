/* eslint-disable */
import { 
    FaShieldAlt, FaSearch, FaBug, FaUserSecret, FaChalkboardTeacher,
    FaProjectDiagram, FaNetworkWired, FaLaptopCode, FaFileAlt
} from "react-icons/fa";
import { 
    MdSecurity, MdOutlineManageSearch, MdPolicy 
} from "react-icons/md";
import { 
    BsShieldLock, BsGraphUp, BsPeopleFill 
} from "react-icons/bs";
import { 
    GiCyberEye, GiMagnifyingGlass 
} from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";

export const servicesCategories = [
    {
        id: 1,
        category: 'Offensive Security',
        icon: <FaBug />,
        description: 'Proactive security testing to identify and exploit vulnerabilities before attackers do.',
        services: [
            { id: 1, title: 'Red Team Operations', icon: <FaUserSecret /> },
            { id: 2, title: 'Penetration Testing', icon: <FaBug /> },
            { id: 3, title: 'Vulnerability Assessment', icon: <BsShieldLock /> },
            { id: 4, title: 'Social Engineering', icon: <BsPeopleFill /> },
            { id: 5, title: 'Web App Testing', icon: <FaLaptopCode /> },
            { id: 6, title: 'Network Security Testing', icon: <FaNetworkWired /> },
        ]
    },
    {
        id: 2,
        category: 'OSINT & Intelligence',
        icon: <FaSearch />,
        description: 'Open source intelligence gathering and threat profiling using advanced research techniques.',
        services: [
            { id: 1, title: 'OSINT Investigations', icon: <GiMagnifyingGlass /> },
            { id: 2, title: 'Threat Intelligence', icon: <GiCyberEye /> },
            { id: 3, title: 'Digital Footprint Analysis', icon: <MdOutlineManageSearch /> },
            { id: 4, title: 'Person of Interest Research', icon: <FaSearch /> },
            { id: 5, title: 'Dark Web Monitoring', icon: <FaUserSecret /> },
            { id: 6, title: 'Brand Protection', icon: <FaShieldAlt /> },
        ]
    },
    {
        id: 3,
        category: 'Cybercrime Analysis',
        icon: <AiOutlineAudit />,
        description: 'Digital forensics and cybercrime investigation to uncover and document evidence.',
        services: [
            { id: 1, title: 'Digital Forensics', icon: <AiOutlineAudit /> },
            { id: 2, title: 'Incident Response', icon: <MdSecurity /> },
            { id: 3, title: 'Malware Analysis', icon: <FaBug /> },
            { id: 4, title: 'Log Analysis', icon: <BsGraphUp /> },
            { id: 5, title: 'Evidence Collection', icon: <FaFileAlt /> },
            { id: 6, title: 'Threat Hunting', icon: <GiCyberEye /> },
        ]
    },
    {
        id: 4,
        category: 'Security Consulting',
        icon: <MdPolicy />,
        description: 'Strategic security advisory to help organizations build and improve their security posture.',
        services: [
            { id: 1, title: 'Security Policy Development', icon: <MdPolicy /> },
            { id: 2, title: 'Risk Assessment', icon: <BsGraphUp /> },
            { id: 3, title: 'Compliance Advisory', icon: <AiOutlineAudit /> },
            { id: 4, title: 'Security Architecture Review', icon: <FaNetworkWired /> },
            { id: 5, title: 'Vulnerability Management', icon: <BsShieldLock /> },
            { id: 6, title: 'Security Roadmap Planning', icon: <FaProjectDiagram /> },
        ]
    },
    {
        id: 5,
        category: 'Training & Awareness',
        icon: <FaChalkboardTeacher />,
        description: 'Cybersecurity training and awareness programs for individuals and organizations.',
        services: [
            { id: 1, title: 'Security Awareness Training', icon: <FaChalkboardTeacher /> },
            { id: 2, title: 'Phishing Simulation', icon: <FaUserSecret /> },
            { id: 3, title: 'OSINT Training', icon: <FaSearch /> },
            { id: 4, title: 'Penetration Testing Training', icon: <FaBug /> },
            { id: 5, title: 'CTF Coaching', icon: <FaLaptopCode /> },
            { id: 6, title: 'Corporate Workshops', icon: <BsPeopleFill /> },
        ]
    },
]

// Keep for backward compatibility
export const servicesData = []