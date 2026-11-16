const text=(v,label)=>{if(typeof v!=='string')throw Error(label+' must be text.');};
export function validate(s){
 if(!s||s.version!==1)throw Error('Version 1 required.');
 text(s.name,'Name');if(!s.name.trim())throw Error('Study name required.');
 if(!Array.isArray(s.records)||s.records.length>200)throw Error('Use at most 200 records.');
 const ids=new Set();
 for(const r of s.records){
  for(const k of ['id','title','architecture','interfaceNotes','uncertainty','reviewer','rationale','status'])text(r[k],k);
  if(!r.id.trim()||ids.has(r.id)||!r.title.trim())throw Error('Unique IDs and nonempty titles required.');ids.add(r.id);
  if(!['draft','in-review','reviewed'].includes(r.status))throw Error('Invalid review status.');
  if(!Array.isArray(r.evidence)||r.evidence.length>50)throw Error('Use at most 50 evidence references per record.');
  for(const e of r.evidence){for(const k of ['reference','note','basis'])text(e[k],k);if(!['synthetic','declared','measured'].includes(e.basis))throw Error('Invalid evidence basis.');}
  if(r.status==='reviewed'&&(!r.reviewer.trim()||!r.rationale.trim()))throw Error('Reviewed records require a reviewer and rationale.');
 }
 return s;
}
export function summarize(s){validate(s);return s.records.map(r=>({id:r.id,title:r.title,status:r.status,evidenceCount:r.evidence.length,flags:[
 ...(!r.architecture.trim()?['Architecture description missing']:[]),
 ...(!r.interfaceNotes.trim()?['Interoperability notes missing']:[]),
 ...(!r.uncertainty.trim()?['Uncertainty not documented']:[]),
 ...(!r.evidence.some(e=>e.reference.trim())?['Source reference missing']:[]),
 ...(r.evidence.some(e=>e.basis==='synthetic')?['Includes synthetic evidence']:[]),
 ...(r.status!=='reviewed'?['Human review pending']:[])
 ]}));}
export function csv(rows){
 const q=v=>'"'+String(v??'').replace(/^[=+@-]/,"'$&").replaceAll('"','""')+'"';
 return [['id','title','status','evidenceCount','flags'],...rows.map(r=>[r.id,r.title,r.status,r.evidenceCount,r.flags.join('; ')])].map(r=>r.map(q).join(',')).join('\r\n');
}
