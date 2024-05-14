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
    title: "Фулл-стек разработчик",
    firstName: "Таринская",
    LastName: "Татьяна",
    btnText: "Студентка РГПУ им.Герцена",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "года опыта работы разработчиком",
      },
      {
        count: "Java, Spring, Hibernate, React, PostgreSQL",
        text: "Опыт работы с такими технологиями как",
      },
    ],
  },
  skills: {
    subtitle: "ИЗУЧЕННЫЕ ДИСЦИПЛИНЫ",
    skills_content: [
      {
        name: "Программирование",
        para: "Любимый предмет",
        link: 'https://disk.yandex.ru/d/6r3F4Orp2pvErA',
      },
      {
        name: "Базы данных",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/ZwQvrxebywM5hA',
      },
      {
        name: "Анализ данных",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/hidsOk1NGEBFJg',
      },
      {
        name: "Защита информации",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/fB7ifohftQAM3g',
      },
      {
        name: "ИСП",
        para: "Инструментальные средства программирования",
        link: 'https://disk.yandex.ru/d/ogDgbHKduFKCzA',
      },
      {
        name: "Компьютерный практикум",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/ANfSaB7GHFQsgA',
      },
      {
        name: "Серверные веб-технологии",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/CTroJ17De5vA0w',
      },
      {
        name: "ПИТ",
        para: "Прикладные информационные технологии",
        link: 'https://disk.yandex.ru/d/9FwLsjVAxv8eEA',
      },
      {
        name: "Сети и телекоммуникации",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/Y2yLUhcmewB7WQ',
      },
      {
        name: "Языки написания спецификаций",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/4h7fyRacimnODw',
      },
      {
        name: "ИТ-рекрутмент",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/-CPdsajxg1woAg',
      },
      {
        name: "Пакеты прикладных программ",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/9xL9Nup9RTUhhg',
      },
      {
        name: "ИТ в физике",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/CMYWeIClmHZl5Q',
      },
      {
        name: "ИТ в математике",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/kgVAr3BGqIfzeA',
      },
      {
        name: "ИТ-менеджмент",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/YusXqx5HUFWZcQ',
      },
      {
        name: "Иностранный язык",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/_shxa06GkhHVew',
      },
      {
        name: "Информатика",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/xTS8EZPx-0wCxA',
      },
      {
        name: "МИРЦБ",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/l9q-FSEKRk0Ifw',
      },
      {
        name: "НИП",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/eryHxMPysaDvrA',
      },
      {
        name: "ОКА",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/bhBSIjcDtP3QRA',
      },
      {
        name: "Вычислительная математика",
        para: "Lorem ipsum text  dummy",
        link: 'https://disk.yandex.ru/d/Zar8LIAslFi-EQ',
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "МОИ ДОСТИЖЕНИЯ",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "МОЙ ОПЫТ РАБОТЫ",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
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
    subtitle: "ЧЕМ Я ГОРЖУСЬ",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
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
