
import os

file_path = r'c:\Project\Client Project\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We want to keep lines 1-18 (0-17 index)
# We want to remove lines from 19 down to where </style> is.
# Let's find </style> starting from line 19.

start_index = 18 # line 19
end_index = -1

for i in range(start_index, len(lines)):
    if '</style>' in lines[i]:
        end_index = i
        break

if end_index != -1:
    new_lines = lines[:start_index] + [lines[end_index]] + lines[end_index+1:]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Successfully removed lines from {start_index+1} to {end_index}")
else:
    print("Could not find closing </style> tag after line 19")
