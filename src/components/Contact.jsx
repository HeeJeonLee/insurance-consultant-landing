import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://cpejxivbyvlpkmthgwfq.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZWp4aXZieXZscGttdGhnd2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNjE2OTAsImV4cCI6MjA1NDkzNzY5MH0.1bhJxlsoMuVktQyU6lnFJuA_D6AyBYkI'
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petType: '',
    petAge: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const inquiryData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        pet_type: formData.petType,
        pet_age: formData.petAge,
        preferred_time: formData.preferredTime,
        message: formData.message,
        consultant_code: '251220019',
        created_at: new Date().toISOString()
      }

      // Supabase에 저장
      const { data, error } = await supabase
        .from('consultant_inquiries')
        .insert([inquiryData])

      if (error) throw error

      // 이메일 알림 발송 (실패해도 계속 진행)
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: import.meta.env.VITE_CONSULTANT_EMAIL || 'consultant@example.com',
            subject: '[PetCare+] 새로운 상담 신청',
            inquiry: inquiryData
          })
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // 이메일 실패해도 상담 신청은 성공으로 처리
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        petType: '',
        petAge: '',
        preferredTime: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              무료 상담 신청
            </h2>
            <p className="text-xl text-gray-600">
              전문가의 맞춤 상담을 받아보세요. 24시간 내 연락드리겠습니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    반려동물 종류
                  </label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  >
                    <option value="">선택해주세요</option>
                    <option value="강아지">강아지</option>
                    <option value="고양이">고양이</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    반려동물 나이
                  </label>
                  <input
                    type="text"
                    name="petAge"
                    value={formData.petAge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                    placeholder="예: 3세"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  희망 상담 시간
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                  placeholder="예: 평일 오후 2-5시"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  상담 내용
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                  placeholder="궁금하신 사항을 자유롭게 작성해주세요"
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                  ✅ 상담 신청이 완료되었습니다! 24시간 내 연락드리겠습니다.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                  ❌ 오류가 발생했습니다. 다시 시도해주세요.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
              </button>

              <p className="text-sm text-gray-500 text-center">
                상담 신청 시 개인정보 수집 및 이용에 동의하신 것으로 간주됩니다.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-purple-600 text-3xl mb-2">📞</div>
              <h4 className="font-semibold text-gray-900 mb-1">전화 상담</h4>
              <p className="text-gray-600 text-sm">평일 9:00-18:00</p>
            </div>
            <div className="p-6">
              <div className="text-purple-600 text-3xl mb-2">💬</div>
              <h4 className="font-semibold text-gray-900 mb-1">AI 챗봇</h4>
              <p className="text-gray-600 text-sm">24시간 즉시 상담</p>
            </div>
            <div className="p-6">
              <div className="text-purple-600 text-3xl mb-2">📧</div>
              <h4 className="font-semibold text-gray-900 mb-1">이메일</h4>
              <p className="text-gray-600 text-sm">24시간 내 답변</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
