class DateUtils {

    static incrementByDays(date, days) {
        if(!date) {
            return '';
        }

        var futureDate = new Date();
        futureDate.setDate(date.getDate() + days);
        return futureDate;
    }

    static getDateString(date) {
        if(!date) {
            return '';
        }

        var yyyy = date.getFullYear();
        var mm = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1); // getMonth() is zero-based
        var dd  = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return ''.concat(dd).concat('.').concat(mm).concat('.').concat(yyyy);
    }

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