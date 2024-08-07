'use client';
import React, { FormEvent, useEffect, useState } from 'react';

export const TextToSpeech = () => {
  const [userText, setUserText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // voice 사용(w, window.speechSynthesis)
  const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  const voices = synth?.getVoices();
  const selectedVoices = voices?.find((voice) => voice.name === 'Albert');

  const speak = (textToSpeak: string) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.voice = selectedVoices;
    utterance.rate = 0.2;
    synth?.speak(utterance);
    setIsLoading(true);
    utterance.onend = () => {
      setIsLoading(false);
    };
  };

  const handleUserText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    speak(userText);
    console.log('e', e);
  };

  return (
    <div className='relatice top-0 z-50'>
      <form
        onSubmit={handleUserText}
        className='absolute top-[800px] left-[30px] space-x-2 pt-2'
      >
        <input
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          className='bg-transparent w-[510px] border border-[#b00c3f]/80 outline-none rounded-lg placeholder:text-[#b00c3f]
          p-2 text-[#b00c3f]'
          type='text'
          placeholder='What do you want to know human...'
        />
        <button
          disabled={isLoading}
          className='text-[#b00c3f] p-2 border-[#b00c3f] rounded-lg disabled:text-blue-100 disabled:cursor-not-allowed disabled:bg-gray-500
        hover:scale-110 hover:text-black hover:bg-[#b00c3f] duration-300 transition-all'
        >
          {isLoading ? 'thinking...' : 'Ask'}
        </button>
      </form>
    </div>
  );
};
