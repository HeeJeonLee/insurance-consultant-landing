export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="gradient-bg text-white">
      <div className="section-container min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🏆 25년 경력 금융보험 전문가
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              이희전 
              <span className="block text-yellow-300">보험상담사</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90">
              미래에셋금융서비스
            </p>
            
            <p className="text-lg text-white/80 leading-relaxed">
              25년간 쌓아온 전문성으로 최적의 펫보험을 찾아드립니다.<br />
              AI 챗봇으로 24시간 언제든지 상담 가능합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                무료 상담 신청
              </button>
              <a 
                href="#services" 
                className="btn-secondary"
              >
                펫보험 알아보기
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">25년</div>
                <div className="text-sm text-white/70">금융 경력</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5개사</div>
                <div className="text-sm text-white/70">보험사 제휴</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/70">AI 상담</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center space-y-6">
                {/* Profile Icon */}
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                  이희전
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">이희전 상담사</h3>
                  <p className="text-purple-600 font-medium mt-1">보험 전문 컨설턴트</p>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>25년 금융보험 경력</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    <span>미래에셋금융서비스</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>상담사 코드: 251220019</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>펫보험 전문 상담</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    지금 상담 시작하기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
