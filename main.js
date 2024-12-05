import {themeList,importThemes,exportAllThemes,exportTheme,applyTheme,previewTheme,updateVar,addCustomTheme,themes} from './themeSmith.min.js'

const themeSelect = document.getElementById('theme-select');
function optionsCreator() {
    Object.keys(themes).forEach(theme=>{
        themeSelect.appendChild(new Option(`${theme}`,`${theme}`)) 
    })
}

themeSelect.addEventListener('change', (event) => {
  previewTheme(event.target.value);
});
document.querySelector("#apply").addEventListener("click",()=>{
    applyTheme(themeSelect.value)
})
window.onload = () => {
    optionsCreator()
    themeSelect.value = localStorage.getItem("theme")
}


document.querySelector("#themeFileInput").addEventListener("change", (e)=>{
    const btn = document.querySelector("#importThemesBtn")
    btn.onclick = ()=>{
        importThemes(e)
    }
}) 
document.querySelector(".export .export-all").onclick = ()=> exportAllThemes()
document.querySelector(".export .export-curr").onclick = ()=> exportTheme(localStorage.getItem("theme"))
