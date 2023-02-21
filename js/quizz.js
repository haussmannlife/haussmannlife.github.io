
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

function wrong_answer(){
    //alert('FAUX')
    body = document.getElementsByTagName('body')[0]
    body.style.animation = 'none';
    body.offsetHeight;
    body.style.animation = null;
    body.style.animation = "red_answer 1s"
}
function right_answer(){
    //alert("Juste")
    body = document.getElementsByTagName('body')[0]
    body.style.animation = 'none';
    body.offsetHeight;
    body.style.animation = null;
    body.style.animation = "green_answer 1s"
}

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

function show_result() {
    question_div = document.getElementById("show_and_hide")
    question_div.style.display = "none"

    score = document.getElementById('score').innerHTML;
    document.getElementById("score_result").innerHTML = score;

    score_div = document.getElementById("hide_and_show")
    score_div.style.display = "block"
}


function rep1_click(question,reponse_) {
    ind = get_index()
    if (reponse_[ind][2]===1){
        right_answer()
        score = document.getElementById("score")
        old = Number(score.innerHTML) + 1
        score.innerHTML = old
    } else {
        wrong_answer()
    }
    new_index = ind + 1
    set_index(new_index)
    if (new_index >= question.length) {
        show_result()
    }
    changer_texte(get_index(),question,reponse_)
    reset_animation()
}
function rep2_click(question,reponse_) {
    ind = get_index()
    
    if (reponse_[ind][2]===2){
        right_answer()
        score = document.getElementById("score")
        old = Number(score.innerHTML) + 1
        score.innerHTML = old
    } else {
        wrong_answer()
    }
    
    new_index = ind + 1
    set_index(new_index)
    if (new_index >= question.length) {
        show_result()
    }
    changer_texte(get_index(),question,reponse_)
    reset_animation()
}
