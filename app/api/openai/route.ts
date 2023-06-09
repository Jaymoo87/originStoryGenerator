import { NextRequest, NextResponse } from 'next/server';
import { AxiosResponse } from 'axios';

import {
  ChatCompletionResponseMessageRoleEnum,
  Configuration,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  OpenAIApi,
} from 'openai';

import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request, res: any) {
  try {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const openai = new OpenAIApi(configuration);

    if (request.method === 'POST') {
      // Handle the POST request

      ///  add different variables for character stats and other information to send to chatgpt request. ex: {var1, var2, role}
      const { role, characterName, characterClass, age, race, homeland } = await request.json();
      const aiRes: AxiosResponse<CreateChatCompletionResponse, any> = await openai.createChatCompletion(
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: `Create a 5 paragraph dungeons and dragons character origin story for ${characterName}, a ${age} year old ${race} ${characterClass} from ${homeland} with html tags `,
            },
            {
              role: 'system',
              content: `${role || 'I am proficient at creating origin stories'}. Write with html tags`,
            },
          ],
        }
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        //     'Access-Control-Allow-Origin': '*',
        //   },
        // }
      );
      return NextResponse.json(
        {
          content: aiRes.data.choices[0].message?.content,
        },
        {
          status: 200,
        }
      );
    }
  } catch (error) {
    console.error('req error', error);
    return NextResponse.json({ error: 'post did not update' }, { status: 500 });
  }
}

// /**
//  * BOTTLENECK OPTION FOR LIMITING REQUESTS
//  */

// // import Bottleneck from 'bottleneck';
// // const limiter = new Bottleneck({
// //   maxConcurrent: 1, // Only allow 1 request at a time
// //   minTime: 2000, // Wait at least 2 seconds between requests
// //   reservoir: 3, // Allow up to 3 requests in the reservoir
// //   reservoirRefreshInterval: 60 * 1000, // Refresh the reservoir every minute
// // });
// // content: `Create a 3 line blog post with html tags based on this title: ${title}`,

// /**
//  * Add limiter to api request by wrapping it around the request
//  */
// export default handler;

/**OPENAI-FETCH PACKAGE (NO AXIOS) */

// import { OpenAIClient } from 'openai-fetch';

// export const OpenAIFetch = async (req: any, res: any) => {
//   const client = new OpenAIClient({ apiKey: process.env.OPENAI_API_KEY });
//   const method = 'POST';

//   if (req.method === 'POST') {
//     const { role, characterName, characterClass, age, race, homeland } = await req.json();

//     client.createChatCompletion({
//       model: 'gpt-3.5-turbo',

//       messages: [
//         {
//           role: 'user',
//           content: `Create a 5 paragraph dungeons and dragons character origin story for ${characterName}, a ${age} year old ${race} ${characterClass} from ${homeland} with html tags `,
//         },
//         {
//           role: 'system',
//           content: `${role || 'I am a helpful assistant'}. Write with html tags`,
//         },
//       ],
//     });
//   }
//   return res.json();
// };
