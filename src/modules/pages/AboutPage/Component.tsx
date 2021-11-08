import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Select } from 'antd';
import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '../../../Logos/SagaWhiteSvg.svg';
import { InfoCircleOutlined } from '@ant-design/icons';
import { NavigateToRoute } from "../../root/utils";


function AboutPage(): React.ReactElement {
    const navigate = useNavigate();

    function NavigateToRoute(path: string) {
        navigate(path);
    }

    return (
        <React.Fragment>
            <header className="App-header">
                    We are bringing discovery and excitement into education with Saga. 
                    It's not about making a platform where students can succeed, It's about making a platform that makes students want to succeed. 
                    Our goal with Saga is to excite students about their learning and reward them for their hard work through a gamified online learning platform.
                    <br /> <br />
                    What is Gamification? 
                    The Miriam-Webster dictionary defines gamification as ‘the process of adding games or gamelike elements to something (such as a task) as to encourage participation’. 
                    One of the things that motivates us to continue playing a game, no matter how hard the challenge, is the knowledge that success is attainable, and that there is a reward for that attainable success. 
                    Some people will fight a boss in Dark Souls for hours, over and over because they are excited to get past this challenge and into the next area. 
                    Some people will do the tedious work of getting every single achievement in a game because they want to see that 100% trophy on their profile. 
                    In her book, Reality is Broken, Jane Mcgonigal discusses a game called Chore Wars that rewards players with experience points and virtual currency for completing chores around the house, and that virtual currency could then be converted into customized real-world rewards such as “allowances”, “coffee runs for roommates”, or “to bid on what music to play in the car”. 
                    This idea of rewarding students for the tasks they complete is what we believe to be the first step in improving education, and what we are trying to achieve with Saga.
                    <br /> <br />
                    Gamification of education is a commonly discussed idea, but as students who have gone through over 15 years of schooling, we felt as though schools could really do better in this area. 
                    We have seen educational games, but we believe that the concepts of games and gameplay should be at the core of education. 
                    Unfortunately we can’t immediately convert the entire education system to be as exciting, encouraging, and motivating as a game, but we hope that Saga can help educators take the first step into a new and better way of teaching.
                    <br /> <br />
                    <hr />
                    <br /> <br />
                    Saga is an online learning management system that serves as a platform for teaching and learning between students and teachers. 
                    Saga creates a new and engaging way for students to interact with their assignments by showing their progress in the course on an ‘adventure map’. 
                    Each assignment is a milestone they complete, and instead of grades, students receive stars. 
                    These stars accumulate and can be used to purchase items from our virtual shop, such as avatars and clothing items for avatars. 
                    The stars are also added to the growing pile of stars for the entire class of students that can translate to real-world prizes set by the teacher, such as a pizza party, or a movie viewing at the end of the course. 
                    <br /> <br />
                    Saga is still in beta, so many features are still on the way! 
                    <br /> <br />
                    <hr />
                    <br /> <br />
                    Saga was made by Alex Leska, Ethan Nguyen, Marguerite Brugger, and Trent Yetzer for the Liquid Hacks 2.0 Hackathon.
                    <br /> <br />
                    Front End
                    Languages + Libraries: Typescript, React-Typescript, Ant Design
                    Infrastructure: Netlify (Static Site Host)
                    Back End
                    Languages + Libraries: Typescript, Node.js, AdonisJS, MySQL
                    Infrastructure: Fly.io (Paas), PlanetScale (Serverless SQL), Google Cloud (GMail API), AWS (S3 File Storage)
            </header>
        </React.Fragment>
    );
};

export default AboutPage;
