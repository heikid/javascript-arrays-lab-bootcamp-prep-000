const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name){
  return kittens.push (name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  return kittens.pop (name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten (name){
  return kittens.shift (name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten (name){
  return kittens.unshift (name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  return kittens = [name, ...kittens]
}
