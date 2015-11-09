# Group 8 - Chris, Peter and Victor

# Exercises 2 - README

# Exercises 2 - 1 Explain effect of code.

# 1.1 
foo  = { bar: "AWP" }
bar = "bar"
foo.undefined = foo[bar]
console.log(foo[foo.bar.baz])

A variable foo is created with a JSON object containing a key called bar with a value "AWP".
A variable bar is then assigned the string "bar". 
The undefined method of the JSON object foo is assigned the value "AWP" by using the bar element in foo by calling foo[bar], where bar is a string representation of the key bar. 
"AWP" is written as output in the fourth line by trying to call foo.bar.baz in foo, which is undefined triggering the undefined clause = "AWP". 

# 1.2 

