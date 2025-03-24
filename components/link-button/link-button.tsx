'use client';

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';
import { GoArrowUpRight } from "react-icons/go";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <a
      className="capitalize cursor-pointer bg-black bg-opacity-75 border-pink-500 border-2 mb-2 flex items-center justify-center py-2 w-full text-white rounded-2xl"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <GoArrowUpRight className='ml-3' />
    </a>
  );
}

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="flex justify-end w-full"> { }
      <div className="flex flex-col items-end">
        <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
          <button
            className="bg-none text-black px-2 py-1 rounded hover:bg-green-500 transition duration-300"
          >
            {copied ? 'Link Copiado!' : <FaCopy />}
          </button>
        </CopyToClipboard>
        {copied && (
          <span className="text-black font-normal mb-3">URL copiada para a área de transferência!</span>
        )}
      </div>
    </div>
  );
};

export default CopyButton;
