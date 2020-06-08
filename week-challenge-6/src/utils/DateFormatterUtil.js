import moment from 'moment';

const dateFormatter = (data = new Date()) => {
    const dateFormat = moment(data).format("DD/MM/YYYY");

    return dateFormat;
}

export default dateFormatter;