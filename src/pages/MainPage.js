import React, { Component } from 'react';

class MainPage extends Component {
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
                                        <a className="nav-link" href="/ahstudy">AH Study</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/ahstudychatbot">AH Study Chatbot</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* PHẦN Body */}
                <div className="body">
                    {/* Introduce */}
                    <div className='introduce' id='introduce'>
                        <div className='ahstudy'>
                            <div className="downloadChoice row">
                                <div className="iOSPart">
                                    <a href="https://apps.apple.com/vn/app/ah-study/id6474718633" type="button" target={'_blank'}>
                                        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/vi-vn?size=250x83&amp;releaseDate=1703462400" alt="Download on the App Store" style={{borderRadius: '13px', width: '195px', height: '83px'}} />
                                    </a>
                                </div>
                                <div className="AndroidPart">
                                    <a href='https://play.google.com/store/apps/details?id=com.quochuyph207.AppKhoaHocKyThuat&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target={'_blank'}>
                                        <img alt='Tải nội dung trên Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png' style={{borderRadius: '13px', width: '200px', height: '83px'}} />
                                    </a>
                                </div>
                            </div>
                            <div className='ahstudyImg'>
                                <div className='bounce'>
                                    <a href='/ahstudy'>
                                        <img src={require('../assets/images/ahstudy.png')} style={{ maxWidth: '300px' }} />
                                    </a>
                                </div>
                                <div className='clickHere'>
                                    <i class="fa-solid fa-arrow-up fa-lg"></i>
                                    <p className='clickHereText'>Bấm vào đây để xem thêm</p>
                                </div>
                            </div>
                        </div>

                        <div className='ahstudychatbot'>
                            <div className='ahstudychatbotImg'>
                                <div className='clickHere1'>
                                    <p className='clickHereText'>Bấm vào đây để xem thêm</p>
                                    <i class="fa-solid fa-arrow-down fa-lg"></i>
                                </div>
                                <div className='bounce'>
                                    <a href='/ahstudychatbot'>
                                        <img src={require('../assets/images/ahstudychatbot.png')} style={{ maxWidth: '300px' }} />
                                    </a>
                                </div>
                            </div>
                            <div className="downloadChoice row">
                                <div className="iOSPart">
                                    <a href="/commingsoon" type="button" target={'_blank'}>
                                        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/vi-vn?size=250x83&amp;releaseDate=1703462400" alt="Download on the App Store" style={{borderRadius: '13px', width: '195px', height: '83px'}} />
                                    </a>
                                </div>
                                <div className="AndroidPart">
                                    <a href='https://play.google.com/store/apps/details?id=com.quochuyph207.aichatbotahstudy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target={'_blank'}>
                                        <img alt='Tải nội dung trên Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/vi_badge_web_generic.png' style={{borderRadius: '13px', width: '200px', height: '83px'}}/>
                                    </a>
                                </div>
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
                                        <p className="mb-0">Coded by<a className="ml-1" href="https://trhuy207.github.io/Bio-Page/" target='_blank'>Quoc Huy</a></p>
                                    </div>
                                    {/* <!-- Footer Social Area--> */}
                                    <div className="footer_social_area">
                                        <a href="https://www.facebook.com/phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook" target='_blank'>
                                            <i class="fa-brands fa-facebook"></i>
                                        </a>
                                        <a href="https://www.youtube.com/@phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Youtube" target='_blank'>
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                        <a href="https://www.tiktok.com/@phattriennanglucso" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tiktok" target='_blank'>
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

export default MainPage