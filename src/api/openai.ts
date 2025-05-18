import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer YOUR_API_KEY`, // INSERT YOUR OPENAI API KEY HERE
  },
});

export async function generateStrategy(property: string, userFinancials: string) {
  const prompt = `You are a top-tier real estate expert. Given this property ${property} and user's financial data ${userFinancials}, output a personalized home-buying strategy.`;
  const response = await openai.post('/chat/completions', {
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });
  return response.data;
}

export default openai;
