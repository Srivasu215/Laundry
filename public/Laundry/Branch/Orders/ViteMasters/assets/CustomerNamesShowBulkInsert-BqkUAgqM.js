import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";let b=async()=>{document.getElementById("RefreshBSTableId").click()},m=({inData:t})=>{let a=t;var e=$("#table");e.bootstrapTable("load",a)},j=({inData:t})=>{let e=t.split(`\r
`);var n=$("#table");let o=n.bootstrapTable("getVisibleColumns").map(c=>c.field);console.log("jVarLocalColumnNames : ",o);let r=e.map(c=>{let s={};return c.split("	").forEach((u,i)=>{console.log("LoopIndex : ",i,o[1]),s[o[i]]=u}),s});console.log("jVarLocalCollection : ",r);var n=$("#table");n.bootstrapTable("load",r)},L=t=>{const a=t.target.files[0],e=new FileReader;e.onload=()=>{if(a.type==="text/plain"&&j({inData:e.result}),a.type==="application/json"){const l=JSON.parse(e.result);m({inData:l})}},e.readAsText(a)},p=()=>{document.getElementById("formFile").addEventListener("change",L)},F=()=>{p()};const V={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-show-columns":"true","data-show-columns-toggle-all":"true","data-click-to-select":"true","data-filter-control":"true","data-show-export":"true","data-id-field":"pk","data-show-toggle":"true"},S={tableAttributes:V},h=()=>{var t=$("#table");t.attr(S.tableAttributes)},f=()=>{h(),g().then()},g=async()=>{var t=$("#table");t.bootstrapTable({data:[]})},I=()=>{y(),w()},y=()=>{d({inGetKey:"FromSave"})===null&&bootstrap.Alert.getOrCreateInstance("#FromSaveId").close()};let w=()=>{let t=d({inGetKey:"Records"}),e=document.getElementById("RecordsCountId");e!==null&&(e.innerHTML=t)},d=({inGetKey:t})=>{const a=window.location.search;return new URLSearchParams(a).get(t)};const T=()=>{I(),f(),F()};let v=async({inBodyData:t})=>{let a=jVarGlobalTableName,e=t,l=`/bin/${a}/MultiInsertWithCheck`,o={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)},r=await fetch(l,o);return console.log("response::",r),r};const C=()=>{var t=$("#table");return t.bootstrapTable("getData")};let B=async({inFromFetch:t,inBodyData:a})=>{if(t.status===200){const e=await t.json();return R({inBodyData:a}),await e}else swal.fire({icon:"error",title:"Duplicate"})},R=({inBodyData:t})=>{const a=new URL(window.location.href);a.searchParams.append("FromSave",!0),a.searchParams.append("Records",t.length),window.location.href=a.href},D=async()=>{{let t=await C(),a=await v({inBodyData:t});await B({inFromFetch:a,inBodyData:t})}};const A=()=>{let a=document.getElementById("remove");a!==null&&a.addEventListener("click",D)},H=()=>{A()},E=()=>{T(),b().then(()=>{H()})};E();
