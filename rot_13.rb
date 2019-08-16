# Task

# ROT13 (short for rotate 13) is an encryption problem. Create a function which takes a
# string, where each letter in the string will be replaced with the 13th letter after it 
# in the alphabet. 

# The function should return the new string with each letter transformed. 

def rot13(string)
  alphabet = {
    'A' => 'N',
    'B' => 'O',
    'C' => 'P',
    'D' => 'Q',
    'E' => 'R',
    'F' => 'S',
    'G' => 'T',
    'H' => 'U',
    'I' => 'V',
    'J' => 'W',
    'K' => 'X',
    'L' => 'Y',
    'M' => 'Z',
    'N' => 'A',
    'O' => 'B',
    'P' => 'C',
    'Q' => 'D',
    'R' => 'E',
    'S' => 'F',
    'T' => 'G',
    'U' => 'H',
    'V' => 'I',
    'W' => 'J',
    'X' => 'K',
    'Y' => 'L',
    'Z' => 'M'
  }

  new_string_arr = []

    string.split("").each do |i|
      # Split string into an array of its characters
      new_string_arr.push(alphabet[i])
      # Outside the loop is an empty arrray, to push in the transformed letters
      # For each letter in the split string array, the value of the key with that same
      # letter in the alphabet hash will be pushed into new_string_arr
    end

  new_string_arr.join('')
  # Join new_string_arr back together and return this final string

end