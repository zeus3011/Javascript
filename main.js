
async function fetchData() {
    try{
        const response = await fetch ("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        if(!response.ok){
            throw new Error("failed to fetch data")
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.error('error fetching data:', error);
        return null;
    }
}

const accordionWrapper = document.querySelector(".accordion");

async function createAccordionData(){
    const data = await fetchData();
    accordionWrapper.innerHTML = data.map(dataItem => `
    <div class="accordion-item">
        <div class="accordion-title">
        <h3>${dataItem.name}</h3>
        <i class="fa-arrow-up fa-solid"></i>
        </div>
        <div class="accordion-answer">
            <p>${dataItem.city}</p>
        </div>
    </div>
    `).join(" ")
}

createAccordionData();

// const getAccordianTitles = document.querySelectorAll(".accordion-title")

// getAccordianTitles.forEach(currentItem => {
//     currentItem.addEventListener('click', (e)=>{
//         if(currentItem.classList.contains('active')){
//             currentItem.classList.remove('active')
//         }
//         else{
//             currentItem.classList.add( 'active' );
//         }
//     })
// })

document.addEventListener('click', function (event) {
    const accordionTitle = event.target.closest('.accordion-title');
    if (accordionTitle) {
        accordionTitle.classList.toggle('active');
    }
});