import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dating'
})
export class DatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
        const pastSeconds = Math.floor((+new Date() - +new Date(value)) / 1000);

        if (pastSeconds < 59)
            return 'Just now';
        const durations: { [key: string]: number } = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };
        let timeSpan;
        for (const i in durations) {
            timeSpan = Math.floor((pastSeconds / durations[i])/365);
            if (timeSpan > 0)
                if (timeSpan === 1) {
                    return `$(timeSpan) $(i) ago`;
                } else {
                    return timeSpan + ' ' + i + 's ago';
                }
        }
    }
    return value;
  }

}
