/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/api/openai/route',
//         headers: [
//           { key: 'Access-Control-Allow-Credentials', value: 'true' },
//           { key: 'Access-Control-Allow-Origin', value: '*' },
//           { key: 'Access-Control-Allow-Methods', value: 'POST, GET' },
//           {
//             key: 'Access-Control-Allow-Headers',
//             value:
//               'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
//           },
//         ],
//       },
//     ];
//   },
// };

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: '/api/openai/route',
        destination: 'https://api.openai.com/v1/chat/completions',
      },
    ];
  };
  return { rewrites };
};
