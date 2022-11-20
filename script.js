// Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .

async function getThirukkural(id) {
    const data = await fetch("https://api-thirukkural.vercel.app/api?num=" + id, {method: "GET"});
    const users = await data.json();
    console.log(users);
    document.querySelector(".data").innerHTML = ``;
    create(users);
  }

  getThirukkural(1);

  function create(users) {  
      const info = document.createElement("div");
      info.setAttribute("class", "block");
    info.innerHTML = `
      <p>Section = ${users.sect_tam}</p>
      <p>Chapter Group = ${users.chapgrp_tam}</p>
      <p>Chapter = ${users.chap_tam}</p>
      <p>Line 1 = ${users.line1}</p>
      <p>Line 2 = ${users.line2}</p>
      <p>Explanation = ${users.tam_exp}</p>
      <p>Section (English) = ${users.sect_eng}</p>
      <p>Chapter Group (English) = ${users.chapgrp_eng}</p>
      <p>Chapter (English) = ${users.chap_eng}</p>
      <p>Ennglish Translation = ${users.eng}</p>
      <p>English Explanation = ${users.eng_exp}</p>`
      document.querySelector(".data").append(info);
  }

  function go() {
      var a = document.getElementById("num").value;
      getThirukkural(a);
  }


  // Submitted or coded by Jagadeesh Kumar . S, 
//     you may contact me through my email address which is jagadeesh_2k17@proton.me,
//     kindly contribute some money to my Indian UPI address which is jagadeesh-kumar@ybl .

