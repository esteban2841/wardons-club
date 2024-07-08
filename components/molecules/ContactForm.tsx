'use client'
import styled from 'styled-components'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const ContactFormContainer = styled.form`
    height: 500px;
    width: 650px;
    opacity: .8;
    background-color: #111;
    margin: 10px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;  
    backdrop-filter: blur(10px);
    gap: 20px;
    padding: 20px;
    border-radius: 20px;
    backdrop-filter: blur(12px);
    overflow: hidden;
    @media (max-width: 750px) {
        width: 100%;
    }   
`
const NameFieldContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    box-sizing: border-box;
    .input-form{
        width:100%;
        height: 53px;
        border-radius:10px;
        box-sizing: border-box;
        background-color: rgb(48, 48, 48);
        border: none;
        padding-left: 10px; 
    };
    .input-form::placeholder {
        padding: 15px;
        color: #fff;
    }
`
const EmailSubjectFieldContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display:flex;
    flex-direction: row;
    gap: 30px;
    .email{
        width:49%;
        height: 53px;
        box-sizing: border-box;
        .input-form{
            width:100%;
            box-sizing: border-box;
            border-radius: 10px;
            height: 100%;
            background-color: rgb(48, 48, 48);
            border: none;
            padding-left: 10px; 
        }
        .input-form::placeholder {
            padding: 15px;
            color: #fff;
        }
    }
    .subject{
        width:49%;
        box-sizing: border-box;
        height: 53px;
        .input-form{
            border-radius: 10px;
            box-sizing: border-box;
            width:100%;
            height: 100%;
            background-color: rgb(48, 48, 48);
            border: none;
            padding-left: 10px; 
        }
        .input-form::placeholder {
            padding: 15px;
            color: #fff;
        }
        
    }
`

const MessageFieldContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    display:flex;
    flex-direction: row;
    height: 200px;
    .input-form{
        border-radius: 10px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background-color:  rgb(48, 48, 48);
        border: none;
        padding-left: 10px; 
    }
    .input-form::placeholder {
        padding: 15px;
        color: #fff;
    }
`
const ButtonFieldContainer = styled.div`
    text-transform: uppercase;
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    .send-button{
        width: 327px;
        height: 53px;
        border: 1px solid #6573C3;
        background-color:  #3C4043;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
    }
`

export const ContactForm = () => {

    const form = useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.init({
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
        });
      
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
            form.current
          ) {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current
                ).then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.error(error.text);
            });
            }
    }

    return (
        <ContactFormContainer ref={form} onClick={handleSubmit}>
            <NameFieldContainer className="name-container">
                <input className="input-form" required placeholder="Name:" name="user_name" type="text" />
            </NameFieldContainer>
            <EmailSubjectFieldContainer className="email-subject-container">
                <div className="email">
                    <input className="input-form" required placeholder="Email:" name="user_email" type="email" />

                </div>
                <div className="subject">
                    <input className="input-form" required placeholder="Subject:" name="subject" type="text" />
                    
                </div>
                
            </EmailSubjectFieldContainer>
            <MessageFieldContainer className="message-container">
                <input className="input-form" required placeholder="Message:" name="message" type="text" />
            </MessageFieldContainer>
            <ButtonFieldContainer className="button-container">
                <button type="submit" className="send-button">
                    <h4>
                        Enviar Mensaje

                    </h4>
                </button>
            </ButtonFieldContainer>
        </ContactFormContainer>
    )
}
