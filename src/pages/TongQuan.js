import React, { Component } from 'react';

class TongQuan extends Component {
    render() {
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
                <div className="body">
                    <div className='bodyHeader'>
                        <h1 className='bodyHeaderText'>Tổng Quan</h1>
                    </div>

                    <div className='TongQuan'>
                        <div className='contentBody'>
                            <div className='contentHeader'>
                                <div className='contentHeaderTitle'>
                                    <h3 className='contentHeaderText'>Chuyển đổi số</h3>
                                </div>
                            </div>

                            <div className='content'>
                                <p className='contentTextTQ'>
                                    Có nhiều định nghĩa khác nhau về chuyển đổi số (Digital transformation) nhưng có thể nói chung đó là chuyển các hoạt động của chúng ta từ thế giới thực sang thế giới ảo ở trên môi trường mạng. Theo đó, mọi người tiếp cận thông tin nhiều hơn, rút ngắn về khoảng cách, thu hẹp về không gian, tiết kiệm về thời gian. Chuyển đổi số là xu thế tất yếu, diễn ra rất nhanh đặc biệt trong bối cảnh của cuộc Cách mạng Công nghệ 4.0 hiện nay.
                                </p>
                            </div>
                        </div>

                        <div className='contentBody'>
                            <div className='contentHeader'>
                                <div className='contentHeaderTitle'>
                                    <h3 className='contentHeaderText'>Khái niệm năng lực số.</h3>
                                </div>
                            </div>

                            <div className='content'>
                                <p className='contentTextTQ'>
                                    Chúng ta có thể hiểu: Năng lực số (Digital Literacy) đề cập đến kiến thức, kỹ năng và thái độ cho phép HS phát triển và phát huy tối đa khả năng trong thế giới công nghệ số ngày càng lớn mạnh trên phạm vi toàn cầu, một thế giới mà HS vừa được an toàn, vừa được trao quyền theo cách phù hợp với lứa tuổi cũng như phù hợp với văn hóa và bối cảnh địa phương. Từ đó sẽ nâng cao được năng lực học tập đáp ứng được yêu cầu trong bối cảnh hội nhập hiện nay.
                                </p>
                            </div>
                        </div>

                        <div className='contentBody'>
                            <div className='contentHeader'>
                                <div className='contentHeaderTitle'>
                                    <h3 className='contentHeaderText'>Các nhân tố ảnh hưởng đến sự phát triển năng lực số của học sinh.</h3>
                                </div>
                            </div>

                            <div className='content'>
                                <p className='contentTextTQ'>
                                    Có rất nhiều nhân tố ảnh hưởng tới khả năng phát triển năng lực số của các bạn HS, trong đó phải kể đến các nhân tố quan trọng sau đây:
                                    <br></br>
                                    <br></br>
                                    - <i>Môi trường xã hội của HS:</i> Môi trường xã hội có ý nghĩa rất quan trọng đối với việc phát triển năng lực số cho HS. Nếu như cơ sở hạ tầng hạn chế (như điều kiện kết nối Internet khó khăn và tỷ lệ hộ gia đình có máy tính thấp), chi phí cao cho việc sử dụng hạ tầng CNTT, chất lượng công nghệ thấp… sẽ ảnh hưởng lớn đến quá trình tiếp cận chuyển đổi số cho HS. Hơn nữa, trong khi bối cảnh công nghệ đang thay đổi nhanh chóng, nếu quá trình cải cách chương trình giáo dục diễn ra chậm sẽ dẫn đến sự lạc hậu về công nghệ.
                                    <br></br>
                                    <br></br>
                                    - <i>Hoàn cảnh gia đình:</i> Đây là nhân tố quan trọng ảnh hưởng đến năng lực số củacác bạn HS. “Hiểu biết của cha mẹ về vai trò của CNTT đối với tương lai củatrẻ,…đã hình thành nên phương thức giáo dục trong đó trẻ hòa nhập xã hội bằngcách sử dụng phương tiện truyền thông số tại nhà” (Mascheroniet al. 2016). Vìvậy cần đầu tư nhiều hơn vào nâng cao năng lực công nghệ số nhằm hỗ trợ chamẹ để họ có thể tạo điều kiện cho con cái học tập và phát triển trong thời đại công nghệ số.
                                    <br></br>
                                    <br></br>
                                    - <i>Vai trò của các nhà trường:</i> Nhà trường đóng một vai trò quan trọng trong việc phát triển các năng lực số bao gồm khả năng sáng tạo khi tích hợp công nghệ kỹ thuật số như một công cụ học tập tích cực.
                                    <br></br>
                                    <br></br>
                                    - <i>Vai trò của tổ chức, cá nhân trong việc hỗ trợ phát triển năng lực số cho HS:</i> Các tổ chức, cá nhân này ngày càng được thừa nhận, cả về nỗ lực trong thiết kếcác thiết bị và dịch vụ giúp trao quyền và bảo vệ trẻ. Thông qua việc xóa mù côngnghệ số hiệu quả và các cơ chế an toàn, khả năng hỗ trợ các sáng kiến nhằm đẩymạnh xóa mù công nghệ số, như sáng kiến an toàn của Google.
                                    <br></br>
                                    <br></br>
                                    - <i>Vai trò của môn Tin học trong việc hình thành năng lực số:</i> Các chủ đề Tin học vừa cung cấp nội dung vừa cung cấp phương tiện để phát triển năng lực số.Phương tiện ở đây bao gồm các thiết bị số và phần mềm tin học hỗ trợ học tập,làm việc và các hoạt động tương tác trong xã hội số.
                                </p>
                                <p className='contentTextTQ'>
                                    Vì vậy để phát triển năng lực số cho HS cần chú ý năng lực số bị ảnh hưởng nhiều hơn bởi việc sử dụng hơn là tiếp cận. Thứ hai, điều quan trọng không phải là thời gian ngồi trước máy tính mà là việc khai thác hết các chức năng của máy tính, cả ở nhà và ở trường. Thứ ba, kỹ năng số bị ảnh hưởng bởi số năm trẻ sử dụng máy tính: càng sớm có kỹ năng số thì tác động càng lớn. Thứ tư, cần tăng cường kỹ năng về ngôn ngữ viết của các bạn HS như đọc, hiểu và xử lý văn bản để phát triển các kỹ năng số cho HS. Thứ năm, việc GV ứng dụng CNTT và truyền thông có mối tương quan tích cực với trình độ kỹ năng số của các bạn HS: nếu nhà trường muốn phát triển tốt nhất kỹ năng số của các bạn HS thì cần phải đầu tư đào tạo CNTT cho GV, đồng thời hỗ trợ tích hợp công nghệ số vào chương trình học tập.
                                </p>
                            </div>
                        </div>

                        <div className='contentBody'>
                            <div className='contentHeader'>
                                <div className='contentHeaderTitle'>
                                    <h3 className='contentHeaderText'>Khung năng lực số dành cho học sinh.</h3>
                                </div>
                            </div>

                            <div className='content'>
                                <p className='contentTextTQ'>
                                    Nội dung khung năng lực số của các bạn HS trung học gồm 7 miền năng lực, 26 năng lực thành phần (dựa trên Khung năng lực của UNESCO-2019). Cụ thể như sau: Sử dụng các thiết bị kỹ thuật số; kĩ năng về thông tin và dữ liệu; giao tiếp và hợp tác; chuẩn mực giao tiếp; quản lý định danh cá nhân; sáng tạo sản phẩm số; an toàn kĩ thuật số; giải quyết vấn đề liên quan năng lực số; năng lực định hướng nghề nghiệp liên quan.
                                </p>
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
}

export default TongQuan