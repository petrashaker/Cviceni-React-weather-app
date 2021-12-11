//předpověď počasí na 5 dní, každý den jedna
export const oneForecastPerDay = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

//funkce pro převod Unix Time Stamp pro čas východu a západu Slunce
export const convertTimeStamp = (sunTime, timezone) => {
    const milliseconds =(sunTime + timezone) - 3600;
    const timeObject = new Date(milliseconds * 1000);
    const hours = timeObject.getHours();
    const minutes = timeObject.getMinutes();
    const formatedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    return formatedTime
}

//funkce pro převod Unix Time Stamp pro datum a den
export const convertDateStamp = (dateStamp) => {
    const dateObject = new Date(dateStamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const formatedDate = days[(dateObject.getDay())] + ", " + (dateObject.getDate())+ " " + months[(dateObject.getMonth())];
    return formatedDate;
}
