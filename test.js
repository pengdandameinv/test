setTimeout(function(){
	console.log(1);
});

new Promise(function(resolve, reject){
	console.log(2);
	resolve(3);
}).then(function(val){
	console.log(val);
})

console.log(4);

console.log(5);

console.log(6);

console.log(7);