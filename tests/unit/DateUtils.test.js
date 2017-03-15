import DateUtils from '../../app/common/DateUtils';

describe('DateUtils', () => {

    it('should return correct month names', () => {
        expect(DateUtils.getMonthNames()).toMatchSnapshot();
    });

    it('should return correct week day names', () => {
        expect(DateUtils.getWeekDaysNames()).toMatchSnapshot();
    });

    it('should return correct month name from date object', () => {
        var d = new Date();
        d.setFullYear(2017, 3, 15); // april
        expect(DateUtils.getMonth(d)).toMatchSnapshot();
    });

    it('should return correct \'month and day\' string', () => {
        var d = new Date();
        d.setFullYear(2017, 3, 15); // april
        // 15 April
        expect(DateUtils.getMonthDayString(d)).toMatchSnapshot();
    });

    it('should return correct day name from date object', () => {
        var d = new Date();
        d.setFullYear(2017, 3, 15); // april
        // Saturday
        expect(DateUtils.getDayString(d)).toMatchSnapshot();
    });
});