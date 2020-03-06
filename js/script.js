var subjects=['coco','Sara','shoes','beak','bird','dog','cat','window','sun','dad','mum'];
var preps=['at','on','inside','beside','under','behind','in','outside','down','up','opposite'];
var mods=['wet','dry','listening','watching','looking','cool','pretty','rough','sketchy','smooth','smelly'];
var objects=['toliet','poop','noise','mouth','nswitch','blood','goose','egg','butt','rat','trash'];
var punctuations=['!',',',':>','?','.','~',':)','-','<',':('];



function wordGenerator(){
    var subject = subjects[Math.floor(Math.random()* subjects.length)];
    var prep = preps[Math.floor(Math.random()* preps.length)];
    var mod = mods[Math.floor(Math.random()* mods.length)];
    var object = objects[Math.floor(Math.random()* objects.length)];
    var punctuation = punctuations[Math.floor(Math.random()* punctuations.length)];
    // console.log();
    var sentence=subject+' '+prep+' '+mod+' '+object+punctuation;
    document.getElementById('sentence').innerHTML = sentence;
    document.title = sentence;
    
}

window.setInterval(function() {
    wordGenerator();
}, 4000);

wordGenerator();

