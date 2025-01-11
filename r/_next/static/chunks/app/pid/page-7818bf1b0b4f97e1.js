(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{8811:(e,t,a)=>{Promise.resolve().then(a.bind(a,5739))},5739:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var s=a(5155),r=a(6472),l=a(2115),i=a(5781);i.t1.register(i.PP,i.kc,i.FN,i.No,i.hE,i.m_,i.s$);class n{calculate(e,t){var a,s,r;let l=e-t,i=this.kP*l;this.integral+=l*this.deltaTime;let n=this.kI*this.integral,h=(l-this.preError)/this.deltaTime,u=this.kD*h;return this.preError=l,a=i+n+u,s=this.minChange,r=this.maxChange,a<=s?s:a>=r?r:a}constructor(e,t,a,s=0,r=0,l=0){this.deltaTime=e,this.maxChange=t,this.minChange=a,this.kP=s,this.kI=r,this.kD=l,this.preError=0,this.integral=0}}function h(){let[e,t]=(0,l.useState)(0),[a,h]=(0,l.useState)(0),[u,p]=(0,l.useState)(0),[d,c]=(0,l.useState)(5),[m,o]=(0,l.useState)({data:[0],labels:["0"],preError:0,integral:0,i:0});return(0,l.useEffect)(()=>{let t=new n(.25,10,-10,e,a,u),s=i.t1.getChart("pidChart"),r=setInterval(function(){t.kP=e,t.kI=a,t.kD=u,t.preError=m.preError,t.integral=m.integral,++m.i,m.labels.push(m.i.toString());let r=m.data[m.data.length-1],l=t.calculate(d,r);m.data.push(r+l),m.labels.length>50&&(m.labels.shift(),m.data.shift()),m.preError=t.preError,m.integral=t.integral,o(m),null==s||s.update("resize")},250);return()=>clearInterval(r)},[e,a,u,d]),(0,s.jsx)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,s.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start w-6/12",children:[(0,s.jsxs)("form",{className:"items-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"kPInput",className:"",children:"Kp"}),(0,s.jsx)("input",{type:"range",id:"kPInput",className:"w-full",step:"0.01",min:"0",max:"1",value:e,onChange:e=>t(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:e})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"kIInput",children:"Ki"}),(0,s.jsx)("input",{type:"range",id:"kIInput",className:"w-full",step:"0.01",min:"0",max:"1",value:a,onChange:e=>h(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:a})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"kDInput",children:"Kd"}),(0,s.jsx)("input",{type:"range",id:"kDInput",className:"w-full",step:"0.01",min:"0",max:"1",value:u,onChange:e=>p(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:u})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"setPointInput",children:"Set Point"}),(0,s.jsx)("input",{type:"range",id:"setPointInput",className:"w-full",value:d,min:"-100",max:"100",onChange:e=>c(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:d})]})]}),(0,s.jsx)(r.N1,{options:{scales:{y:{suggestedMax:100,suggestedMin:-100}}},data:{labels:m.labels,datasets:[{label:"PID",data:m.data,tension:.5}]},id:"pidChart"})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[647,759,441,517,358],()=>t(8811)),_N_E=e.O()}]);