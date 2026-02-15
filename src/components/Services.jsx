export default function Services() {
  const insuranceProducts = [
    {
      company: "메리츠화재",
      product: "펫퍼민트",
      color: "from-green-500 to-emerald-600",
      features: ["슬개골 수술 특화", "고액 보장", "빠른 보상 처리"]
    },
    {
      company: "삼성화재",
      product: "위풍댕댕",
      color: "from-blue-500 to-blue-600",
      features: ["종합 보장", "신뢰할 수 있는 브랜드", "다양한 플랜"]
    },
    {
      company: "DB손보",
      product: "아이러브펫",
      color: "from-red-500 to-pink-600",
      features: ["합리적 가격", "필수 보장", "간편 가입"]
    },
    {
      company: "KB손보",
      product: "금쪽같은펫",
      color: "from-yellow-500 to-orange-600",
      features: ["프리미엄 보장", "맞춤형 설계", "우수한 서비스"]
    },
    {
      company: "현대해상",
      product: "굿앤굿",
      color: "from-purple-500 to-indigo-600",
      features: ["안정적 보장", "체계적 관리", "믿을 수 있는 브랜드"]
    }
  ]

  return (
    <section id="services" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            제휴 펫보험 상품
          </h2>
          <p className="text-xl text-gray-600">
            5개 보험사의 다양한 펫보험 상품을 비교하고 최적의 선택을 도와드립니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insuranceProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.company}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-4`}>
                  {product.product}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* PetCare+ 링크 카드 */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🐾</div>
                <h3 className="text-2xl font-bold mb-2">
                  PetCare+
                </h3>
                <p className="text-lg font-semibold mb-4">
                  AI 자동 비교 플랫폼
                </p>
                <p className="text-white/90 mb-4">
                  5개 보험사를 한 번에 비교하고 최적의 펫보험을 찾아보세요
                </p>
              </div>
              <a 
                href="https://petcareplus.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                PetCare+ 바로가기 →
              </a>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            어떤 펫보험이 우리 아이에게 맞을까요?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            AI 챗봇 상담으로 즉시 확인하거나, 상담 신청으로 전문가의 도움을 받으세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
              className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              무료 상담 신청
            </button>
            <a 
              href="https://petcareplus.kr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-700 text-white font-semibold py-3 px-8 rounded-full hover:bg-purple-800 transition-colors"
            >
              AI 자동 비교하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
