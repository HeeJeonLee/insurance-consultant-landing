import { useState, useRef, useEffect } from 'react'

export default function ChatBot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '안녕하세요! 이희전 상담사의 AI 어시스턴트입니다. 🐾\n\n25년 경력의 보험 전문가가 운영하는 펫보험 상담 서비스입니다.\n\n어떤 도움이 필요하신가요?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY || 'sk-ant-api03-lqa3ijcXFUufZPFzpWuDKHUR81ZUcge77kYfm8qilie-OeN5qwdyn4Uqs_EI7_hkl3dkYvOupfau5rcIkHhLd0Q_lhbAZgAA',
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          system: `당신은 이희전 보험상담사의 AI 어시스턴트입니다. 

상담사 정보:
- 이름: 이희전
- 경력: 25년 금융보험 전문가
- 소속: 미래에셋금융서비스 (상담사 코드: 251220019)
- 전문분야: 펫보험
- 제휴사: 메리츠화재(펫퍼민트), 삼성화재(위풍댕댕), DB손보(아이러브펫), KB손보(금쪽같은펫), 현대해상(굿앤굿)

역할:
1. 친절하고 전문적으로 펫보험에 대해 상담
2. 5개 보험사 상품의 특징을 간단히 설명
3. 고객의 반려동물 상황에 맞는 보험 추천
4. 구체적인 가입이나 상세 상담은 이희전 상담사와 직접 연결 안내
5. PetCare+ 플랫폼(https://petcareplus.kr)에서 자동 비교 가능함을 안내

말투: 친근하고 전문적이며, 이모지를 적절히 사용`,
          messages: messages.filter(m => m.role !== 'system').map(m => ({
            role: m.role,
            content: m.content
          })).concat([{ role: 'user', content: userMessage }])
        })
      })

      if (!response.ok) throw new Error('API 요청 실패')

      const data = await response.json()
      const assistantMessage = data.content[0].text

      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }])
    } catch (error) {
      console.error('챗봇 오류:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주시거나, 상담 신청을 통해 직접 연락 부탁드립니다. 🙏'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    '펫보험이 뭔가요?',
    '어떤 보험이 좋을까요?',
    '보험료가 궁금해요',
    '가입 방법을 알려주세요'
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4 pointer-events-none">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col pointer-events-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold">
              AI
            </div>
            <div>
              <h3 className="font-bold">이희전 상담사 AI</h3>
              <p className="text-xs text-white/80">24/7 펫보험 상담</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white text-gray-800 shadow-md'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">자주 묻는 질문:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(q)
                    setTimeout(handleSend, 100)
                  }}
                  className="text-xs bg-white text-purple-600 px-3 py-1.5 rounded-full border border-purple-200 hover:bg-purple-50 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="메시지를 입력하세요..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full p-3 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
