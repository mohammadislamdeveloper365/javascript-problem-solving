addListener('blog-btn','click',function () {
    window.location.href = "blog.html";
});


function areaHalf(base,height) {
    return 0.5 * base * height;
}

function areaFull(base,height) {
    return  base * height;
}

function areaPie(base,height) {
    return  3.1416 * base * height;
}

function shapeEventHandler(containerId,input1Id,input2Id,errorId) {
    let base = getElementValue(input1Id,true);
    let height = getElementValue(input2Id,true);
    let errorElement = getElement(errorId);
    if(isNumber(base) && isNumber(height)) {
        let list = createElement("li",'');
        let div1;
        if( containerId === "triangle-box" 
        || containerId === "rhombus-box" 
        || containerId === "pentagon-box" )
        result = areaHalf(base,height);
        
        else if(containerId === "parallelogram-box" 
            || containerId === "rectangle-box")
        result = areaFull(base,height);

        else ( containerId === "ellipse-box")
        result = areaPie(base,height);
        
        if(containerId === "triangle-box" )
        div1 = createElement('li',"Triangle");
        else if(  containerId === "rectangle-box")
        div1 = createElement('li',"Rectangle");
        else if(containerId === "parallelogram-box")
        div1 = createElement('li',"Parallel");
        else if(containerId === "rhombus-box")
        div1 = createElement('li',"Rhombus");
        else if( containerId === "pentagon-box")
        div1 = createElement('li',"Pentagon");
        else if (containerId === "ellipse-box")
        div1 = createElement('li',"Ellipse");
        let div2 = createElement('div');
        let span = createElement('span',result+"cm");
        let sup = createElement('sup',2);
        let button = createElement('button',"Convert");
        errorElement.innerText = '';
        resultField = getElement("result-list");
        addClassName(list,"d-flex");
        addClassName(list,"mb-3")
        console.log(div1)
        div1.classList.add('col-xs-4');
        div2.classList.add('col-xs-4');
        div2.classList.add('mr-2');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.classList.add('btn-converter');
        div2.append(span,sup);
        list.append(div1,div2,button)
        resultField.append(list);
        list.classList.add("align-items-center")
        
    }
    
    else {
        errorElement.innerText = showInputNumberErrorMessage()
    }
}

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

addListener("triangle-box","click",function () {
    shapeEventHandler("triangle-box","triangle-base","triangle-height","error-triangle")
})


addListener("rectangle-box","click",function (event) {
    shapeEventHandler("rectangle-box","rectangle-base","rectangle-height","error-rectangle")
});


addListener("parallelogram-box","click",function (event) {
    shapeEventHandler("parallelogram-box","parallelogram-base","parallelogram-height","error-parallelogram")
});


addListener("rhombus-box","click",function (event) {
    shapeEventHandler("rhombus-box","rhombus-base","rhombus-height","error-rhombus")
});


addListener("pentagon-box","click",function (event) {
    shapeEventHandler("pentagon-box","pentagon-base","pentagon-height","error-pentagon")
});


addListener("ellipse-box","click",function (event) {
    shapeEventHandler("ellipse-box","ellipse-base","ellipse-height","error-ellipse")
});

addListener('triangle-box','mouseleave',function(event){
    getElement(event.target.id).style.backgroundColor = ""
    
});

addListener('triangle-box','mouseenter',function(event){
    getElement(event.target.id).style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + ',0.5' + '\)'
    
})

addListener('rectangle-box','mouseleave',function(event){
    getElement(event.target.id).style.backgroundColor = ""
   
})
addListener('rectangle-box','mouseenter',function(event){
    getElement(event.target.id).style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + ',0.5' + '\)'
    
})
addListener('parallelogram-box','mouseleave',function(event){
    getElement(event.target.id).style.backgroundColor = ""
   
})
addListener('parallelogram-box','mouseenter',function(event){
    getElement(event.target.id).style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + ',0.5' +  '\)'
    
})

addListener('rhombus-box','mouseleave',function(event){
    getElement(event.target.id).style.backgroundColor = ""
   
})

addListener('rhombus-box','mouseenter',function(event){
    getElement(event.target.id).style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + ',0.5' + '\)'
    
})
addListener('pentagon-box','mouseleave',function(event){
    getElement(event.target.id).style.backgroundColor = ""
   
})
addListener('pentagon-box','mouseenter',function(event){
    getElement(event.target.id).style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + ',0.5' + '\)'
    
})
addListener('ellipse-box','mouseleave',function(event){
    
    getElement(event.target.id).style.backgroundColor = ""
   
})
addListener('ellipse-box','mouseenter',function(event){
    
    getElement(event.target.id).style.backgroundColor = 'rgba(' 
    + randomcolor() + ',' + randomcolor() 
    + ',' + randomcolor() + ',0.5' + '\)'
    
})



