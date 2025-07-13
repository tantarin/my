// import images
import Hero_person from "./assets/images/Hero/me.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import {BsInstagram, BsTelegram} from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Портфолио Java-разработчика",
    firstName: "Таринской",
    LastName: "Татьяны",
    btnText: "преподавателя дисциплин по программированию, а также по подготовке к олимпиадам",
    image: Hero_person,
    hero_content: [
      {
        count: "5+",
        text: "года опыта работы разработчиком",
      },
      {
        count: "Java, Spring, Hibernate, React, PostgreSQL",
        text: "Опыт работы с такими технологиями как",
      },
    ],
  },
  skills: {
    subtitle: "ТЕХНОЛОГИИ И НАВЫКИ",
    skills_content: [
      {
        name: "Java",
        para: "Spring Boot, Spring Security, Spring Data JPA",
        link: '#',
      },
      {
        name: "Frontend",
        para: "React.js, JavaScript ES6+, TypeScript, HTML5/CSS3",
        link: '#',
      },
      {
        name: "Базы данных",
        para: "PostgreSQL, MySQL, Hibernate ORM",
        link: '#',
      },
      {
        name: "Инструменты разработки",
        para: "Git, Docker, Maven, IntelliJ IDEA",
        link: '#',
      },
      {
        name: "Тестирование",
        para: "JUnit, Mockito, Integration Testing",
        link: '#',
      },
      {
        name: "Архитектура",
        para: "REST API, Microservices, MVC Pattern",
        link: '#',
      },
      {
        name: "Преподавание",
        para: "Алгоритмы, структуры данных, подготовка к олимпиадам",
        link: '#',
      },
      {
        name: "Дополнительно",
        para: "Linux, Apache Tomcat, JSON/XML",
        link: '#',
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "МОЯ ДЕЯТЕЛЬНОСТЬ",
    service_content: [
      {
        title: "Backend Разработка",
        para: "Создание надежных серверных приложений на Java с использованием Spring Framework, разработка REST API и интеграция с базами данных",
        logo: services_logo1,
      },
      {
        title: "Преподавание Java",
        para: "Обучение студентов основам программирования на Java, алгоритмам и структурам данных, подготовка к олимпиадам по программированию",
        logo: services_logo2,
      },
      {
        title: "Fullstack Development",
        para: "Разработка полнофункциональных веб-приложений с фронтендом на React.js и бэкендом на Java Spring Boot",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "МОИ ПРОЕКТЫ",
    image: person_project,
    project_content: [
      {
        title: "Spring Boot E-commerce API",
        image: project1,
      },
      {
        title: "React + Java Full-stack App",
        image: project2,
      },
      {
        title: "Учебная система для олимпиад",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "МОИ УВЛЕЧЕНИЯ",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Я играю 2 раза в неделю в сквош и люблю бегать. Я участвовала в РГПУ им. Герцена в соревнованиях по гребле и в студенческом забеге.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Напиши мне",
    subtitle: "Как со мной связаться",
    social_media: [
      {
        text: "tanyatarinsk@gmail.com",
        icon: GrMail,
        link: "mailto:tanyatarinsk@gmail.com",
      },
      {
        text: "+7 900 650 79 63",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "@tania01011",
        icon: BsTelegram,
        link: "https://t.me/tania01011",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
