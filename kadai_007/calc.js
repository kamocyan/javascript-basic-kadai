let num=15

if (0 == num % 3) {
    console.log('3の倍数です');
}
else if (0 == num % 5) {
    console.log('５の倍数です');
}
if (0 == num % 3 && 0 == num % 5){
    console.log('3と5の倍数です');
}else {
    console.log(num);
}
