// Vercel Serverless Function - Claude AI Chat
// API 키는 서버사이드에서만 사용 (보안)

export default async function handler(req, res) {
  // CORS 헤더
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages format' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY is not set');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 500,
        system: `당신은 25년 경력의 펫보험 전문 AI 상담사입니다.

역할:
- 펫보험에 대한 친절하고 전문적인 상담 제공
- 8개 보험사(메리츠화재, 삼성화재, DB손해보험, 현대해상, KB손해보험, 한화손해보험, 농협손해보험, 롯데손해보험) 정보 안내
- 보험 용어 쉽게 설명
- 반려동물 건강 관련 일반적인 조언

8개 보험사 요약:
- 메리츠화재 (펫퍼민트): 점유율 1위, 제휴병원 2천개, 자동청구, 슬개골 특화
- 삼성화재 (위풍댕댕): 치과 특화, 다견 10% 할인, 종합 보장
- DB손해보험 (아이러브펫): 슬개골 특화, 12세까지 가입, 합리적 가격
- 현대해상 (굿앤굿): 100% 보장 옵션, 가성비 우수
- KB손해보험 (금쪽같은펫): MRI/CT 최고 한도, 대형견 추천
- 한화손해보험 (펫함께): 실속형, 핵심 보장, 합리적 가격
- 농협손해보험 (펫케어): 배상책임 특화, 장례비용 보장
- 롯데손해보험 (펫건강): 기본 보장, 간편 가입

상담 스타일:
- 이모지 적절히 사용 (🐾, 😊, ✅)
- 짧고 명확한 문장
- 고객의 걱정을 먼저 공감
- 구체적인 숫자와 예시 제공

주의사항:
- 구체적인 보험료나 가입 권유는 하지 않음 (정보 제공 목적)
- 정확한 보장 내용은 각 보험사 확인 권유
- 친근하고 따뜻한 말투 사용
- 답변은 간결하게 (200자 이내 권장)

항상 한국어로 답변하세요.`,
        messages: messages
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      return res.status(response.status).json({ 
        error: 'AI 서비스 오류',
        details: errorData 
      });
    }

    const data = await response.json();
    
    return res.status(200).json({
      content: data.content[0].text,
      usage: data.usage
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return res.status(500).json({ 
      error: '서버 오류가 발생했습니다.',
      details: error.message 
    });
  }
}
