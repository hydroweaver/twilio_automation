function addFirstToLast(arr){
    if(arr.length == 0){//could have just written arr.length>0, would have been shorter
        return ''
    }
    else{
        return arr[0] + arr[arr.length-1]
    }
}