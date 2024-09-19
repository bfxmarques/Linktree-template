'use client';

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

export function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <a
      className="cursor-pointer bg-black bg-opacity-40 border-black border-2 mb-2 flex items-center justify-center py-2 w-full text-white rounded-2xl"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
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
    <div className="flex justify-end w-full"> {}
      <div className="flex flex-col items-end">
        <CopyToClipboard text={currentUrl} onCopy={handleCopy}>
          <button
            className="bg-none text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-300"
          >
            {copied ? 'Link Copiado!' : <FaCopy />}
          </button>
        </CopyToClipboard>
        {copied && (
          <span className="text-green-500 mt-2">URL copiada para a área de transferência!</span>
        )}
      </div>
    </div>
  );
};

export default CopyButton;
