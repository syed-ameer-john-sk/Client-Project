
import os

file_path = r'c:\Project\Client Project\styles.css'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# We want to keep lines up to 1724 (which is index 1723)
# Actually, let's look for the marker just in case
marker = '/* ========== QUANTUM COMPONENTS ========== */'
truncate_index = -1

for i, line in enumerate(lines):
    if marker in line:
        truncate_index = i
        break

if truncate_index != -1:
    new_lines = lines[:truncate_index]
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print(f"Successfully truncated styles.css at line {truncate_index + 1}")
else:
    # Fallback to line 1724 if marker not found
    truncate_index = 1724
    if len(lines) > truncate_index:
        new_lines = lines[:truncate_index]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Marker not found. Truncated styles.css at default line {truncate_index}")
    else:
        print("File is already shorter than default truncation line. No changes made.")
