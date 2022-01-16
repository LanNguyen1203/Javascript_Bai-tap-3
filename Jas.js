let a = + prompt('Số tiền vay (đơn vị triệu đồng)');
let b = + prompt('Lãi suất (%)');
let c = + prompt('Số năm');
let R = a*b/100
let S = a+c*R
document.write('Sau '+ c + ' năm số tiền cả gốc lẫn lãi là: ' + S + ' triệu đồng')