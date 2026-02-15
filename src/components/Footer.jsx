export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">이희전 보험상담사</h3>
            <p className="text-gray-400 mb-4">
              25년 경력의 금융보험 전문가
            </p>
            <div className="space-y-2 text-gray-400">
              <p>📍 미래에셋금융서비스</p>
              <p>👤 상담사 코드: 251220019</p>
              <p>🏢 수인AI브릿지</p>
              <p>📋 사업자: 119-13-49535</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  펫보험 상품
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  상담 신청
                </a>
              </li>
              <li>
                <a href="https://petcareplus.kr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  PetCare+ 플랫폼
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">제휴 보험사</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• 메리츠화재 (펫퍼민트)</li>
              <li>• 삼성화재 (위풍댕댕)</li>
              <li>• DB손보 (아이러브펫)</li>
              <li>• KB손보 (금쪽같은펫)</li>
              <li>• 현대해상 (굿앤굿)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © 2026 이희전 보험상담사. All rights reserved.
            </p>
            <p>
              Powered by 수인AI브릿지 | AI Technology Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
