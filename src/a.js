import React, { useEffect } from 'react';

const MyTextarea = () => {
  useEffect(() => {
    const handleSelectionChange = () => {
      const selectedText = window.getSelection().toString();
      console.log('Selected Text:', selectedText);
    };

    const textarea = document.getElementById('myTextArea');
    textarea.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      textarea.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return (
    <textarea id="myTextArea"></textarea>
  );
};

export default MyTextarea;
