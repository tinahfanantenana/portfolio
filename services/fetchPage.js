export async function fetchPage(content,page){
    const response= await fetch(`./partials/${page}.html`);
    const data= await response.text();
    return content.innerHTML=data;
}