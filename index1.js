 function updateDays() {
    const months = Number(document.getElementById('month').value);
    const yearNumber = Number(document.getElementById('year').value);
    const leapYear = ((yearNumber +1)%4 === 0);
    const dayOptions = document.getElementById('date').querySelectorAll('option');
         let daysMax = 30;
            if(months === 13 ){
                daysMax = leapYear ? 6 : 5;
            }
            dayOptions.forEach((opt, index) => {
                opt.hidden = index >= daysMax;
            });
         const dateSelect = document.getElementById('date');
            if (Number(dateSelect.value) > daysMax) {
                dateSelect.value = "1";
            }
}
document.getElementById('month').addEventListener('change', updateDays);
document.getElementById('year').addEventListener('change', updateDays);
updateDays();


//------------------- UpdateDays is A Function of Date Restriction--------------------------


function ethToGreg() {
    const d = Number(document.getElementById("date").value);
    const m = Number(document.getElementById("month").value);
    const y = Number(document.getElementById("year").value);
        let gYear = y + 7;
        const prevGregYear = gYear - 1;
        const isLeap =
            (prevGregYear % 4 === 0 && prevGregYear % 100 !== 0) ||
            (prevGregYear % 400 === 0);
        const newYearDay = isLeap ? 12 : 11;
        const gDate = new Date(gYear, 8, newYearDay);
            let days = (m - 1) * 30 + (d - 1);
                if (m === 13) {
                days -= 1;
                }

  gDate.setDate(gDate.getDate() + days);

  document.getElementById("result").textContent =
    `${gDate.getDate().toString().padStart(2,"0")}/` +
    `${(gDate.getMonth()+1).toString().padStart(2,"0")}/` +
    `${gDate.getFullYear()} G.C.`;
}
document.getElementById("change").addEventListener("click", ethToGreg);


//------------ ethToGreg is a Function of Date conversion----------------------//


const convert = document.getElementById('convert');
convert.addEventListener('mouseover', displayFullSize);
function displayFullSize() {
    convert.textContent = "Gregorian to Ethiopian";
}
convert.addEventListener('mouseout', ()=>{
    convert.textContent = "GRE-ETH"
});


//---------------- displayFullSize is a Function of changing when hovering---------------------//



function updateClock() {
      const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12; // convert 0 → 12
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






