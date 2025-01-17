import { format } from 'date-fns';

function formatDate(dateString) {
  return format(new Date(dateString), 'yyyy-MM-dd');
}

export default formatDate;