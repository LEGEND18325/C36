class Game{

constructor(){



}
getState(){
    var gameref=database.ref('Gamestate')
    gameref.on("value",function(data){
    gameState=data.val();

    })
}
update(state){
    database.ref('/').update({Gamestate:state})
}
start(){
    if(gameState===0){
        player=new Player()
        player.getcount()
        form=new Form()
        form.display()
    }
}

}