import React, { useEffect, useState } from 'react';
import { formatTime } from 'yzj-ui';

const App: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(formatTime(Date.now(), 'YYYY年MM月DD日 hh:mm:ss'));
  const [siteDate, setSiteDate] = useState<string>();

  useEffect(() => {
    // 指定时间戳时间
    const timeStamp = 1696929812000;
    const siteStr: string = formatTime(timeStamp, 'YYYY年MM月DD日 hh:mm:ss');
    setSiteDate(siteStr);
  }, []);

  useEffect(() => {
    // 每秒更新一次时间
    const timer = setInterval(() => {
      const date = Date.now();
      const dateStr = formatTime(date, 'YYYY年MM月DD日 hh:mm:ss');
      setCurrentDate(dateStr);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const inputRef = React.createRef<HTMLInputElement>();
  const onFormatData = () => {
    const value = inputRef.current?.value;
    if (value) {
      const dateStr = formatTime(Number(value), 'YYYY年MM月DD日 hh:mm:ss');
      setSiteDate(dateStr);
    }
  }

  return (
    <>
      当前时间：{currentDate}
      <hr/>
      指定时间转换：
      <input type="number" ref={inputRef} defaultValue={1696929812000}/>
      &nbsp;<button type="button" onClick={onFormatData}>转换</button>&nbsp;
      {siteDate}
    </>
  );
};

export default App;
