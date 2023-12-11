import React, { Component } from 'react';

class AHStudyChatbot extends Component {
    render() {
        return (
            <>
                {/* PHẦN Header */}
                <header>
                    <div className="container">
                        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
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
                                        <a className="nav-link" href="#introduce">Giới Thiệu</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#download">Tải App Ngay</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/ahstudy">AH Study</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* PHẦN Body */}
                <div classNameName="body">
                    {/* Introduce */}
                    <div className="introduceAhstudy">
                        <div className="contentPart1" id="introduce">
                            <div className="content1">
                                <h2 className="contentTitle1">Chat Với AI</h2>
                                <p className="contentText1">Giúp hỗ trợ học sinh trong quá trình học tập. Với khả năng tự động tạo ra câu trả lời từ các câu hỏi của người dùng chatbot giúp cho việc học tập trở nên dễ dàng và tiện lợi hơn bao giờ hết.</p>
                            </div>
                            <div className="image1">
                                <img src={require('../assets/images/ahstudyaichatbothome.png')} style={{maxWidth: '300px', maxHeight: '100%'}} alt="" />
                            </div>
                        </div>

                        <div className="contentPart2">
                            <div className="image2">
                                <img src={require('../assets/images/chat.png')} style={{maxWidth: '300px', maxHeight: '100%'}} alt="" />
                            </div>
                            <div className="content2">
                                <h2 className="contentTitle">Trải Nghiệm Học Tập Thú Vị</h2>
                                <p className="contentText">Học sinh sẽ được tăng cường khả năng học tập và tạo ra một trải nghiệm mới trong học tập. Có thể sử dụng thông tin từ Chatbot để cải thiện và đáp ứng nhu cầu của học tập.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Try AI Chat */}
                    <div className="tryAiChat">
                        <a href='/aichatbot' type="button" className='btn btn-outline-info btn-light'>
                            <i className="fa-solid fa-robot fa-bounce"></i>
                            <p>Thử AI Chatbot Ngay</p>
                        </a>
                    </div>

                    {/* Download Part */}
                    <div className="downloadPart text-center" id="download">
                        <div className="text-center text-lg-start">
                            <h2>Tải App Ngay</h2>
                        </div>

                        <div className="downloadChoice row">
                            <div className="iOSPart">
                                <a href="/iosdownload" type="button" className="btn btn-outline-info btn-light">
                                    <img src={require('../assets/images/ios.png')} width="50px" height="50px" alt="" />
                                    Tải về iOS <br />(Comming Soon)
                                </a>
                            </div>
                            <div className="AndroidPart">
                                <a href="/apkdownload" type="button" className="btn btn-outline-info btn-light">
                                    <img src={require('../assets/images/apk.png')} width="50px" height="50px" alt="" />
                                    Tải về APK
                                </a>
                            </div>
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
                                        <p className="mb-0">Made with <i className="fa-solid fa-heart"></i> by<a className="ml-1" href="https://www.facebook.com/quoc.huy.tran.2007/" target='_blank'>Quoc Huy</a></p>
                                    </div>
                                    {/* <!-- Footer Social Area--> */}
                                    <div className="footer_social_area">
                                        <a href="https://www.youtube.com/@phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Youtube" target='_blank'>
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tiktok" target='_blank'>
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
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Widget--> */}
                            <div className="col-12 col-sm-6 col-lg">
                                <div className="single-footer-widget section_padding_0_130">
                                    {/* <!-- Widget Title--> */}
                                    <h5 className="widget-title">KẾT NỐI</h5>
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
}

export default AHStudyChatbot