import dayjs, {Dayjs} from "dayjs";

var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)


export const rules = {
    required: (message: string = "required field") => ({
        required: true,
        message,
    }),

    maxLength: (message: string = "The description is very long") => ({
        max:40,
        message
    }),
    minLength: (message: string = "The description is very short") => ({
        min:3,
        message
    }),

    isDateAfter: (message: string = "The date was before") => () => ({
        validator(_: any, value: Dayjs) {
            if (dayjs().isSameOrBefore(value)) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message))
        }
    })

}