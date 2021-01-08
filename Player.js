class Player{

constructor(){


}
getcount(){
 var playerref=database.ref('Playercount')   
 playerref.on("value",function(data){
     playercount=data.val();
 })

 
}
updatecount(player){
database.ref('/').update({Playercount:player})
}
update(name){
var playerindex="Player"+playercount
database.ref(playerindex).set({name:name})
}
}