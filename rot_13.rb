# Task

# ROT13 (short for rotate 13) is an encryption problem. Create a function which takes a
# string, where each letter in the string will be replaced with the 13th letter after it 
# in the alphabet. 

# The function should return the new string with each letter transformed. 

def rot13(string)
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
    new_string_arr = []
  
      string.split("").each do |i|
        # Split string into an array of its characters
        y = alphabet.index { |x| [i].include?(x) }
        # For each character, the alphabet array is iterated over, to select the
        # index of the element of the alphabet array that includes that character
        # This index number is saved as variable y 
        new_string_arr.push(alphabet[y+13])
        # Outside the loop is an empty arrray, to push in the transformed letters
        # To find the new letter, I look for the value in the alphabet array which has an 
        # index 13 letters beyond the original letter
      end
  
    new_string_arr.join('')

    # Join new_string_arr back together and return this final string
  
end
