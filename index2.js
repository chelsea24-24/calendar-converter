function updateDays() {
     const months = Number(document.getElementById('month').value);
     const yearNumber = Number(document.getElementById('year').value);
     const leapYear = (yearNumber % 4 === 0 && yearNumber % 100 !== 0) || (yearNumber % 400 === 0);
     const dayOptions = document.getElementById('date').querySelectorAll('option');
         if (months == 2 && leapYear) {
                  dayOptions.forEach((opt) => {
                    const day = Number(opt.textContent);
                  opt.style.display = day <= 29 ? 'block' : 'none';
             });
        }   
        else if (months == 2) {
                  dayOptions.forEach((opt) => {
                    const day = Number(opt.textContent);
                  opt.style.display = day <= 28 ? 'block' : 'none';
            });
         } 
        else if(months == 9 || months == 4 || months == 6 ||months == 11  ){
                  dayOptions.forEach((opt) => {
                    const day = Number(opt.textContent);
                opt.style.display = day <= 30 ? 'block' : 'none';
            });
        }
        else {
                  dayOptions.forEach(opt => opt.style.display = 'block');
        }
     const dateSelect = document.getElementById('date');
        if (dateSelect.selectedIndex >= dateSelect.options.length ||
            dateSelect.options[dateSelect.selectedIndex].style.display === 'none') {
            dateSelect.selectedIndex = 0;
        }
}
document.getElementById('month').addEventListener('change', updateDays);
document.getElementById('year').addEventListener('change', updateDays);
updateDays();


//------------------- UpdateDays is A Function of Date Restriction--------------------------



function gregToEth() {
  const d = Number(document.getElementById("date").value);
  const m = Number(document.getElementById("month").value);
  const y = Number(document.getElementById("year").value);
      let ethYear = y - 8; 
      const isLeap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
      const newYearDay = isLeap ? 12 : 11;
      const ethNewYear = new Date(y, 8, newYearDay);
      const gDate = new Date(y, m - 1, d);
          if (gDate >= ethNewYear) {
            ethYear = y - 7;
          }
      let days = Math.floor(
        (gDate - ethNewYear) / (1000 * 60 * 60 * 24)
      );
          if (days < 0) days += isLeap ? 366 : 365;
      let ethMonth;
      let ethDay;
          if (days < 360) {
              ethMonth = Math.floor(days / 30) + 1;
              ethDay = (days % 30) + 1;
            } 
          else {
              ethMonth = 13;
              ethDay = days - 360 + 1;
            }
  document.getElementById("result").textContent =
    `${ethDay.toString().padStart(2,"0")}/` +
    `${ethMonth.toString().padStart(2,"0")}/` +
    `${ethYear} E.C.`;
}
document.getElementById("change").addEventListener("click", gregToEth);


//--------------- gregToEth is a Function of Date conversion----------------------//


const convert = document.getElementById('convert');
convert.addEventListener('pointerover', displayFullSize);
function displayFullSize() {
    convert.textContent = "Ethiopian to Gregorian";
}
convert.addEventListener('pointerout', ()=>{
    convert.textContent = "ETH-GRE"
});


//---------------- displayFullSize is a Function of changing when hovering------------------//



function updateClock() {
      const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12; 
          hours = hours.toString().padStart(2, "0");

   document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}  ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock(); 


//------------ UpdateClock is a Function of addition of clock to the website-----------------//


function dym() {
    const today = new Date();
      const date = today.getDate().toString().padStart(2 , "0");
      const month =( today.getMonth()+1).toString().padStart(2 , "0");
      const year = today.getFullYear().toString().padStart(4 , "0");

    const dateWriteAt =document.getElementById("dmy");
    dateWriteAt.textContent = `${date}/${month}/${year} G.C.`;  
}
setInterval(dym, 1000);
dym();

// ---------- dym is a Function of addition pf date to the website---------------------------//