const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	let len = arr.length;
	let sum = 0;
	let ans = [];
	let subarr = [];
	for(let i = 0; i < len; i++){
		if(sum+arr[i] <= n){
			subarr.push(arr[i]);
			sum+=arr[i];
		}else{
			ans.push(subarr);
			subarr=[arr[i]];
			sum = arr[i];
		}
	}

	if (subarr.length > 0) {
    ans.push(subarr);
  }
	return ans;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
