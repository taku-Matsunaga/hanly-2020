import DayJS from 'dayjs'
import 'dayjs/locale/ja'

DayJS.locale('ja')

export default (context, inject) => {
  inject('dayjs', DayJS)
}
