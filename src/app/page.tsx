import Image from 'next/image';
import { TextToSpeech } from './components/TextToSpeech';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* text to speech */}
      <TextToSpeech />
      {/* chatbot canvas */}
    </main>
  );
}
