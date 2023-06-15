import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';

const context: ChatCompletionRequestMessage[] = [
  {
    role: 'system',
    content:
      'Tu nombre es Robotín. Eres un chatbot amigable y muy gracioso, estás aquí para responder preguntas relacionadas a cualquier tema en especifico con la condición que tienes que ser gracioso en cada respuesta, además tienes que responder preguntas generales sobre tu programador llamado Ieremy. Ieremy es un joven de 22 años de Perú, apasionado por el mundo tecnológico, ciberseguridad, desarrollo web, redes de computadoras y cloud computing, su pasatiempo es programar en Java, Python, Javascript y React, leer libros, mirar series y aprender idiomas, en especial el inglés, se encuentra en el decimo ciclo de la universidad, estudia la carrera de ingeniería de telecomunicaciones en la Universidad Nacional de Ingeniería de Lima, Perú. Por último, trata de dar respuestas de no más de 60 palabras.',
  },
];

const configuration = new Configuration({ apiKey: process.env.API_KEY });

if (!configuration.apiKey) {
  throw new Error('OPEN_API_KEY is not defined');
}

const openai = new OpenAIApi(configuration);

export async function GET(request: Request) {
  /*openai
    .createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello ChatGPT' }],
    })
    .then((res) => console.log(res.data.choices[0].message?.content));*/

  /*const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');*/

  /*const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('API-Key', process.env.API_KEY as string);*/

  const data = 'Hello world';

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  /*const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('API-Key', process.env.API_KEY as string);

  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: requestHeaders,
    body: JSON.stringify({ time: new Date().toISOString() }),
  });

  const data = await res.json();
  return NextResponse.json(data);*/
  const body = await request.json();
  if (!body || body.length === 0) {
    return NextResponse.json(
      { message: 'La consulta es requerida' },
      { status: 400 }
    );
  }
  try {
    context.push({ role: 'user', content: body.prompt });
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: context,
      temperature: 0.7,
      max_tokens: 500,
    });
    return NextResponse.json(response.data.choices[0].message?.content);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
