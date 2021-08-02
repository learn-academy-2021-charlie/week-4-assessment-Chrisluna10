# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# expected input: array
# use puts to return a value
# add a variable and use method 
# use a method that will return array of words containing that letter
if letter_o.include?'o'
    puts "correct"
end

beverages_array.include?"o"

# I couldnt find a method that returned words from a particular letter. The only method I remembered was .include? but that returned whether or not it was true or false.



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Expected input: string
# use puts to return a value
# add variable 
# use method called .delete on end of variable
# delete any vowels within the string


puts album1.delete "aeiou"
puts album2.delete "aeiou"
puts album3.delete "aeiou"


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Psuedocode
# create a class called Bike
# def initialize - model, wheels(2), current_speed(0)
# create def get_info method that returns all data

class Bike
   def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
   end

   def get_info 
    p "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
   end
end
bike = Bike.new("Trek FX 1")
bike.get_info


# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
