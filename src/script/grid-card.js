// Importing data from the gridata module
import { Data, Data2, Data4, data3, data5, data6,conversdata1, conversdata2, conversdata3, conversdata4, conversdata5, conversdata6} from './grid-card-component.js'

const dataSource = {
    'row1' : Data,
    'row2' : Data2,
    'row3' : data3,
    'row4' : Data4,
    'row5' : data5,
    'row6' : data6,
    'wrow1' : conversdata1,
    'wrow2' : conversdata2,
    'wrow3' : conversdata3,
    'wrow4' : conversdata4,
    'wrow5' : conversdata5,
    'wrow6' : conversdata6
    


}

// Defining the data source object mapping row identifiers to data arrays
const CardContainer = (cardContents) => {
    return `
        <div class="flex">
            ${cardContents.map((content) => `
            <div class="relative px-[8px] md:w-[100%] lg:w-[33.33%] ${content.resp}">
                <div class="relative mb-[18px] max-w-[592px] ">
                    <figure>
                    
                        <div >
                            <img class="w-[100%] h-auto block" src="${content.img}" alt="">
                        </div>
                        <div class=" px-[12px] pt-[12px] min-[960px]:text-[16px] text-[14px] text-start ">
                            <h4 class="text-[#ab3a3a] font-600">${content.header}</h4>
                            <a href="#" class="font-[500]">${content.productname}</a>
                            <p class="text-gray-500 font-[300]">${content.product} <br> 1 Color </p>
                            <p class="text-lg font-[500] pt-[12px]">${content.price}</p>
                        </div>
                    </figure>
                </div>
            </div>
            
            
            `).join("")}
        
        </div>
    `
}
// Custom element definition for card container
class CardComponent extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute("data-source");
        const dataSourceKey = dataSource[dataAtt]
        this.innerHTML = CardContainer(dataSourceKey)
    }
}
// Define the custom element 'card-container'
customElements.define("card-container", CardComponent)