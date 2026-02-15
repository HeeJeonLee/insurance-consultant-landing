export default function About() {
  const features = [
    {
      icon: "🏆",
      title: "25년 금융 경력",
      description: "다양한 고객의 니즈를 이해하고 최적의 솔루션을 제공한 풍부한 경험"
    },
    {
      icon: "🤝",
      title: "미래에셋 파트너",
      description: "대한민국 1위 금융그룹과 함께하는 신뢰할 수 있는 보험 상담"
    },
    {
      icon: "🐾",
      title: "펫보험 전문",
      description: "5개 보험사 펫보험 상품을 비교하여 최적의 선택을 도와드립니다"
    },
    {
      icon: "🤖",
      title: "AI 자동 상담",
      description: "24시간 365일 언제든지 AI 챗봇으로 즉시 상담이 가능합니다"
    },
    {
      icon: "📱",
      title: "비대면 가입",
      description: "방문 없이도 온라인으로 간편하게 보험 가입이 가능합니다"
    },
    {
      icon: "💎",
      title: "최적화 분석",
      description: "고객님의 상황에 맞는 맞춤형 보험 설계를 제공합니다"
    }
  ]

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            왜 이희전 상담사를 선택해야 할까요?
          </h2>
          <p className="text-xl text-gray-600">
            25년의 경험과 AI 기술이 만나 최고의 펫보험 상담 서비스를 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                25년
              </div>
              <div className="text-gray-600 font-medium">금융보험 경력</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                5개사
              </div>
              <div className="text-gray-600 font-medium">제휴 보험사</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">AI 자동 상담</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">비대면 가입</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
