//předpověď počasí na 5 dní, každý den jedna
export const oneForecastPerDay = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

//funkce pro převod Unix Time Stamp pro čas východu a západu Slunce
export const convertTimeStamp = (sunTime) => {
    const timeObject = new Date(sunTime * 1000);
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

//seznam měst
export const cities = [
    "Abuja",
    "Amsterdam",
    "Aswān",
    "Athens",
    "Bangkok",
    "Barcelona",
    "Belgrade",
    "Brno",
    "Budapest",
    "Buenos Aires",
    "Cape Town",
    "Dakar",
    "El Alto",
    "Hanoi",
    "Harbin",
    "Kingston",
    "Kuala Lumpur",
    "Kuwait",
    "Kyiv",
    "Lagos",
    "Ljubljana",
    "London",
    "Madrid",
    "Melbourne",
    "Miami",
    "Minsk",
    "Moscow",
    "New Delhi",
    "New York",
    "Norilsk",
    "Paris",
    "Porto",
    "Prague",
    "Reykjavik",
    "Seoul",
    "Skopje",
    "Sofia",
    "Split",
    "Sydney",
    "São Paulo",
    "Tallinn",
    "Tenerife",
    "Tirana",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Winnipeg",
    "Yakutsk",
  ]; 