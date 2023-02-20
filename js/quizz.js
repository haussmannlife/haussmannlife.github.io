
const question=[
    "En quel année est né Haussmann",
    "Combien de quartier a t il rénové",
    "Ses travaux ont durés"
]
const reponse_=[
    ["1867", "1844",1], //[REP1, REP2, BONNE_REPONSE]
    ["3 quartiers", "Tout Paris",2],
    ["Longtemps","Je sais pas wesh",2]
]

function get_index(){
    element_ = document.getElementById("index")
    i = Number(element_.innerHTML)
    return i
}
function set_index(new_number){
    element_ = document.getElementById("index")
    element_.innerHTML = new_number
}
set_index(0)
index=get_index()


function changer_texte(index,question,reponse_){
    q_nb = document.getElementById("question_number")
    q_nb.innerHTML = index+1
    
    q = document.getElementById("question_phrase")
    q.innerHTML = question[index]

    r1 = document.getElementById("rep1_bt")
    r1.innerHTML = reponse_[index][0]

    r2 = document.getElementById("rep2_bt")
    r2.innerHTML = reponse_[index][1]
}
changer_texte(index,question,reponse_)


function reset_animation() {
    var el_list = document.getElementsByClassName('q_span');
    
    for (let i = 0; i < el_list.length; i++) {
        el=el_list[i]
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null;
    }

    var el_list = document.getElementsByClassName('bt_anim');
    
    for (let i = 0; i < el_list.length; i++) {
        el=el_list[i]
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null;
    }

    var el = document.getElementById('question_phrase');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null;

    var el = document.getElementById('score');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}


function rep1_click(index,question,reponse_) {
    if (reponse_[index][2]===1){
        //alert("Juste")
        score = document.getElementById("score")
        old = Number(score.innerHTML) + 1
        score.innerHTML = old
    } else {
        alert("Faux")
    }
    ind = get_index()
    set_index(ind + 1)
    changer_texte(get_index(),question,reponse_)
    reset_animation()
}
function rep2_click(index,question,reponse_) {
    if (reponse_[index][2]===2){
        //alert("Juste")
        score = document.getElementById("score")
        old = Number(score.innerHTML) + 1
        score.innerHTML = old
    } else {
        alert("Faux")
    }
    ind = get_index()
    set_index(ind + 1)
    changer_texte(get_index(),question,reponse_)
    reset_animation()
}
