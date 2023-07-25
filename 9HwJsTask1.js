window.onload = function(){
    let form = document.querySelector('div div input');
    let button = document.querySelector('div div button');
    button.addEventListener('click', function(){
        let number = Number(form.value);

        for (let i = 0; i < number; i++){
            let coloredDiv = document.createElement('div');
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.appendChild(coloredDiv);
            coloredDiv.innerText=i+1;
            coloredDiv.style.width = '50px';
            coloredDiv.style.height = '50px';
            coloredDiv.style.backgroundColor = '#' + randomColor;
            coloredDiv.style.marginBottom = '10px';
            coloredDiv.style.borderRadius = '20px';
            coloredDiv.style.alignItems = 'center';
            coloredDiv.style.justifyContent = 'center';
            coloredDiv.style.fontFamily = 'Handjet, cursive';
            coloredDiv.style.fontSize = '40px';
            coloredDiv.style.paddingLeft = '14px';
            coloredDiv.style.paddingBottom = '90px';
            coloredDiv.style.paddingTop = '10px';
        };
    
    });
};