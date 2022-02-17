// NESTED LOOP ---> Loop didalam Loop

for (let i = 0; i < 3; i++) {
  // Outside Loop
  for (let j = 0; j < 3; j++) {
    // Inside Loop
    // console.log(`Outside Loop ${i}, Inside Loop ${j}`)
  }
}

// i = 0, 0 < 3? true ---> j = 0, 0 < 3? true -> console.log jalan
//                    ---> j = 1, 1 < 3? true -> console.log jalan
//                    ---> j = 2, 2 < 3? true -> console.log jalan
//                    ---> j = 3, 3 < 3? false -> Balik ke Outside Loop
// i = 1, 1 < 3? true ---> j = 0, 0 < 3? true -> console.log jalan
//                    ---> j = 1, 1 < 3? true -> console.log jalan
//                    ---> j = 2, 2 < 3? true -> console.log jalan
//                    ---> j = 3, 3 < 3? false -> Balik ke Outside Loop
// i = 2, 2 < 3? true ---> j = 0, 0 < 3? true -> console.log jalan
//                    ---> j = 1, 1 < 3? true -> console.log jalan
//                    ---> j = 2, 2 < 3? true -> console.log jalan
//                    ---> j = 3, 3 < 3? false -> Balik ke Outside Loop

// for(let i=0; i < 2; i++){
//     console.log(i) // 1x, 2x
//     for(let j=0; j<2; j++){
//         console.log(j) // 1x, 2x, 3x, 4x
//     }
// }

for (let i = 1; i < 4; i++) {
  console.log(i);
  for (let j = 0; j < i; j++) {
    // J=0 -> J=1
    // console.log(j);
  }
}

// i = 0 : 0 < 2? true ---> console.log 0, j = 0 : 0 < 0? false
// i = 1 : 1 < 2? true ---> console.log 1, j = 0 : 0 < 1? true ---> console.log 0
//                     --->                j = 1 : 1 < 1? false
// i = 2 : 2 < 2? false!!!
