let count = 0;

while (false) {
    count++;

    if (count >= 20) {
        break;
    }
}

console.log(count);

do {
    count++;

    if (count >= 20) {
        break;
    }
} while (false);

console.log(count);