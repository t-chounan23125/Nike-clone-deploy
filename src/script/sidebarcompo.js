import {NewfeatureSideData} from './sidebar-data.js' 

const sidebarDataSource = {
    'lisfilterNewFeature' : NewfeatureSideData
}


const FilterContainer = (lisfilters) => {
    return `
    <div class="text-lg">
    ${lisfilters.map((contentli)=>`
        <div class="w-[100%] text-left border-b-[1px] border-[#E5E5E5] block leading-7">
            <span >
                <div class=" w-[98%] cursor-pointer relative flex justify-between py-[12px] trigger-content">
                    <div class="inline-block  w-[93%]"> ${contentli.title}</div>
                    <div class="mt-[5px]" id="chev-bttn" > <img src="./Image/down-chevron.png" alt="arrow"> </div>
                </div>
                
            </span>
            <!-- hidden -->
            <div class="option  hidden">
                <div>
                    <div class="block">
                        <button>
                            <label class="cursor-pointer mr-[6px] mt-[2px]">
                                <input class= "h-[23px] w-[23px] " type="checkbox"> 
                            </label>
            
                            <span>${contentli.bttn1}<span>
                        </button>
                        <button>
                            <label class="cursor-pointer mr-[6px] mt-[2px]">
                                <input class= "h-[23px] w-[23px] " type="checkbox"> 
                            </label>
            
                            <span> ${contentli.bttn2}</span>
                        </button>
                        <button>
                            <label class="cursor-pointer mr-[6px] mt-[2px]">
                                <input class= "h-[23px] w-[23px] " type="checkbox"> 
                            </label>
            
                            <span>${contentli.bttn3}</span>
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
        `).join("")}
    <div/>

    `
}
class ListComponent extends HTMLElement {
    connectedCallback(){
        const dataAtt = this.getAttribute("data-source")
        const dataSourceKey = sidebarDataSource [dataAtt]
        this.innerHTML = FilterContainer(dataSourceKey)
    }
}
customElements.define("li-filters", ListComponent )

// fitlter drop down
const option = document.querySelector('.option');
const chevbutton = document.querySelector('#chev-bttn');

chevbutton.addEventListener('click', () => {
  option.classList.toggle("hidden")

});



