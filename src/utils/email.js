// 이메일 발송 함수
export async function sendConsultantNotification(inquiryData) {
  try {
    const response = await fetch('/api/send-email', {
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

    if (!response.ok) {
      throw new Error('이메일 발송 실패')
    }

    return { success: true }
  } catch (error) {
    console.error('이메일 발송 오류:', error)
    return { success: false, error }
  }
}

// 이메일 HTML 템플릿
export function createEmailHTML(inquiry) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border: 1px solid #e5e7eb;
    }
    .info-row {
      background: white;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
      border-left: 4px solid #667eea;
    }
    .label {
      font-weight: bold;
      color: #667eea;
      margin-bottom: 5px;
    }
    .value {
      color: #374151;
      font-size: 16px;
    }
    .footer {
      background: #374151;
      color: white;
      padding: 20px;
      border-radius: 0 0 10px 10px;
      text-align: center;
      font-size: 14px;
    }
    .urgent {
      background: #fee2e2;
      border-left-color: #ef4444;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0;">🐾 새로운 상담 신청</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">PetCare+ 보험상담사 랜딩페이지</p>
  </div>
  
  <div class="content">
    <div class="info-row urgent">
      <div class="label">⏰ 접수 시간</div>
      <div class="value">${new Date(inquiry.created_at || new Date()).toLocaleString('ko-KR', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}</div>
    </div>
    
    <div class="info-row">
      <div class="label">👤 고객 이름</div>
      <div class="value">${inquiry.name || '-'}</div>
    </div>
    
    <div class="info-row">
      <div class="label">📞 연락처</div>
      <div class="value">${inquiry.phone || '-'}</div>
    </div>
    
    ${inquiry.email ? `
    <div class="info-row">
      <div class="label">📧 이메일</div>
      <div class="value">${inquiry.email}</div>
    </div>
    ` : ''}
    
    <div class="info-row">
      <div class="label">🐾 반려동물 종류</div>
      <div class="value">${inquiry.pet_type || '미기재'}</div>
    </div>
    
    <div class="info-row">
      <div class="label">📅 반려동물 나이</div>
      <div class="value">${inquiry.pet_age || '미기재'}</div>
    </div>
    
    ${inquiry.preferred_time ? `
    <div class="info-row">
      <div class="label">⏰ 희망 상담 시간</div>
      <div class="value">${inquiry.preferred_time}</div>
    </div>
    ` : ''}
    
    ${inquiry.message ? `
    <div class="info-row">
      <div class="label">💬 상담 내용</div>
      <div class="value">${inquiry.message}</div>
    </div>
    ` : ''}
  </div>
  
  <div class="footer">
    <p style="margin: 0 0 10px 0;">이희전 보험상담사 (${inquiry.consultant_code || '251220019'})</p>
    <p style="margin: 0; opacity: 0.8;">미래에셋금융서비스 · 수인AI브릿지</p>
  </div>
</body>
</html>
  `
}
