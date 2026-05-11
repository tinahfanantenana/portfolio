export function activeMenu(page){
    const menuLinks=document.querySelectorAll('nav a[data-page]');

    if (!menuLinks) return ;

    menuLinks.forEach(link=>{
        link.classList.remove('active');
    });

    const activeLink=document.querySelector(`nav a[data-page="${page}"]`);

    if (activeLink) {
        return activeLink.classList.add('active');
    }

    
}