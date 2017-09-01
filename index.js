const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name){
  return kittens.push (name)
}

var kittens = ["Milo", "Otis", "Garfield"]
function destuctivelyPrependKitten (name){
  return kittens.unshift (name, ...kittens)
}
