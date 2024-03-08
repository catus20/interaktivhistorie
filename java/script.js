function startStory() {
    let startContent = document.getElementById('startContent');
    let storyContent = document.getElementById('storyContent');

    if (startContent) {
        startContent.style.display = 'none';
    }

    if (storyContent) {
        storyContent.style.display = 'block';
    }
}

function select1() {
    let select1on1 = document.getElementById('select1on1')
    let storyContent = document.getElementById('startStory')

    storyContent.style.display = 'none'
    select1on1.style.display = 'block'
}

function select3() {
    let select3 = document.getElementById('select3on1');
    let fjerngammal = document.getElementById('startStory');

    if (fjerngammal) {
        fjerngammal.style.display = 'none';
    }

    if (select3) {
        select3.style.display = 'block';
    }
}

function select2on2() {
    let select2on2 = document.getElementById('select2on2')
    let select3on1 = document.getElementById('select3on1')

    select3on1.style.display = 'none'
    select2on2.style.display = 'block'
}

function select1on2() {
    document.getElementById('select1on2').style.display = 'block'
    document.getElementById('select3on1').style.display = 'none'
}

function select1on3() {
    document.getElementById('select1on2').style.display = 'none'
    document.getElementById('select1on3').style.display = 'block'
}

function select2on3() {
    document.getElementById('select1on2').style.display = 'none'
    document.getElementById('select2on3').style.display = 'block'
}

function select3on2() {
    document.getElementById('select1on2').style.display = 'none'
    document.getElementById('select3on3').style.display = 'block'
}



function restart() {
    location.reload();
}