import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

import GlobalApi from './services/GlobalApi';

function AIChatBot() {
    const [messages, setMessages] = useState([
        {
            message: "Xin chào, tôi có thể giúp gì cho bạn không?",
            sentTime: "just now",
            sender: "AH-Study-AI-Chatbot"
        }
    ]);
    const [loading, setLoading] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            direction: 'outgoing',
            sender: 'user'
        }

        const newMessages = [...messages, newMessage]

        setMessages(newMessages)

        setLoading(true)

        const apiMessage = newMessage.message

        await ProcessMessageToBardAI(apiMessage, newMessage)
    }

    async function ProcessMessageToBardAI(chatMessages, message) {
        GlobalApi.getBardApi(chatMessages).then(resp => {
            if (resp.data.choices[0].message.content) {
                const chatAIResp = {
                    _id: Math.random() * (9999999 - 1),
                    message: resp.data.choices[0].message.content,
                    sentTime: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    }
                }
                const newMessage = message

                const newMessages = [...messages, newMessage, chatAIResp]

                setMessages(newMessages)
                setLoading(false)
            }
            else {
                const chatAIResp = {
                    _id: Math.random() * (9999999 - 1),
                    text: "Xin lỗi, tôi không thể giúp bạn điều này!",
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                    }
                }
                setMessages([...messages, { message: chatAIResp.text, sender: "AH-Study-AI-Chatbot" }])
                setLoading(false)
            }
        },
            error => {

            })
    }

    return (
        <>
            {/* PHẦN Header */}
            <header>
                <div className="">
                    <nav className="navbar sticky-top navbar-expand-lg navbar-light shadow p-3 mb-5 bg-white rounded">
                        <a className="navbar-brand" href='/'>
                            Phát Triển Năng Lực Số
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-lg-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Trang Chủ <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/tong-quan">Tổng Quan</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/ahstudy">AH Study</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/ahstudychatbot">AH Study Chatbot</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="https://phattriennanglucso.com/so-tay-dien-tu/01.pdf" rel="noreferrer" target={'_blank'}>Sổ Tay Điện Tử</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            {/* PHẦN Body */}
            <div classNameName="body" style={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
                <div className="AI-Chatbot">
                    <div style={{ position: "relative", height: "500px", marginLeft: 'auto', marginRight: 'auto' }}>
                        <MainContainer>
                            <ChatContainer>
                                <MessageList
                                    scrollBehavior="smooth"
                                    typingIndicator={loading ? <TypingIndicator content="AI Chatbot is typing" /> : null}
                                >
                                    {messages.map((message, i) => {
                                        console.log(messages)
                                        return <Message key={i} model={message} />
                                    })}
                                </MessageList>
                                <MessageInput placeholder="Type message here" onSend={handleSend} />
                            </ChatContainer>
                        </MainContainer>
                    </div>
                </div>
            </div>

            {/* PHẦN Footer */}
            <footer className="footer_area section_padding_130_0">
                <div className="container">
                    <div className="row">
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Footer Logo--> */}
                                <div className="footer-logo mb-3"></div>
                                <p>Phát Triển Năng Lực Số</p>
                                {/* <!-- Copywrite Text--> */}
                                <div className="copywrite-text mb-5">
                                    <p className="mb-0">Coded by<a className="ml-1" href="https://trhuy207.github.io/Bio-Page/" target={'_blank'} rel="noreferrer">Quoc Huy</a></p>
                                </div>
                                {/* <!-- Footer Social Area--> */}
                                <div className="footer_social_area">
                                    <a href="https://www.facebook.com/phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook" target={'_blank'} rel="noreferrer">
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Youtube" target={'_blank'} rel="noreferrer">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                    <a href="https://www.tiktok.com/@phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tiktok" target={'_blank'} rel="noreferrer">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">DỰ ÁN</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="/ahstudy">AH Study</a></li>
                                        <li><a href="/ahstudychatbot">AH Study Chatbot</a></li>
                                        <li><a href="https://phattriennanglucso.com/so-tay-dien-tu/01.pdf" rel="noreferrer" target={'_blank'}>Sổ Tay Điện Tử</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div class="col-12 col-sm-6 col-lg">
                            <div class="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 class="widget-title">GIỚI THIỆU</h5>
                                {/* <!-- Footer Menu--> */}
                                <div class="footer_menu">
                                    <ul>
                                        <li><a href="/tong-quan">Tổng Quan</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">HỖ TRỢ</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="mailto:quochuyphbrvt@gmail.com">Gửi Email cho chúng tôi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default AIChatBot