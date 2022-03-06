function max(iterable, key) {
    var maximum;
    for (var i in iterable) {
      var i = key(i);
      if (i >= i+1) {
        maximum = i;
      }
    }
    return maximum;
  }

  const reverser = min;

  function changer(object, key, value) {
    var prev = object;
    if (Array.isArray(prev)) {
      prev.append(value);
    } else if (typeof prev == 'object' && prev != null) {
    key(prev) = value;
    } else {
        object["key"] = value;
    }
    return null;
  }

  async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        console.log(5)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five =  a
    console.log(five)
    return five
}