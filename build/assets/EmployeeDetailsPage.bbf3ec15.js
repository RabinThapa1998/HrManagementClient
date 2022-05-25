var N=Object.defineProperty,b=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var p=(e,s,d)=>s in e?N(e,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[s]=d,r=(e,s)=>{for(var d in s||(s={}))w.call(s,d)&&p(e,d,s[d]);if(h)for(var d of h(s))C.call(s,d)&&p(e,d,s[d]);return e},n=(e,s)=>b(e,y(s));import{a as F}from"./index.becf6c0c.js";import{r as o,c as z,u as k,a as I,b as a,j as t}from"./index.16cd437f.js";const j=()=>{const[e,s]=o.exports.useState(null);o.exports.useState(null);let d=z();const u=k(),f=d.userId;console.log("urlUserId",f);const v="https://hrpayroll.nepadristi.com/api/v1",g=I.get("token"),c=F.create({baseURL:v,headers:{Authorization:"Bearer "+g,"Content-Type":"multipart/form-data"}});o.exports.useEffect(()=>{c.get(`/admins/employees/${d.userId}`).then(l=>s(l.data.data)).catch(l=>console.log(l))},[]);const x=l=>{l.preventDefault(),console.log(e);var i=new FormData;i.append("email",e.email),i.append("firstName",e.firstName),i.append("lastName",e.lastName),i.append("phone",e.phone),i.append("address",e.address),i.append("dob",e.dob),i.append("citizenship",e.citizenship),i.append("cv",e.cv),i.append("image",e.image),c.put(`/admins/employees/${d.userId}`,i).then(m=>{alert("Successfully Updated")}).catch(m=>{console.log(m),alert("Error ,retry!")})};return e?t("div",{className:"w-full px-10 py-5 relative",children:[a("h2",{className:"text-2xl font-semibold text-sidebar absolute top-5",children:"Employee Details"}),a("button",{onClick:()=>u(-1),className:"top-5 right-10 absolute text-black   rounded-sm px-3 hover:shadow-sm",children:t("div",{className:"flex",children:[a("img",{src:"/backarrow.png",alt:"back",className:"h-10 w-10"}),a("p",{className:"text-lg my-auto",children:"Back"})]})}),t("div",{className:"p-5 mt-9",children:[a("h3",{className:"text-2xl capitalize font-medium",children:"Information"}),t("form",{method:"POST",onSubmit:x,children:[a("div",{className:" h-36 w-36 mx-auto bg-slate-300 rounded-full mb-6",children:a("img",{src:e.image,alt:"profile_pic",className:"h-36 w-36 bg-cover object-cover rounded-full shadow-lg"})}),t("div",{className:"grid grid-cols-2 capitalize gap-5",children:[t("div",{className:"flex flex-col shadow-sm p-2 border rounded",children:[a("label",{htmlFor:"firstname",className:"",children:"First name:"}),a("input",{id:"firstname",value:e.firstName,onChange:l=>s(n(r({},e),{firstName:l.target.value}))})]}),t("div",{className:"flex flex-col shadow-sm p-2 border rounded",children:[a("label",{htmlFor:"lastname",className:"",children:"Last name:"}),a("input",{id:"lastname",value:e.lastName,onChange:l=>s(n(r({},e),{lastName:l.target.value}))})]}),t("div",{className:"flex flex-col shadow-sm p-2 border rounded",children:[a("label",{htmlFor:"dob",className:"",children:"Date Of Birth:"}),a("input",{id:"dob",type:"date",value:e.dob,onChange:l=>s(n(r({},e),{dob:l.target.value}))})]}),t("div",{className:"flex flex-col shadow-sm p-2 border rounded",children:[a("label",{htmlFor:"address",className:"",children:"address:"}),a("input",{id:"address",name:"address",value:e.address,onChange:l=>s(n(r({},e),{address:l.target.value}))})]}),t("div",{className:"flex flex-col shadow-sm p-2 border rounded",children:[a("label",{htmlFor:"email",className:"",children:"email:"}),a("input",{id:"email",name:"email",value:e.email,onChange:l=>s(n(r({},e),{email:l.target.value}))})]}),t("div",{className:"flex flex-col shadow-sm p-2 border rounded",children:[a("label",{htmlFor:"phone",className:"",children:"Phone Number:"}),a("input",{id:"phone",name:"phone",value:e.phone,onChange:l=>s(n(r({},e),{phone:l.target.value}))})]})]}),t("div",{className:" mt-6 ",children:[a("h3",{className:"text-2xl capitalize font-medium",children:"documents"}),a("div",{className:"flex flex-col",children:e.documents.map((l,i)=>t("div",{className:"border p-4 rounded w-1/2",children:[a("p",{className:"font-medium",children:l.documentType}),a("img",{src:l.filename,alt:"img"})]},i))}),t("div",{className:"flex-col flex",children:[t("div",{className:"my-10",children:[a("label",{htmlFor:"citizenship",className:"text-lg font-bold",children:"Change citizenship"}),a("input",{type:"file",id:"citizenship",onChange:l=>s(n(r({},e),{citizenship:l.target.files[0]}))})]}),t("div",{className:"my-10",children:[a("label",{htmlFor:"cv",className:"text-lg font-bold",children:"Change cv"}),a("input",{type:"file",id:"cv",onChange:l=>s(n(r({},e),{cv:l.target.files[0]}))})]})]})]}),a("div",{className:"flex justify-end my-5",children:a("button",{className:"bg-primary rounded px-3 py-2 text-xl text-white  shadow-sm hover:shadow-xl",type:"submit",children:"Update"})})]})]})]}):a("div",{children:"Loading....."})};export{j as default};
