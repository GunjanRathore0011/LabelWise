import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import loaderData from '../components/animation/loader.json';
import smileyData from '../components/animation/smiley.json';

const messages = [
  "Hold on, we're decoding your product's secrets 🕵️‍♀️✨",
  "Grabbing nutritional facts... one byte at a time 🍎💻",
  "Cooking up your product analysis 🍳🔍",
  "Healthy banne ki raah yahi se guzarti hai 💪🚀",
  "Scanner full focus mein hai... jaise aap exams mein hote the 🎯😂",
  "Letting the AI do its magic 🧙‍♂️✨ Just for you!",
  "One moment... the label is being judged 😅📋",
  "Unwrapping the truth hidden in that wrapper 🎁🔍",
  "Zara ruk jaaiye, product ki jaankari aa rahi hai 🧾😄",
];

export default function Loader() {
  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    const index = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[index]);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center ">
      <div className='mb-24'>
      <Player autoplay loop src={loaderData} style={{ height: '150px', width: '150px' }} />
      </div>
      <p className="mt-10 text-xl font-semibold text-gray-700 text-center px-4">
        {randomMessage}
      </p>
      <Player autoplay loop src={smileyData} style={{ height: '80px', width: '80px' }} />
    </div>
  );
}
