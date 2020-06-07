/* eslint-disable class-methods-use-this */

class DateHelper {
  formatNow(): string {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const now = new Date();

    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    return `${month} ${day}, ${year}`;
  }
}

export default new DateHelper();
