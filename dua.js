var kotor = 4500000;
var bpjs = 250000;
var pp = 10000;
var infak =50000;
var hari =24;
var tr = pp * hari;
var pajak = kotor * 2.5 / 100;
var krp= bpjs + infak + pajak;
var besih=kotor - krp + tr;

console.log("Gaji kotor     :Rp" + kotor);

console.log("potongan pajak 2,5%:Rp" + pajak);
console.log("Bpjs           :Rp" + bpjs);
console.log("Infak          :Rp" + infak);

console.log("Hasil potong   :Rp" + krp);

console.log("Transportasi   :Rp" + pp);
console.log("Total hari kerja :"+ hari);

console.log("total juntangan :Rp " + tr );

console.log("perhitungan gaji :");
console.log("gaji kotor - potongan + tunjangan ");
console.log("(4500000-412500) + 240000");
console.log("gaji bersih :Rp" + besih);

