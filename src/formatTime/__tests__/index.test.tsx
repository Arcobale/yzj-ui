import formatTime from "..";

describe('formatTime', () => {
    it('正确格式化指定时间', () => {
        const timeStamp = 1696929812000;
        const formatDate = formatTime(timeStamp, 'YYYY年MM月DD日 hh:mm:ss');
        expect(formatDate).toEqual('2023年10月10日 17:23:32');
    });

    it('默认格式化指定时间', () => {
        const timeStamp = 1696929812000;
        const formatDate = formatTime(timeStamp);
        expect(formatDate).toEqual('2023-10-10 17:23:32');
    });
});