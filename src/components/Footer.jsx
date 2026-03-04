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
              <p>📋 사업자등록번호: 151-09-03201</p>
              <p>📞 대표전화: 010-5650-0670</p>
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
            <h4 className="text-lg font-semibold mb-4">제휴 보험사 (8개)</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>• 메리츠화재 (펫퍼민트)</li>
              <li>• 삼성화재 (위풍댕댕)</li>
              <li>• DB손보 (아이러브펫)</li>
              <li>• 현대해상 (굿앤굿)</li>
              <li>• KB손보 (금쪽같은펫)</li>
              <li>• 한화손보 (펫함께)</li>
              <li>• 농협손보 (펫케어)</li>
              <li>• 롯데손보 (펫건강)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 space-y-4">
          <div className="bg-red-950/30 border border-red-800/50 rounded-lg p-4 text-xs text-red-200">
            <p className="font-semibold mb-2">⚠️ 법적 공고</p>
            <p className="mb-2">본 서비스는 정보 제공 및 상담 목적이며, 보험 권유 또는 중개행위가 아닙니다. 정확한 보험료, 보장 내용, 면책사항은 각 보험사의 공식 채널을 통해 확인하시기 바랍니다.</p>
            <p>보험설계사 상담은 보험업법에 따라 진행되며, 본 플랫폼과 별개의 개인 상담에 해당합니다.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>
              © 2026 \uc774\ud76c\uc804 \ubcf4\ud5d8\uc0c1\ub2f4\uc0ac. All rights reserved.
            </p>
            <p>
              Powered by \uc218\uc778AI\ube0c\ub9277\ub9ac\ub354 | AI Technology Partner
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
