"use strict";class SilveryCSV{constructor({withHeader:t=!0,trim:r=!0}={}){this.withHeader=t,this.trim=r}splitCsv(t){return t.trim().split(/\r\n|\n|\r/).filter(t=>""!==t)}csvRowToArray(t){return t.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(t=>{const r=t.replace(/^"|"$/gm,"");return r&&r.length&&r.match(/\S+/g)&&!r.match(/""/g)?this.trim?r.trim():r:null})}csvToArray(t){const r=this.splitCsv(t);let s=[],i=r;!0===this.withHeader&&(s=r.slice(0,1),i=r.slice(1));const[[e],a]=[s.map(t=>this.csvRowToArray(t)),i.map(t=>this.csvRowToArray(t))];return{header:e||[],data:a}}}module.exports=SilveryCSV;