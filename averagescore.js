let diemhoa;
let diemly;
let diemsinh;
diemsinh = prompt(' nhap diem mon sinh');
diemly = prompt('nhap diem mon ly');
diemhoa = prompt('nhap diem mon hoa');
sinh = parseFloat(diemsinh);
hoa = parseFloat(diemhoa);
ly = parseFloat(diemly);
diemtrungbinh = (sinh + hoa + ly)/3
alert('diem trung binh 3 mon: ' + diemtrungbinh);
