export function getRoute(){
 const hash=window.location.hash;
 if(!hash)return{page:"home"};
 const parts=hash.replace("#/","").split("/");
 return{page:parts[0],id:parts[1]};
}
