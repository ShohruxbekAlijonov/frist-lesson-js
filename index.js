/*shart:
 -agar son 3 ga bo'linsa -> 3ga bo'linadi
 -agar son 5ga bolinsa -> 5ga bo'linadi
 -agar son 3ga va 5ga bo'linsa -> 3ga ham 5ga ham bo'linadi 
 --agar son bo'linmasa bo'linmaydi degan qiymat console da chiqarsin.*/

 function sonlar(nomalum){
    if (nomalum %  15 === 0) return "5 ga va 3 ga bo'linadi";
    else if (nomalum % 5 ===0) return "son 5 ga bo'linadi";
    else if (nomalum % 3 === 0) return "son 3 ga bo'linadi";
    else return nomalum;
 }
 const natija = sonlar(10);
 console.log(natija);
 
 
 
 
 
 
 
 
 