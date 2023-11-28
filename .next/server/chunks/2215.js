"use strict";exports.id=2215,exports.ids=[2215],exports.modules={42215:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Page});var l=s(57087),i=s(99582),r=s.n(i),a=s(19134),n=s(36960),o=s.n(n),d=s(73867),c=s(45232),m=s(76937);function Page(){let e=(0,m.useRouter)(),{data:t}=(0,c.useSession)();t&&e.replace("/game");let[s,i]=(0,d.useState)(""),[n,g]=(0,d.useState)(""),[x,u]=(0,d.useState)(!1),HandleSubmit=async t=>{t.preventDefault();try{let t=await (0,c.signIn)("credentials",{email:s,password:n,redirect:!1});if(!t||t.error){u(!0);return}e.replace("/game")}catch(e){console.log("Error signing in: ",e)}};return l.jsx(l.Fragment,{children:(0,l.jsxs)("div",{className:"mt-12 flex min-h-full flex-1",children:[l.jsx("div",{className:"flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24",children:(0,l.jsxs)("div",{className:"mx-auto w-full max-w-sm lg:w-96",children:[(0,l.jsxs)("div",{children:[l.jsx("h2",{className:"mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"}),(0,l.jsxs)("p",{className:"mt-2 text-sm leading-6 text-gray-500",children:["Not a member?"," ",l.jsx(o(),{className:"hover:text-grey-900 font-bold text-black",href:"/signup",children:"Join for free"})]})]}),(0,l.jsxs)("div",{className:"mt-10",children:[l.jsx("div",{children:(0,l.jsxs)("form",{onSubmit:HandleSubmit,action:"#",method:"POST",className:"space-y-6",children:[(0,l.jsxs)("div",{children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{onChange:e=>i(e.target.value),id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,l.jsxs)("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),l.jsx("div",{className:"mt-2",children:l.jsx("input",{onChange:e=>g(e.target.value),id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),x&&l.jsx("div",{className:"mt-2 text-sm leading-6 text-red-500",children:"Invalid login information"})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[l.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"}),l.jsx("label",{htmlFor:"remember-me",className:"ml-3 block text-sm leading-6 text-gray-700",children:"Remember me"})]}),l.jsx("div",{className:"text-sm leading-6",children:l.jsx("a",{href:"#",className:"text-grey-600 hover:text-grey-500 font-semibold",children:"Forgot password?"})})]}),l.jsx("div",{children:l.jsx("button",{type:"submit",className:"focus-visible:outline-grey-600 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",children:"Sign in"})})]})}),(0,l.jsxs)("div",{className:"mt-10",children:[(0,l.jsxs)("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:l.jsx("div",{className:"w-full border-t border-gray-200"})}),l.jsx("div",{className:"relative flex justify-center text-sm font-medium leading-6",children:l.jsx("span",{className:"bg-white px-6 text-gray-900",children:"Or continue with"})})]}),(0,l.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[(0,l.jsxs)("button",{onClick:()=>(0,c.signIn)("google",{callbackUrl:"http://localhost:3000/game"}),type:"button",className:"flex w-full items-center justify-center rounded-lg  bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 ",children:[l.jsx("svg",{width:"20",height:"20",fill:"currentColor",className:"mr-2",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"})}),"Google"]}),(0,l.jsxs)("button",{onClick:()=>(0,c.signIn)("github",{callbackUrl:"http://localhost:3000/game"}),type:"button",className:"flex w-full items-center justify-center rounded-lg  bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2  focus:ring-offset-gray-200 ",children:[l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",className:"mr-2",viewBox:"0 0 1792 1792",children:l.jsx("path",{d:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"})}),"GitHub"]})]})]})]})]})}),l.jsx("div",{className:"relative hidden w-0 flex-1 lg:block",children:l.jsx(r(),{className:"absolute inset-0 h-full w-full object-cover",src:a.default,alt:""})})]})})}}};