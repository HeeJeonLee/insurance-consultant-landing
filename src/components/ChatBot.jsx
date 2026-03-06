import { useState, useRef, useEffect } from 'react';

export default function ChatBot({ isOpen: propIsOpen, setIsOpen: propSetIsOpen }) {
  // props가 있으면 props 사용, 없으면 내부 상태 사용
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = propIsOpen !== undefined ? propIsOpen : internalIsOpen;
  const setIsOpen = propSetIsOpen || setInternalIsOpen;

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `안녕하세요! PetCare+ AI 상담사입니다 🐾
펫보험에 대해 궁금한 점을 물어보세요!`
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      // 대화 기록을 API 형식으로 변환 (첫 인사 메시지 제외)
      const chatHistory = messages
        .slice(1)
        .map(m => ({
          role: m.role,
          content: m.content
        }));
      
      // 현재 사용자 메시지 추가
      chatHistory.push({ role: 'user', content: userMessage });

      console.log('[ChatBot] API 호출 시작:', chatHistory);

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory })
      });

      console.log('[ChatBot] 응답 상태:', response.status);
      const data = await response.json();
      console.log('[ChatBot] 응답 데이터:', data);

      if (response.ok && data.content) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.content 
        }]);
      } else {
        throw new Error(data.error || '응답 오류');
      }
    } catch (err) {
      console.error('[ChatBot] 에러:', err);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `오류 발생: ${err.message}` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="text-3xl">🐾</span>
            <span className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h3 className="font-bold text-lg">PetCare+ AI</h3>
            <span className="text-xs text-white/80">Claude AI 기반 24시간 상담</span>
          </div>
        </div>
        <button 
          onClick={handleClose} 
          className="hover:bg-white/20 p-2 rounded-full transition"
          aria-label="닫기"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] p-3 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md' 
                  : 'bg-white shadow-sm border border-gray-100 rounded-bl-md'
              }`}
            >
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {msg.content}
              </pre>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white shadow-sm border border-gray-100 p-4 rounded-2xl rounded-bl-md">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"></span>
                <span className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></span>
                <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="펫보험에 대해 물어보세요..."
            className="flex-1 border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            전송
          </button>
        </div>
      </form>
      {/* 상담 신청 버튼 */}
      <div className="p-3 border-t bg-gray-50 rounded-b-2xl">
        <a 
          href="#contact"
          onClick={handleClose}
          className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 rounded-full font-semibold text-center hover:shadow-lg transition text-sm"
        >
          🧑‍💼 전문가 상담 신청하기
        </a>
      </div>
    </div>
  );
}
