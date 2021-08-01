import momentTimezone from 'moment-timezone';
import { MomentInput } from 'moment-timezone';

const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const timeZone = {
  methods: {
    displayTimeZone: (data: MomentInput, dateFormat: string) => {
      return momentTimezone(data)
        .tz(browserTimezone)
        .format(dateFormat);
    },
  },
};

export default timeZone;
