import React, { Component } from 'react';
import '../css/Info.css';
import Pic1 from '../images/slide1.jpg';
import InfoBanner from '../images/info.png';

export default class Info extends Component {
  render() {
    return (
      <div class="Body-Main">
			<h3>Chương trình tour</h3>
			<div class="Body-Main-im1">
				<i class="fas fa-arrow-right"></i>
			</div>
			<div class="Body-Main-Img">
				<img src={InfoBanner}/>
				<div class="Body-Main-Img-Info">
					<h4>Côn Minh - La Bình - Nguyên Dương</h4>
					<p>Vân Nam – một tỉnh rất nhiều những thắng cảnh làm say mê lòng người. Hôm nay bạn hãy cùng chúng tôi khám phá thêm những địa danh mới mà tôi tin rằng bạn sẽ không bao giờ thất vọng vì sự lựa chọn sáng suốt của mình.</p>
				</div>
			</div>
			<div class="Body-Main-More">
				<div class="Body-Main-More-Left text-left">
					<p>Một Nguyên Dương với những ruộng bậc thang hùng vĩ và quyến rũ đến say lòng vào mỗi bình minh hay hoàng hôn. Một Côn Minh với 4 mùa xuân với bạt ngàn sắc hoa. Một La Bình với thảm hoa ngút ngàn tới tận chân trời, xen lẫn là núi non trùng điệp trong làn sương sớm. La Bình không chỉ hấp dẫn bởi sắc vàng của Cải, sắc hồng của Đào, sắc trắng của hoa Lê, hoa Mận mà bạn còn bị mê hoặc bởi những thôn làng nơi đây,những ngôi nhà cổ cả trăm năm tuổi, cùng trải nghiệm cuộc sống của người dân thôn quê cũng là một điều rất thú vị……</p>
				</div>
				<div class="Body-Main-More-Right">
					<div class="Body-Main-More-Right-Button">
						<a href="" >Đặt tour</a>
					</div>
				</div>
			</div>
			<h1>Chương trình</h1>
			<div class="Body-Main-Timeline text-left">
				<div class="Body-Main-Timeline-Bound">
					<div class="Body-Main-Timeline-Day">
						1
					</div>
					<div class="Body-Main-Timeline-Title">
						<h5>HÀ NỘI – CÔN MINH (Ăn tối)</h5>
						<p>
							13h30: Xe và hướng dẫn viên đón đoàn tại điểm hẹn, đưa đoàn ra sân bay Nội Bài, làm thủ tục đáp chuyến bay MU2576 lúc 16h25 đi Côn Minh.
						</p>
						<p>
							18h50: Đến Côn Minh, xe và hướng dẫn viên đưa đoàn ăn tối tại nhà hàng. Sau đó, đoàn về khách sạn nhận phòng. Nghỉ đêm ở Côn Minh.
						</p>
					</div>
				</div>
				<div class="Body-Main-Timeline-Bound">
					<div class="Body-Main-Timeline-Day">
						2
					</div>
					<div class="Body-Main-Timeline-Title">
						ÔN MINH – LA BÌNH (Ăn sáng, trưa tối)
						<p>
							Sáng: Sau bữa sáng, xe đưa đoàn đi La Bình ( cách khoảng 215km, đi ô tô mất khoảng 3 tiếng ) – một địa danh nổi tiếng, là vựa cải lớn của thế giới với những ruộng hoa ngút ngàn. Ấn tượng nhất là các thảm  hoa vàng bát ngát bao quanh những ngọn đồi xanh, ngút mắt về phía chân trời, quyến rũ một cách lạ kỳ. Vào mỗi thời điểm khi sương còn giăng mờ hoặc lúc những tia nắng vàng rực rỡ, những cánh đồng cải lại được thay áo mới, mang lại cho du khách cảm xúc diệu kỳ, tưởng như hơi thở mùa xuân mơn man giữa óng ả sắc vàng rực rỡ. Ăn trưa tại nhà hàng.
						</p>
						<p>
							Chiều: Đoàn đi thăm Thác Cửu Long hùng vĩ, khu núi Kim Kê để ngắm hoàng hôn cũng như toàn bộ Thiên Đường hoa cải vàng ở đây. Đoàn đi dạo quanh thôn La Bình vừa ngắm cảnh hoa đào, hoa lê, hoa cải nở bên những nếp nhà thôn dã, vừa tìm hiểu văn hóa, phong tục và nét đẹp của con người La Bình nơi đây. Ăn tối tại nhà hàng. Nghỉ đêm ở La Bình.
						</p>
					</div>
				</div>
				<div class="Body-Main-Timeline-Bound">
					<div class="Body-Main-Timeline-Day">
						2
					</div>
					<div class="Body-Main-Timeline-Title">
						<h5>ÔN MINH – LA BÌNH (Ăn sáng, trưa tối)</h5>
						<p>
							Sáng: Sau bữa sáng, xe đưa đoàn đi La Bình ( cách khoảng 215km, đi ô tô mất khoảng 3 tiếng ) – một địa danh nổi tiếng, là vựa cải lớn của thế giới với những ruộng hoa ngút ngàn. Ấn tượng nhất là các thảm  hoa vàng bát ngát bao quanh những ngọn đồi xanh, ngút mắt về phía chân trời, quyến rũ một cách lạ kỳ. Vào mỗi thời điểm khi sương còn giăng mờ hoặc lúc những tia nắng vàng rực rỡ, những cánh đồng cải lại được thay áo mới, mang lại cho du khách cảm xúc diệu kỳ, tưởng như hơi thở mùa xuân mơn man giữa óng ả sắc vàng rực rỡ. Ăn trưa tại nhà hàng.
						</p>
						<p>
							Chiều: Đoàn đi thăm Thác Cửu Long hùng vĩ, khu núi Kim Kê để ngắm hoàng hôn cũng như toàn bộ Thiên Đường hoa cải vàng ở đây. Đoàn đi dạo quanh thôn La Bình vừa ngắm cảnh hoa đào, hoa lê, hoa cải nở bên những nếp nhà thôn dã, vừa tìm hiểu văn hóa, phong tục và nét đẹp của con người La Bình nơi đây. Ăn tối tại nhà hàng. Nghỉ đêm ở La Bình.
						</p>
					</div>
				</div>
				<div class="Body-Main-Timeline-Bound">
					<div class="Body-Main-Timeline-Day">
						3
					</div>
					<div class="Body-Main-Timeline-Title">
						<h5>LA BÌNH – CAO NGUYÊN NGUYÊN DƯƠNG (Ăn sáng, trưa, tối)</h5>
						<p>
							Sáng: Sau bữa sáng, đoàn đi khám phá Sông DuoYi, cùng chụp những tấm hình ưng ý nhất. Sau đó, Quý khách khởi hành đi Nguyên Dương ( cách khoảng 400km, đi ô tô mất khoảng 5 tiếng ) - Thắng cảnh được UNESCO công nhận là Di sản văn hóa thế giới. Ăn trưa tại nhà hàng.
						</p>
						<p>
							Chiều: Đoàn đi thăm khu quần thể Ruộng Bậc Thang Nguyên Dương với diện tích 19 000 mẫu ruộng (1 mẫu TQ = 667 m2) và một điều đặc biệt là ruộng bậc thang ở Nguyên Dương quanh năm có nước, người Hà Nhì cho thấy bí quyết bảo vệ nguồn nước của họ là vô cùng quan trọng (đây là quần thể ruộng bậc thang đẹp nhất, kỳ vĩ nhất của người dân tộc Hà Nhì Trung Quốc được UNESCO công nhận là Di sản Văn hóa thế giới, có ruộng lên tới 3700 bậc). Tại đây, Quý khách có thể được ngắm cảnh hoàng hôn dần khuất sau dãy núi của những mảnh ruộng bậc thang cực đẹp. Ăn tối tại nhà hàng. Sau đó, quý khách tự do tìm hiểu văn hóa, phong tục tập quán của người dân bản địa. Nghỉ đêm ở Thị trấn Nguyên Dương.
						</p>
					</div>
				</div>
				<div class="Body-Main-Timeline-Bound">
					<div class="Body-Main-Timeline-Day">
						4
					</div>
					<div class="Body-Main-Timeline-Title">
						<h5>NGUYÊN DƯƠNG – CÔN MINH (Ăn sáng, trưa, tối)</h5>
						<p>
							Sáng: Sau bữa sáng, Quý khách có thể dậy sớm ngắm cảnh Bình minh tại Nguyên Dương. Khi bình minh lên, những tia nắng sớm được phản chiếu xuống mặt nước của những cánh ruộng bậc thang, tạo ra những khoảng sáng trông thật lạ mắt và hấp dẫn. Ăn trưa tại nhà hàng.
						</p>
						<p>
							Chiều: Đoàn khởi hành về Côn Minh ( cách khoảng 326km, đi ô tô mất khoảng 5 tiếng ). Ăn tối tại nhà hàng. Sau đó, đoàn tự do khám phá Côn Minh. Nghỉ đêm tại Côn Minh.
						</p>
					</div>
				</div>
				<div class="Body-Main-Timeline-Bound">
					<div class="Body-Main-Timeline-Day">
						5
					</div>
					<div class="Body-Main-Timeline-Title">
						<h5>CÔN MINH - HÀ NỘI (Ăn sáng, trưa, tối)</h5>
						<p>
							Sáng: Sau bữa sáng, Đoàn tham quan Viên Thông Sơn - một trong những ngôi cổ tự đẹp nhất Côn Minh. Đây là một trong những kiến trúc cổ đặc sắc ở trung tâm thành phố, nơi đặt trụ sở của Hội Phật giáo Vân Nam. Vào mùa xuân Quý khách sẽ được thưởng thức một rừng hoa anh đào rực rỡ sắc hồng, nơi đây có hơn 1000 gốc đào cổ. Ăn trưa tại nhà hàng. Sau đó, xe đưa đoàn ra sân bay Côn Minh, làm thủ tục đáp chuyến bay MU2575 lúc 14h45 về Hà Nội.
						</p>
						<p>
							15h35: Đến sân bay Nội Bài, xe đưa đoàn về điểm tập trung ban đầu. Chia tay đoàn. Kết thúc chương trình.
						</p>
					</div>
				</div>
			</div>

			<div class="Body-Main-MoreInfo text-left">
				<div class="Body-Main-MoreInfo-Left">
					<h5>Bao gồm</h5>
					<ul>
						<li>Vé máy bay Hà Nội – Côn Minh – Hà Nội của MU.</li>
						<li>Thuế sân bay & phụ phí xăng dầu.</li>
						<li>Visa Trung Quốc theo đoàn ( Scan mặt hộ chiếu & ảnh 4x6 mới chụp trong vòng 6 tháng, rõ nét ).</li>
						<li>Khách sạn tiêu chuẩn 3 sao ( 2 người/phòng, nếu lẻ nam hoặc nữ sẽ ghép 3 người/phòng ).</li>
						<li>Các bữa ăn theo chương trình ( 8 món + 1 canh ).</li>
						<li>Xe điều hòa vận chuyển theo chương trình. </li>
						<li>Vé thắng cảnh tại các điểm tham quan ( vào cửa 1 lần ).</li>
						<li>Hướng dẫn viên Tiếng Việt.</li>
						<li>Bảo hiểm du lịch, mức bồi thường tối đa 10.000 USD/vụ.</li>
					</ul>
				</div>
				<div class="Body-Main-MoreInfo-Right">
					<h5>Không bao gồm</h5>
					<ul>
						<li>Vé xe điện vào Sông DuoYi</li>
						<li>Vé cáp treo Thác Cửu Long.</li>
						<li>Phụ thu phòng đơn.</li>
						<li>Đồ uống, giặt là, điện thoại & chi phí cá nhân.</li>
						<li>Tiền Tip cho HDV & lái xe ( 3 USD/ngày/người ).</li>
						<li>Thuế VAT.</li>
					</ul>
				</div>
			</div>
			// NewTour
      
      
		</div>
    )
  }
}
