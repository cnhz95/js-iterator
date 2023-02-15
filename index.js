// Using a regular object
function Iterator(array) {
    index = 0;
    return {
        next: function() {
            return array[index++];
        },
        hasNext: function() {
            return index < array.length;
        }
    };
}

const nums = [1, 2, 3, 4, 5];
let it = Iterator(nums);

while(it.hasNext()){
    console.log(it.next());
}


// Using the prototype mechanism
Array.prototype.iterator = function() {
    let index = 0;
    let array = this;
    return {
        next: function() {
            return array[index++];
        },
        hasNext: function() {
            return index < array.length;
        }
    };
}

const vowels = new Array('a', 'e', 'i', 'o', 'u');
it = vowels.iterator();

while(it.hasNext()){
    console.log(it.next());
}