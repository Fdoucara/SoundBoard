export function soundBoard(){
    document.addEventListener("keydown", function(e){ 
        let touch = e.keyCode;
        
        let audio = document.querySelector(`audio[data-key="${touch}"]`);
        let bouton = document.getElementById(touch);
        
        if(!audio){
            return;
        }
        audio.play();
        audio.currentTime = 0;
        
        bouton.classList.add('sound-active');
        audio.addEventListener("ended", function(){
            bouton.classList.remove('sound-active');
        })
        })        
}

export function soundBoardPhone(){
    document.addEventListener("click", function(e){ 
        let tactile = e.target.getAttribute("id");
        
        let audio = document.querySelector(`audio[data-key="${tactile}"]`);
        
        if(!audio){
            return;
        }
        audio.play();
        audio.currentTime = 0;
        
        e.target.classList.add('sound-active');
        audio.addEventListener("ended", function(){
            e.target.classList.remove('sound-active');
        })
        })        
}