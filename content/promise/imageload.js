function loadImageAsync(url){
    return new Promise(function(resolve, reject){
        const image = new Image();
        image.onload = function(){
            resolve(image)
        };
        image.onerror = function(){
            reject(new Error('Could not load image at' + URL))
        };
        image.src = url;
    })
}