import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai"

export function Contact() {

    const iconList = [
        {
            icon: <AiOutlineMail />,
            link: `mailto: sukit.bunsiri@gmail.com`
        },
        {
            icon: <VscGithub />,
            link: `https://github.com/sukitb`
        },
        {
            icon: <AiFillLinkedin />,
            link: `https://www.linkedin.com/in/sukit-bunsiri`
        }
    ]

    const Contact = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;

        @media screen and (max-width: 768px) {
        padding: 0px;
        
        height: auto;
      }
    `

    const Icon = styled.div`
        display: flex;
        justify-content: center;
        margin: 50px;

        & svg {
            width: 75px;
            height: 75px;
            padding: 0px 25px;
            fill: #B9BBB3;
            transition: fill .3s linear;

        &:hover {
                fill: #FF7B72;
            }
        }
    `

    return (
        <Contact>
            <h2 className="highlight">CONTACT</h2>
            <h3>Reach me on</h3>
            <Icon>
                {iconList.map(({ icon, link }) => (
                    <a target="_blank" href={link}>{icon}</a>
                ))}
            </Icon>
        </Contact>
    )
}