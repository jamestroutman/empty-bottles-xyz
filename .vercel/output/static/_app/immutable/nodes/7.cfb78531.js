import{s as n,f as i,g as o,V as m,j as d,i as f,M as a,d as c}from"../chunks/scheduler.ae32195e.js";import{S as p,i as u}from"../chunks/index.a1c25cfa.js";function b(s){let e,l='<form class="w-[400px] mx-4 p-4 bg-white drop-shadow-lg" method="POST" action="?/create"><h2 class="text-xl font-bold mb-2">Create Profile</h2> <div><label id="first_name" for="first_name" class="block">first name</label> <input id="first_name" type="text" name="first_name" class="border-2 border-neutral-800 w-full px-4 py-2"/></div> <div class="mt-2"><label id="last_name" for="last_name" class="block">last name</label> <input id="last_name" type="text" name="last_name" class="border-2 border-neutral-800 w-full px-4 py-2"/></div> <div class="w-full flex justify-center mt-3"><button class="border-2 border-neutral-900 text-neutral-900 px-4 py-2 font-light hover:border-neutral-500" type="submit">Sign Up</button></div></form>';return{c(){e=i("div"),e.innerHTML=l,this.h()},l(t){e=o(t,"DIV",{class:!0,"data-svelte-h":!0}),m(e)!=="svelte-4n7j9n"&&(e.innerHTML=l),this.h()},h(){d(e,"class","grow w-full flex flex-row items-center px-48 pb-32 bg-neutral-100")},m(t,r){f(t,e,r)},p:a,i:a,o:a,d(t){t&&c(e)}}}class _ extends p{constructor(e){super(),u(this,e,null,b,n,{})}}export{_ as component};