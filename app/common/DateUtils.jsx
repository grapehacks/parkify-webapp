class DateUtils {

    static getDayString(date) {
        var weekdays = this.getWeekDaysNames();
        return weekdays[date.getDay()];
    }

    static getMonthDayString(date) {
        var dateString = date.getDate();
        var monthString = this.getMonth(date);
        return dateString + ' ' + monthString;
    }

    static getMonth(date) {
        var months = this.getMonthNames();
        return months[date.getMonth()];
    }

    static getMonthNames() {
        return ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
    }

    static getWeekDaysNames() {
        return [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

}

module.exports = DateUtils;