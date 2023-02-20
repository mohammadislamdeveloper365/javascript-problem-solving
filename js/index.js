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

function shapeEventHandler(event,input1Id,input2Id,errorId) {
    let base = getElementValue(input1Id,true);
    let height = getElementValue(input2Id,true);
    let errorElement = getElement(errorId);
    if(isNumber(base) && isNumber(height)) {
        let list = createElement("li",'');
        let div1;
        event.stopPropagation();
        if(event.target.id === "triangle-btn" || event.target.id === "triangle-box" 
        || event.target.id === "rhombus-btn" || event.target.id === "rhombus-box" 
        || event.target.id === "pentagon-btn" || event.target.id === "pentagon-box" )
        result = areaHalf(base,height);
        
        else if(event.target.id === "parallelogram-btn" || event.target.id === "parallelogram-box" 
            || event.target.id === "rectangle-btn" || event.target.id === "rectangle-box")
        result = areaFull(base,height);

        else (event.target.id === "ellipse-btn" || event.target.id === "ellipse-box")
        result = areaPie(base,height);
        
        if(event.target.id === "triangle-btn" || event.target.id === "triangle-box" )
        div1 = createElement('div',"Triangle");
        else if(event.target.id === "rectangle-btn" ||  event.target.id === "rectangle-box")
        div1 = createElement('div',"Rectangle");
        else if(event.target.id === "parallelogram-btn" || event.target.id === "parallelogram-box")
        div1 = createElement('div',"Parallel");
        else if(event.target.id === "rhombus-btn" || event.target.id === "rhombus-box")
        div1 = createElement('div',"Rhombus");
        else if(event.target.id === "pentagon-btn" || event.target.id === "pentagon-box")
        div1 = createElement('div',"Pentagon");
        else if (event.target.id === "ellipse-btn" || event.target.id === "ellipse-box")
        div1 = createElement('div',"Ellipse");
        let div2 = createElement('div');
        let span = createElement('span',result+"cm");
        let sup = createElement('sup',2);
        let button = createElement('button',"Convert");
        errorElement.innerText = '';
        resultField = getElement("result-list");
        addClassName(list,"d-flex");
        addClassName(list,"mb-3")
        div1.classList.add('col-xs-4');
        div2.classList.add('col-xs-4');
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

addListener("triangle-btn","click",function (event) {
    shapeEventHandler(event,"triangle-base","triangle-height","error-triangle")
})
addListener("triangle-box","click",function (event) {
    shapeEventHandler(event,"triangle-base","triangle-height","error-triangle")
});
addListener("rectangle-btn","click",function (event) {
    shapeEventHandler(event,"rectangle-base","rectangle-height","error-rectangle")
})
addListener("rectangle-box","click",function (event) {
    shapeEventHandler(event,"rectangle-base","rectangle-height","error-rectangle")
});

addListener("parallelogram-btn","click",function (event) {
    shapeEventHandler(event,"parallelogram-base","parallelogram-height","error-parallelogram")
})
addListener("parallelogram-box","click",function (event) {
    shapeEventHandler(event,"parallelogram-base","parallelogram-height","error-parallelogram")
});

addListener("rhombus-btn","click",function (event) {
    shapeEventHandler(event,"rhombus-base","rhombus-height","error-rhombus")
})
addListener("rhombus-box","click",function (event) {
    shapeEventHandler(event,"rhombus-base","rhombus-height","error-rhombus")
});

addListener("pentagon-btn","click",function (event) {
    shapeEventHandler(event,"pentagon-base","pentagon-height","error-pentagon")
})
addListener("pentagon-box","click",function (event) {
    shapeEventHandler(event,"pentagon-base","pentagon-height","error-pentagon")
});

addListener("ellipse-btn","click",function (event) {
    shapeEventHandler(event,"ellipse-base","ellipse-height","error-ellipse")
})
addListener("ellipse-box","click",function (event) {
    shapeEventHandler(event,"ellipse-base","ellipse-height","error-ellipse")
});

// addListener('triangle-box','mouseout',function(event){
//     getElement(event.target.id).style.backgroundColor = ""
   
// })
// addListener('triangle-box','mouseover',function(event){
//     getElement(event.target.id).style.backgroundColor = 'rgba(' 
//     + randomcolor() + ',' + randomcolor() 
//     + ',' + randomcolor() + '\)'
    
// })

// addListener('rectangle-box','mouseout',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = ""
   
// })
// addListener('rectangle-box','mouseover',function(event){

//     getElement(event.target.id).style.backgroundColor = 'rgba(255,0,0,0.3)'
    
// })
// addListener('parallelogram-box','mouseout',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = ""
   
// })
// addListener('parallelogram-box','mouseover',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = 'rgba(255,0,0,0.3)'
    
// })

// addListener('rhombus-box','mouseout',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = ""
   
// })
// addListener('rhombus-box','mouseover',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = 'rgba(255,0,0,0.3)'
    
// })
// addListener('pentagon-box','mouseout',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = ""
   
// })
// addListener('pentagon-box','mouseover',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = 'rgba(255,0,0,0.3)'
    
// })
// addListener('ellipse-box','mouseout',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = ""
   
// })
// addListener('ellipse-box','mouseover',function(event){
//     console.log(getElement(event.target.id).style.backgroundColor)
//     getElement(event.target.id).style.backgroundColor = 'rgba(255,0,0,0.3)'
    
// })