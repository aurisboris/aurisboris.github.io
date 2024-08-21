function closeWip(){
    document.getElementById('wip').style.display='none';
}
function navbar_click(value){
    window.scrollTo(0, 0); 
    let block = document.getElementById('block-navbar');
    block.style.display = 'block';

    let homepage = document.getElementById('home-parent');
    let projects = document.getElementById('project-parent');
    let skills = document.getElementById('skills-parent');
    let education = document.getElementById('educ-parent');
    let wexp = document.getElementById('wexp-parent');

    switch(value){
        case 1:
            switch_trait(2);
            homepage.style.display = 'flex';
            projects.style.display = 'none';
            skills.style.display = 'none';
            education.style.display = 'none';
            wexp.style.display = 'none';
            break;
        case 2:
            showProjectSelection(0);
            homepage.style.display = 'none';
            projects.style.display = 'flex';
            skills.style.display = 'none';
            education.style.display ='none';
            wexp.style.display = 'none';
            break;
        case 3:
            homepage.style.display = 'none';
            projects.style.display = 'none';
            skills.style.display = 'flex';
            education.style.display = 'none';
            wexp.style.display = 'none';
            break;
        case 4:
            switchEducInfo(0);
            homepage.style.display = 'none';
            projects.style.display = 'none';
            skills.style.display = 'none';
            education.style.display= 'flex';
            wexp.style.display = 'none';
            break;
        case 5:
            homepage.style.display = 'none';
            projects.style.display = 'none';
            skills.style.display = 'none';
            education.style.display= 'none';
            wexp.style.display = 'flex';
            break;

    }

    setTimeout(function(){
        let block = document.getElementById('block-navbar');
        block.style.display = 'none';
    },500);
}

function switch_trait(value){
    let trait1 = document.getElementById('trait-1');
    let trait2 = document.getElementById('trait-2');
    let trait3 = document.getElementById('trait-3');

    switch(value){
        case 0:
            trait1.style.display = 'none';
            trait2.style.display = 'flex';
            trait3.style.display = 'none';
            break;
        case 1:
            trait1.style.display = 'none';
            trait2.style.display = 'none';
            trait3.style.display = 'flex';
            break;
        case 2:
            trait1.style.display = 'flex';
            trait2.style.display = 'none';
            trait3.style.display = 'none';
            break;
    }
}

function switch_proj(value){
    let baos = document.getElementById('baos');
    let aws = document.getElementById('aws');
    let text = document.getElementsByClassName('psod-text');
    for(let i=0; i<text.length;i++){
        text[i].scrollTo(0,0);
    }

    switch(value){
        case 0:
            baos.style.display='flex';
            aws.style.display='none';
            break;
        case 1:
            baos.style.display='none';
            aws.style.display='flex';
            break;
    }
}

function showFeatures(){
    let selection = document.getElementById('project-selection-options');
    selection.style.height = '0';
    
    let features = document.getElementById('project-features');
    features.style.width = '100%';
    features.style.height = '100%';

    let media = document.getElementsByClassName('media-scroll')[0];
    let list = media.getElementsByClassName('pf-media-list')[0];
    let listcontainer = list.getElementsByTagName('ul')[0];

    listcontainer.scrollTo(0,0);
}

function showProjectSelection(value){
    let text = document.getElementsByClassName('psod-text');
    for(let i=0; i<text.length;i++){
        text[i].scrollTo(0,0);
    }

    let selection = document.getElementById('project-selection-options');
    selection.style.height = '40vw';

    let features = document.getElementById('project-features');
    features.style.width = '0';
    features.style.height = '0';
    switch_proj(value);
}

function displaySkillDetail(element){
    let icon = document.getElementById('spcd-icon');
    let title = document.getElementById('spcd-title');
    icon.style.display='block';
    icon.src = element.src;
    title.innerHTML = element.id;
}

function clearSkillDetail(){
    let icon = document.getElementById('spcd-icon');
    let title = document.getElementById('spcd-title');
    
    icon.style.display='none';
    title.innerHTML = '';
}

function switchEducInfo(value){
    let jhs = document.getElementById('educ-jhs');
    let shs = document.getElementById('educ-shs');
    let bsit = document.getElementById('educ-bsit');
    switch(value){
        case 0:
            jhs.style.display = 'flex';
            shs.style.display = 'none';
            bsit.style.display = 'none';
            break;
        case 1:
            jhs.style.display = 'none';
            shs.style.display = 'flex';
            bsit.style.display = 'none';
            break;
        case 2:
            jhs.style.display = 'none';
            shs.style.display = 'none';
            bsit.style.display = 'flex';
            break;
    }
}