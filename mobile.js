containerdiv=document.getElementById("parent")
parentdiv=document.createElement("div")
parentdiv.classList.add("col-sm-12","col-md-12","col-lg-12","col-xl-12","col-xxl-12")
parentdiv.setAttribute("id","pardiv")
containerdiv.appendChild(parentdiv)

let heading=document.createElement("h1")
heading.innerHTML="Mobile details"
heading.classList.add("text-center","text-primary")
parentdiv.appendChild(heading)

table=document.createElement("table")
table.classList.add("table")
parentdiv.appendChild(table)
      

 fetch("https://api-mobilespecs.azharimm.site/v2/brands")
.then((data)=>data.json())
.then((res)=>
{  

    row=document.createElement("tr")
       table.appendChild(row)
    data1=document.createElement("td")
    data1.classList.add("fs-6","fw-bold","text-success")
    data1.innerHTML="BrandId"
    row.appendChild(data1)

    data2=document.createElement("td")
    data2.classList.add("fs-6","fw-bold","text-success","text-wrap")
    data2.innerHTML="Brand Name"
    row.appendChild(data2)

    data3=document.createElement("td")
    data3.classList.add("fs-6","fw-bold","text-success")
    data3.innerHTML="BrandSlug"
    row.appendChild(data3)

    data4=document.createElement("td")
    data4.classList.add("fs-6","fw-bold","text-success","text-wrap")
    data4.innerHTML="Device Count"
    row.appendChild(data4)
   
    len=res.data
    // console.log(len.length)
    for(i=0;i<len.length;i++)
    {
           
    row2=document.createElement("tr")
    table.appendChild(row2)

    r2data1=document.createElement("td")
    r2data1.innerHTML=res.data[i].brand_id
    row2.appendChild(r2data1)

    r2data2=document.createElement("td")
    r2data2.innerHTML=res.data[i].brand_name
    row2.appendChild(r2data2)

    r2data3=document.createElement("td")
    r2data3.classList.add("text-break")
    r2data3.innerHTML=res.data[i].brand_slug
    row2.appendChild(r2data3)

    r2data4=document.createElement("td")
    r2data4.innerHTML=res.data[i].device_count
    row2.appendChild(r2data4)  
        
    }
})









































 // y=res.data[i].brand_slug
       
        // fetch(`https://api-mobilespecs.azharimm.site/v2/brands/${y}`)
        // .then((data)=>data.json())
        // .then((res)=>
        // {
        //     console.log("console="+res)
        //     // console.log(res.data.phones.brand)
        //    row3=document.createElement("tr")
        //     for(j=0;j<res.data.phones.length;j++)
        //     { 
                
        //                 console.log(res.data.phones[j].phone_name)
        //                 r2data5=document.createElement("td")
        //     r2data5.innerHTML=res.data.phones[j].phone_name
        //     row3.appendChild(r2data5) 
        //     table.appendChild(row3)
        //     }
        // })