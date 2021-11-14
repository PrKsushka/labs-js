//задание1
let kvadrat='\u2588';
let probel='\u0020';
let k=probel.repeat(10)+kvadrat.repeat(2)+probel.repeat(10)+'\n'+
probel.repeat(8)+kvadrat.repeat(6)+probel.repeat(8)+'\n'+
probel.repeat(6)+kvadrat.repeat(10)+probel.repeat(6)+'\n'+
probel.repeat(4)+kvadrat.repeat(14)+probel.repeat(4)+'\n'+
probel.repeat(2)+kvadrat.repeat(18)+probel.repeat(2);

console.log(k+'\n'+kvadrat.repeat(22)+'\n'+k.split("").reverse().join(""));

//задание2
let line='\u2500';
let t='\t'+'\t';
let sum=arrLab2[474]+arrLab2[243]+ arrLab2[64]+arrLab2[177]+arrLab2[86];
function part(s){
    let part=arrLab2[s]+t+2*arrLab2[s]+t+3*arrLab2[s]+t+Math.pow(arrLab2[s],2)+'\n';
    return part;
}
let str=t+'x'+t+'\t'+'2*x'+t+'\t'+'3*x'+t+'\t'+'x*x'+'\n'+ t+line.repeat(45)+'\n'+
    t+ part(243)+ t+part(64)+ t+part(177)+ t+part(86)+  t+line.repeat(45)+'\n'+
    '\u2211'+ t+sum+t+2*sum+t+3*sum+t+5*Math.pow(sum,2)+'\n'+
line.repeat(55)+'\n'+'intotal:'+''+(6*sum+5*Math.pow(sum,2));

console.log(str);
