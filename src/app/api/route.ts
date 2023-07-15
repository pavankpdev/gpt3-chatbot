import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
export async function POST(req: Request, res: NextResponse) {
    const body = await req.json()

    console.log(body.messages)
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: body.messages,
    });
    const theResponse = completion.data.choices[0].message;

    return NextResponse.json({ output: theResponse }, { status: 200 })
};