// / <reference types="react-scripts" />


import { Dayjs, PluginFunc } from "dayjs";
import * as isSameOrBefore from "dayjs/plugin/isSameOrBefore";

declare module "dayjs" {
    interface Dayjs {
        isSameOrBefore(withoutSuffix?: boolean): string;
    }
}
