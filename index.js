// Using a constructor function
function Iterator(array) {
    this.index = 0;
    this.array = array;
    this.next = function() {
        return this.array[this.index++];
    }
    this.hasNext = function() {
        return this.index < this.array.length;
    }
}

const nums = [1, 2, 3, 4, 5];
var it = new Iterator(nums);

while (it.hasNext()) {
    console.log(it.next());
}


// Using the prototype mechanism
Array.prototype.iterator = function() {
    return {
        index: 0,
        array: this,
        next: function() {
            return this.array[this.index++];
        },
        hasNext: function() {
            return this.index < this.array.length;
        }
    };
}

const vowels = new Array('a', 'e', 'i', 'o', 'u');
it = vowels.iterator();

while (it.hasNext()) {
    console.log(it.next());
}