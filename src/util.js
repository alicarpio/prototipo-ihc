import {faker} from "@faker-js/faker";

export function* genNames(n) {
    for (let i = 0; i < n; i++) yield faker.name.fullName();
}

export function randInt(low, high) {
    const rand = Math.floor(Math.random() * high) + low;
    return rand > high ? high : rand;
}

export function timeNotification(){
    let today = new Date();
    return today.getHours() + ":" + today.getMinutes();
}