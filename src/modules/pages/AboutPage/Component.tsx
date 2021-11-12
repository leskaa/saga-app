import React from 'react';
import { Typography, Layout, Divider } from 'antd';
import './about.css';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../../Logos/SagaBlack2Svg.svg';

const { Content } = Layout;
const { Paragraph, Title } = Typography;

function AboutPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Content className="about-page-container">
      <LogoSvg
        id="logo"
        style={{
          width: '10em',
          height: '5em',
          margin: '1em auto',
          display: 'block',
        }}
        onClick={handleLogoClick}
      />
      <Typography>
        <Divider orientation="left">
          <Title className="title" level={2}>
            {' '}
            We are bringing discovery and excitement into education with Saga.{' '}
          </Title>
        </Divider>
        <Paragraph className="paragraph-container">
          It&apos;s not about making a platform where students can succeed,
          It&apos;s about making a platform that makes students want to succeed.
          Our goal with Saga is to excite students about their learning and
          reward them for their hard work through a gamified online learning
          platform.
        </Paragraph>
        <br />
        <Divider orientation="left">
          <Title className="title" level={3}>
            {' '}
            What is Gamification?{' '}
          </Title>
        </Divider>
        <Paragraph className="paragraph-container">
          The Miriam-Webster dictionary defines gamification as ‘the process of
          adding games or gamelike elements to something (such as a task) as to
          encourage participation’. One of the things that motivates us to
          continue playing a game, no matter how hard the challenge, is the
          knowledge that success is attainable, and that there is a reward for
          that attainable success. Some people will fight a boss in Dark Souls
          for hours, over and over because they are excited to get past this
          challenge and into the next area. Some people will do the tedious work
          of getting every single achievement in a game because they want to see
          that 100% trophy on their profile. In her book, Reality is Broken,
          Jane Mcgonigal discusses a game called Chore Wars that rewards players
          with experience points and virtual currency for completing chores
          around the house, and that virtual currency could then be converted
          into customized real-world rewards such as “allowances”, “coffee runs
          for roommates”, or “to bid on what music to play in the car”. This
          idea of rewarding students for the tasks they complete is what we
          believe to be the first step in improving education, and what we are
          trying to achieve with Saga.
        </Paragraph>
        <Paragraph className="paragraph-container">
          Gamification of education is a commonly discussed idea, but as
          students who have gone through over 15 years of schooling, we felt as
          though schools could really do better in this area. We have seen
          educational games, but we believe that the concepts of games and
          gameplay should be at the core of education. Unfortunately we can’t
          immediately convert the entire education system to be as exciting,
          encouraging, and motivating as a game, but we hope that Saga can help
          educators take the first step into a new and better way of teaching.
        </Paragraph>
        <br />
        <Divider orientation="left">
          <Title className="title" level={3}>
            What is Saga?
          </Title>
        </Divider>
        <Paragraph className="paragraph-container">
          Saga is an online learning management system that serves as a platform
          for teaching and learning between students and teachers. Saga creates
          a new and engaging way for students to interact with their assignments
          by showing their progress in the course on an ‘adventure map’. Each
          assignment is a milestone they complete, and instead of grades,
          students receive stars. These stars accumulate and can be used to
          purchase items from our virtual shop, such as avatars and clothing
          items for avatars. The stars are also added to the growing pile of
          stars for the entire class of students that can translate to
          real-world prizes set by the teacher, such as a pizza party, or a
          movie viewing at the end of the course.
        </Paragraph>
        <br />
        <Divider orientation="left">
          <Title className="title" level={2}>
            Saga is still in beta, so many features are still on the way!{' '}
          </Title>
        </Divider>
        <Paragraph className="paragraph-container">
          Saga was made by Alex Leska, Ethan Nguyen, Marguerite Brugger, and
          Trent Yetzer for the Liquid Hacks 2.0 Hackathon.
        </Paragraph>
        <Divider orientation="left">
          <Title className="title" level={3}>
            Front End
          </Title>
        </Divider>
        <Paragraph className="paragraph-container">
          Languages + Libraries: Typescript, React-Typescript, Ant Design
          Infrastructure: Netlify (Static Site Host)
        </Paragraph>
        <Divider orientation="left">
          <Title className="title" level={3}>
            Back End
          </Title>
        </Divider>
        <Paragraph className="paragraph-container">
          Languages + Libraries: Typescript, Node.js, AdonisJS, MySQL
          Infrastructure: Fly.io (Paas), PlanetScale (Serverless SQL), Google
          Cloud (GMail API), AWS (S3 File Storage)
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default AboutPage;
