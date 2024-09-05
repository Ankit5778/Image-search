let accesskey='Of1HCcjtS2wuyFq9bDBXdWl2EYm37Ruoj3omUTmsNJY';

let search_item=document.getElementById('search_item')
let btnsearch=document.getElementById('btnsearch')
let search=document.getElementById('search')
let imgappand=document.getElementById('imgappand');
let show_more=document.getElementById('show_more')
let page=1;
let textvalue='';
async function searchurl()
{
    textvalue=search_item.value;
    let url=`https://api.unsplash.com/search/photos?page=${page}&query=${textvalue}
    &client_id=${accesskey}&per_page=24`;
    let response=await fetch(url)
    let data=await response.json();

    if(page===1)
    {
        imgappand.innerHTML="";
    }

    let result=data.results;

    result.map((result)=>{
        let img=document.createElement('img');
        img.id='image'
        img.src=result.urls.small;
        let a=document.createElement('a')
        a.href=result.links.html;
        a.target='_blank'
        a.appendChild(img);
        imgappand.appendChild(a)

    })
    show_more.style.display='block'
}
search.addEventListener('submit',function(e){
    e.preventDefault();
    page=1;
    searchurl();
})

show_more.addEventListener('click',function(){
    page++;
    searchurl();
})
