import { useState, useEffect } from 'react';

const useDocumentDimensions = () => {
  const getDocumentDimensions = () => {
    const { clientWidth: width, clientHeight: height } =
      document.documentElement;
    return {
      width,
      height,
    };
  };

  const [documentDimensions, setDocumentDimensions] = useState(
    getDocumentDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setDocumentDimensions(getDocumentDimensions());
    };
    // イベントの登録
    window.addEventListener('resize', onResize);
    // 登録解除
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return documentDimensions;
};

export default useDocumentDimensions;
